export const ADD = data =>{
    return {
        type : 'ADD',
        payload:data
    }
}
export const UPDATE = data =>{
    return {
        type : 'UPDATE',
        payload:data
        
    }
}
export const DELETE = id =>{
    return {
        type : 'DELETE',
        payload: id
    }
}