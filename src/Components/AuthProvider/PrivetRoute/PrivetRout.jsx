


import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';




const PrivetRout = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // location add 
    const location = useLocation()


    // set Loading
    if (loading) {
        return <div><span className="loading loading-spinner text-warning"></span></div>
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