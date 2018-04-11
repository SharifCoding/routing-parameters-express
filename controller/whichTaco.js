// WHICH TACO
const tacos = [
  'Soft Taco', 'Crunchy Taco', 'Super Taco',
];

const whichTaco = (req, res) => {
  // [eslint] object destructuring (const index = req.params.index)
  const { index } = req.params;
  const selection = tacos[index] || 'Sorry, thats not a taco option';
  res.json(selection);
};

// VARIABLE EXPORTED
module.exports = whichTaco;
