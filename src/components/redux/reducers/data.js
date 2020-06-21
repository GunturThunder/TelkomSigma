const initialState = {
    data: [],
    isLoading: true
}

const data = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DATA_PENDING':
           return{
               ...state
           }
        case 'GET_DATA_REJECTED':
            return{
                ...state
            }
        case 'GET_DATA_FULFILLED':
            // console.log(action.payload)
           return{
               ...state,
               data: action.payload,
               isLoading:false
           }
        default:
            return state;
    }
}

export default data