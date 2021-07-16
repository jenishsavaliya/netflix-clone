import axios from "axios";


//All api start url is same so that's why i set baseUrl so now we do not require to type every time 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;