const reservationInitialState=[]
const reservationReducer =(state=reservationInitialState,action)=>{
    switch(action.type){
        case 'SET_RESERVATIONS':{
            return [...action.payload]
        }
        case "ADD_RESERVATIONS": {
            return [...state, action.payload]
        }
        case 'EDIT_RESERVATION': {
            return state.map(reservation => {
                if(reservation._id === action.payload._id){
                    return Object.assign({}, reservation, action.payload)
                }
                else{
                    return Object.assign({}, reservation)
                }
            })
        }
        case 'REMOVE_RESERVATION': {
            return state.filter(reservation => {
                return reservation._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default reservationReducer