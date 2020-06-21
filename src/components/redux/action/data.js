import axios from 'axios'

export const getData = (limit) => {
    if(limit === undefined){
        return {
            type: 'GET_DATA',
            payload: axios({
                method: "GET",
                url: 'https://jsonplaceholder.typicode.com/posts?_limit=10',
            })
        }   
    }
    else{
        return {
            type: 'GET_DATA',
            payload: axios({
                method: "GET",
                url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
            })
        }   
    }
}

export const postDetail = (id) => {
    return {
        type: 'GET_DETAIL',
        payload: axios({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
        })
    }
}