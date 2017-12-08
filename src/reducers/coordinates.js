export default function coordinates(state = [], action) {
  if (action.type === "COORDINATES_MOUSE") {
    return [...state, action.payload];
  }
  return state;
}
