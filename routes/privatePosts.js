const router = require("express").Router();

const verify = require("./privateRoutes");

router.get("/", verify, (req, res) => {
  res.json({
    posts: { title: "first post", description: "random data for private route" }
  });
});
module.exports = router;
