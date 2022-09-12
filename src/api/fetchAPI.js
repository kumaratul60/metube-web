import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const RAPID_API_KEY = 'e1e5304a0cmsh048f29dbdad6d5cp1123d3jsn6fdef1cc9860'

const options = {
    // method: 'GET',
    url: BASE_URL,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {

        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options).catch((err) => console.error(`error:${err}  and message: ${err.message}`))
    // console.log("data", data);
    return data
}