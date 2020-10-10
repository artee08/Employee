import  axios  from 'axios';

const instance= axios.create({

  baseURL:'https://employee-data-55702.firebaseio.com/'

});

export default instance;