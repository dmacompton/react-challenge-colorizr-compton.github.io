export function setColor(color) {
  console.log('SET_COLOR', color);
  return {
    type: 'SET_COLOR',
    color
  }
}