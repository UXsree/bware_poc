import appState from './data'
const loginReducer = (state=appState, action) => {
    switch(action.type){
        case "ADD":
            return {...state, logindetails:action.payload}
        default:
            return state;
        
    }
}

export default loginReducer