export default function addValidation(state = [], action){
   if(action.type === 'ADD_VALIDATION'){
      return action.payload;
   }
   return state;
}
