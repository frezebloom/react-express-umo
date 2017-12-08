export default function showBack(state = false, action) {
  if (action.type === "SHOW_BACK") {
    return action.payload;
  }
  return state;
}
