import { useContext } from "react";
import { AuthContext } from "../Providers/ProviderContext";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};


export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}