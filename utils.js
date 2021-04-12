const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const generateId = arr => {
  const id= 0;
  Array.map( (item, id) => item.id = id + 1);
  return Array;
}

module.exports = {
  getRandomElement, 
  generateId
};
