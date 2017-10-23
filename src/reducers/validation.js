export default function updateDocument(state = [], action){
   if(action.type === 'VALIDATION'){
      return action.payload;
   }
   return state;
}
