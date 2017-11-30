export default function showSearhForm(state = false, action) {
  if (action.type === "SHOW_SEARHFORM") {
    return action.payload;
  }
  return state;
}
