const initState = {
    anime: {id: 1, img: '', liked: false},
    loading: true,
    previousAnime: false, //storing id and making new call. rewrite with new integer. if previousAnime display back, otherwise don't display.
    error: false
};
//We only interact with the reducer through actions -> alter data thru actions.
const reducer = (state=initState, action) => {
    switch (action.type){
        case 'TOGGLE_DOG_LIKE':
            //Find the dog with an id matching the payload
            const dogToLike = state.dogs.find(d => d.id === action.payload) //find in dogs array where id matches id in payload

            //Find the index location of that dog in the whole list
            const likeIdx = state.dogs.indexOf(dogToLike)
            //find index of that dog- where is its location
            
            //Make a new list based on the dog list
            //New list consists of 
            const updatedDoggosLike = [ 
                ...state.dogs.slice(0, likeIdx), //All dogs in the list up until the liked one
                //get all dogs from 1st one up until the one before the one u like and put in a list
                //after that, put in a list the actual dog u want to like,
                //want to get the dogtolike, change the liked, replace w list of dogs
                //give back list with 1 element changed

                { ...dogToLike, liked: !dogToLike.liked }, //An altered version of the relevant one. (not freddie's liked status.liked. normal for a toggle, flip on or off.)
                ...state.dogs.slice(likeIdx+1) //All dogs in list AFTER the relevant one
            ]
            
            return { ...state, dogs: updatedDoggosLike };
        case 'DELETE_DOG':
            const updatedDogs = state.dogs.filter(d => d.id !== action.payload) //Updated dogs is a copy of dogs keeping dogs where id of dog is different to the one in the payload.
            //Make new copy of list of dogs.
            return {...state, dogs: updatedDogs};
        case 'RANDOM_ANIME':
            return {...state, anime: action.payload, error: false, loading: false}
        case 'SET_ERROR':
            return {...state, error: action.payload}
        default: 
            return state;
    }
}

export default reducer;
