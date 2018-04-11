// WHICH BURGER
const burgers = [
  'Hamburger', 'Cheese Burger', 'Dble Cheese Burger',
];

const whichBurger = (req, res) => {
  const { index } = req.params;
  const selection = burgers[index] || 'Sorry, thats not a burger option';
  res.json(selection);
};

// VARIABLE EXPORTED
module.exports = whichBurger;
