export function sign_up(state = {}, action) {
  switch (action.type) {
    case "SIGN_UP_REQUEST":
      return { signing_up: true };
    case "SIGN_UP_SUCCESS":
      return {};
    case "SIGN_UP_FAILURE":
      return {};
    default:
      return state
  }
}
