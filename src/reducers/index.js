export default (state = { chatHistory: [] }, action) => {
  switch (action.type) {
    case "AI":
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload]
      };

    case "HUMAN":
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload]
      };

    default:
      return state;
  }
};
