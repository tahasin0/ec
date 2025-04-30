const registerUser = (req, res) => {
  // TODO: Add logic to register user
  res.json({ message: 'User registered' });
};

const loginUser = (req, res) => {
  // TODO: Add logic to authenticate user
  res.json({ message: 'User logged in' });
};

module.exports = { registerUser, loginUser };
