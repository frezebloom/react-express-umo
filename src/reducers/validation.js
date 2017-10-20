export default function updateDocument(state = {open: false}, action){
   if(action.type === 'VALIDATION'){
      return action.payload;
   }
   return state;
}
