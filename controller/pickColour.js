// PICK A COLOUR
const pickColour = (req, res) => {
  // [eslint] object destructuring (const choice = req.params.choice)
  const { choice } = req.params;
  res.send(`Your colour is: ${choice}`);
};

// VARIABLE EXPORTED
module.exports = pickColour;
