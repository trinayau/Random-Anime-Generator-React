import axios from 'axios';

export const toggleLike = (id) => {
    return {type: 'TOGGLE_DOG_LIKE',
            payload: id}
}

export const deleteDog = (id) => {
    return {type: 'DELETE_DOG',
            payload: id}
}

export const fetchDogs = () => {
    //We don't know how long it will take, so needs to return async (thing that can be waited for)
    //Once finished, will dispatch one action or another.
    return async (dispatch) => {
        try {
            const {data} = await axios.get("https://api.jikan.moe/v4/random/anime");
            console.log(data.data)
            console.log(data.data.title)
            const randomAnime = {}
            dispatch({
                type: 'RANDOM_ANIME',
                payload: randomAnime})
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })

        }
    }
}
