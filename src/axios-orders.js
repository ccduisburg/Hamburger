import axios from 'axios';
const instance= axios.create({
    baseUrl:"https://react-my-burger-a0962.firebaseio.com/"
});
export default instance;