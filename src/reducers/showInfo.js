export default function showInfo(state = false, action) {
  if (action.type === "SHOW_INFO") {
    return action.payload;
  }
  return state;
}
