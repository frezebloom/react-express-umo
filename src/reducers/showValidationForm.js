export default function updateDocument(state = false, action){
   if(action.type === 'SHOW_VALIDATION'){
      return action.payload;
   }
   return state;
}
