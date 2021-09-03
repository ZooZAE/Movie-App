import axios from "axios";
import { apikey } from "../config";
import { FILL_DATA } from "../constants";

//This method sends reducer the action to fill the state with the data received from the server.
const fillData = (movie) => {
    return {
        type: FILL_DATA,
        movie
    }
}

// This method uses axios to get a movie by the title passed from the input field title
export const getMovieTitle = (title) => (dispatch) => {
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${apikey}`, {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(json => dispatch(fillData(json)));
}

//This method uses axios to get a movie by the title an the year from the input and the dropdown
export const getMovieYear = (title, year) => (dispatch) => {
    axios.get(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=${apikey}`, {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(json => dispatch(fillData(json)));;
}