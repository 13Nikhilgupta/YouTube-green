import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com/";

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export async function API_Call(url) {
    try {
        const { data } = await axios.get(baseUrl + url, options);
        return (data);
    } catch (error) {
        alert("Error while calling API: " + error.message);
        console.error(error);
    }
}