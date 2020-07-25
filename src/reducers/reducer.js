
const initialState = {
  
    users:[
        {firstName:'xxx', lastName:'yyy', email:'sample@gmail.com', phoneNo:99753, giturl:'url', country:'abc'}
      ]
}

const reducer = (state=initialState, action) => {
    const users=[...state.users];
    switch(action.type){
        case 'ADD':
          users.push(action.payload)
          return {}
       case 'UPDATE': 
          return{
            ...state,
            users:state.users.concat(action.payload)
          }
        case 'DELETE':
           return{
             ...state,
             users:state.users.filter(item =>item.id !==action.payload)
           }
        default :
           return state;
        }
    
};

export default reducer;