import axios from 'axios';

const fetchData = async (url) => {
    try {
        const response = await axios.get(`http://localhost:5454/api/v1/${url}`);

        // axios automatically throws an error for responses with status codes outside the range of 2xx
        console.dir(response);
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchData;
