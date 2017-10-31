export default function showAddValidation(state = false, action) {
  if (action.type === "SHOW_ADDVALIDATION") {
    return action.payload;
  }
  return state;
}
