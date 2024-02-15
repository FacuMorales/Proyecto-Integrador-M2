import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload], allCharacters: [...state.allCharacters, action.payload]};

        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((pj) => pj.id !== action.payload), allCharacters: state.allCharacters.filter((pj) => pj.id !== action.payload)};

        case FILTER:
            const filtrado = state.allCharacters.filter((pj) => pj.gender === action.payload);
            return{...state, myFavorites: filtrado};
            
        case ORDER:
            const copia = [...state.allCharacters];
            if(action.payload === "A"){
                copia.sort((a, b) => a.id - b.id);
            }else{
                copia.sort((a, b) => b.id - a.id);
            }
            return{...state, myFavorites: copia};

        default: return {...state};
    };
};

export default rootReducer;