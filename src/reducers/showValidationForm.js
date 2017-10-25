export default function addValidation(state = false, action){
   if(action.type === 'SHOW_VALIDATION'){
      return action.payload;
   }
   return state;
}
