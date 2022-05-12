import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '70e0b9899cmsh6b80b715dd162cfp11566fjsn5e78c8e62967'
        }
    })

    return data;
}


