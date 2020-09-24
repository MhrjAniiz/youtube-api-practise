import axios from 'axios';

const KEY = "AIzaSyDlSyzKtCKD8Ghvzj0cVzpEKau6Xk2cSMk"

export default axios.create({
    baseURL : ' https://www.googleapis.com/youtube/v3/search',
    params:{
        part:"snippet",
        maxResults: 5,
        key: KEY
    }
})


