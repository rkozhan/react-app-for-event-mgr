import axios from 'axios';
import {connect} from 'react-redux';
import { setLoading, setModal, setError } from '../../actions/action';
import Spinner from '../spinner/spinner';
import Error from '../error/error';


const FormEventSave = ({ setLoading, setModal, loading, setError, error, userEmail, token }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Get form element using class name
        const form = document.querySelector('.event-form');

        const title = form.querySelector('.title').value;
        const description = form.querySelector('.description').value;
        const date = form.querySelector('.date').value;
        const time = form.querySelector('.time').value;
        const location = form.querySelector('.location').value;
        const category = form.querySelector('.category').value;

        // Get JWT token from localStorage

        const formData = {
            title,
            description,
            date,
            time,
            location,
            category,
            createdBy: userEmail
        };

        console.log(formData);

        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/events/save',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log('Response:', response.data);
            // Handle response as needed
        } catch (error) {
            console.error('Error:', error);
            setError(error);
        } finally {
            form.reset();
            setLoading('false')
        }
    };

    return (
        <div>
            <h3>Save Event</h3>
            <form className="event-form" onSubmit={handleSubmit}>
                <input type="text" className="title" placeholder="Title" required />
                <textarea className="description" placeholder="Description" required />
                <input type="date" className="date" required />
                <input type="time" className="time" required />
                <input type="text" className="location" placeholder="Location" required />
                <input type="text" className="category" placeholder="Category" required />
                <button type="submit">Save Event</button>
            </form>
        </div>
    );
};

//TODO ERROR BOUNDRY

const mapStateToProps = (state) => ({
    loading: state.loading,
    error: state.error,
    userEmail: state.email,
    token: state.token
});

const mapDispatchToProps = {
    setLoading,
    setModal,
    setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEventSave);
