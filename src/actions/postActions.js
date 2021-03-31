import { FETCH_POSTS, NEW_POSTS} from './types';


export const fetchPosts =  () => dispatch=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then(res=> dispatch({
                type: FETCH_POSTS,
                payload: res
            }) )
            .catch(err=>console.log(err));
    
}