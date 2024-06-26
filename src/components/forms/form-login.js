import axios from 'axios';
import {connect} from 'react-redux';
import { setLoading, setModal, setAuthToken, setError, setRoles, setEmail } from '../../actions/action';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import { jwtDecode } from 'jwt-decode';

const FormLogin = ({ setLoading, setModal, setAuthToken, loading, setError, error, setRoles, setEmail }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const form = document.querySelector('.login-form');

        const email = form.querySelector('.email').value;
        const password = form.querySelector('.password').value;

        const formData = {
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:5454/auth/login', formData);

            console.log("LOGIN RESPONCE:");
            console.log(response);

            const accessToken = response.data.jwt; // Assuming accessToken is returned from backend

            // Decode the JWT token to get user information
            const decodedToken = jwtDecode(accessToken);
            console.log(decodedToken);

            // Set user roles in Redux state
            setRoles(decodedToken.roles);
            setEmail(decodedToken.email);

            // Set the JWT token
            setAuthToken(accessToken);
            setModal();
        } catch (error) {
            console.log("ERROR: " + error);
            setError('Invalid credentials. Please try again.'); // Handle login errors
        }  finally {
            e.target.reset();
            setLoading(false);
        }
    };

    return (
        <>
            <h3>Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <input className="email" type="text" placeholder="Username"required />
                <input className="password" type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {loading && <Spinner/>}
            {error && <Error error={error}/>} 
        </>
    );
};

//TODO ERROR BOUNDRY

const mapStateToProps = (state) => ({
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = {
    setLoading,
    setModal,
    setAuthToken,
    setRoles,
    setError,
    setEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);