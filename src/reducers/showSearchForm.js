export default function showSearhForm(state = false, action) {
  if (action.type === "SHOW_SEARHSHOW") {
    return action.payload;
  }
  return state;
}
