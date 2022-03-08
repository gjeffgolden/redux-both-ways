import { createStore } from 'redux';

const initialState = {
    todos: [
        {
            task: "Buy Groceries",
            completed: false
        },
        {
            task: "Wash the Dog",
            completed: false
        },
        {
            task: "Get a Haircut",
            completed: false
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TODO": return state;
        default: return state;
    }
};

const store = createStore(reducer);

export default store;