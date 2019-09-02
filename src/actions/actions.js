export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';

export const addCount=()=>{
    return{
        type:INCREMENT
    }
}

export const decCount=()=>{
    return{
        type:DECREMENT
    }
}

