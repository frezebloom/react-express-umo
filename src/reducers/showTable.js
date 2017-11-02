export default function showTable(state = true, action) {
  if (action.type === "SHOW_TABLE") {
    return action.payload;
  }
  return state;
}
