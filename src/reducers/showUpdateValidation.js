export default function showUpdateValidation(state = false, action) {
  if (action.type === "SHOW_UPDATEVALIDATION") {
    return action.payload;
  }
  return state;
}
