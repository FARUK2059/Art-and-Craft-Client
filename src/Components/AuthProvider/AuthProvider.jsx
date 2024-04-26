import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";


export const AuthContext = createContext(null);

const auth = getAuth(app);

// Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [dynamicTitle, setDynamicTitle] = useState('Craft Store');
    const [loading, setLoading] = useState(true);


    // Creat New user
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User Profile
    const updateUserProfile = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    // Sign In with Password
    const signInPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // gitHub LogIn 
    const gitHubLogIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }


    // Logout section
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    // UseState changed
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in th e state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubcribe();
        }
    }, [])


    // Setup Dynamic Title
    useEffect(() => {
        const updateTitle = (newTitle) => {
            setDynamicTitle(newTitle);
        };
        return () => {
            updateTitle();
        };
    }, []);



    // Output Info
    const authInfo = {
        user,
        loading,
        creatUser,
        updateUserProfile,
        signInPassword,
        googleLogIn,
        gitHubLogIn,
        logOut,
        dynamicTitle,
        updateTitle: setDynamicTitle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta charset="UTF-8" />
                <link rel="icon" type="" href="/public/Craft.png" />
            </Helmet>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;