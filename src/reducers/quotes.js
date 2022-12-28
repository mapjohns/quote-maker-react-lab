export default (state = [], action) => {
  // debugger
  switch(action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id !== action.quoteId);
    case "DOWNVOTE_QUOTE":
      return state.map((a) => 
      {if (a.id === action.quoteId && a.votes>0) 
        {a.votes = a.votes-1
        return a}
        else {
            return a
        }});
    case "UPVOTE_QUOTE":
      return state.map((a) => 
      {if (a.id === action.quoteId) 
        {a.votes = a.votes+1
        return a}
        else {
            return a
        }});
    default:
    return state;
}
}
