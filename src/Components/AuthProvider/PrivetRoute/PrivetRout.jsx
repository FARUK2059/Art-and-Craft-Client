


import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useLottie } from 'lottie-react';

import lettoError from '../../../../public/letto.json';


const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // location add 
    const location = useLocation()

    //  Loader option set function
    const options = {
        animationData: lettoError,
        loop: true
    };

    const { View } = useLottie(options);

    // set Loading
    if (loading) {
        return <div className='grid justify-center'><div className="max-w-72 p-2 ml-20">
            {View}
        </div></div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivetRout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRout;