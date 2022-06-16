import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';




export const fetchStart = () => {
    return({
        type: FETCH_START
    });
}

export const fetchSuccess = (response) => {
    return ({
        type: FETCH_SUCCESS, payload: response
    });
}

export const getSuccess = (searchTerm) => {
    return( dispatch => {
        dispatch(fetchStart());
    axios.get(`https://api.agify.io/?name=${searchTerm}`)
      .then(res => {
        console.log(res)
        dispatch(fetchSuccess(res.data))
      })
      .catch(err => {
        console.log(err)
      })
    })
}