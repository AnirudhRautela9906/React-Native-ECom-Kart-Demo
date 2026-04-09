import axios from 'axios'
export const fetchApiData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    return res.data
}