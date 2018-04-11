// NUMBER GUESSING GAME
const correctNumber = 7;

// extracted callback function from app.get (app.js) with new variable assigned
const guessNumber = (req, res) => {
  // [eslint] object destructuring (const num = req.params.num)
  const { num } = req.params;
  if (num < correctNumber) {
    res.send('Too Low');
  } else if (num > correctNumber) {
    res.send('Too High!');
  } else {
    res.send('Nailed it!');
  }
};

// VARIABLES EXPORTED
module.exports = guessNumber;
