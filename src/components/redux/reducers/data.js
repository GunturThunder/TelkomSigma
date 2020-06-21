const initialState = {
    data: [],
    isLoading: true,
    postDetail:[],
    isLoadingDetail: true,
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_PENDING':
            return {
                ...state
            }
        case 'GET_DATA_REJECTED':
            return {
                ...state
            }
        case 'GET_DATA_FULFILLED':
            // console.log(action.payload)
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case 'GET_DETAIL_PENDING':
            return {
                ...state
            }
        case 'GET_DETAIL_REJECTED':
            return {
                ...state
            }
        case 'GET_DETAIL_FULFILLED':
            return {
                ...state,
                postDetail: action.payload,
                isLoadingDetail: false
            }
        default:
            return state;
    }
}

export default data