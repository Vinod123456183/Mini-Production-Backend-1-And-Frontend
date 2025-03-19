const indexController = (req, res) => {
  console.log("Index Controller");
  res.render("index");
};

module.exports = { indexController };