module.exports = app => {
  app.post("/chat", (req, res) => {
    res.render("chat");
  });

  app.get("/chat", (req, res) => {
    res.render("chat");
  });
};
