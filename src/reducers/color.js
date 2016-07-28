function color(state = [], action) {

  switch (action.type) {
    case 'SET_COLOR' :
      console.log('reducer', action.color);
      return {
        mainColor: action.color
      };
    default:
      return state;
  }
}

export default color;