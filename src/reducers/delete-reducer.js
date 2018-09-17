import appState from './data'
const deleteReducer = (state=appState, action) => {
    switch(action.type){
        case "DELETE":
            return {...state, logindetails:action.payload}
        default:
            return state;
        
    }
}

export default deleteReducer