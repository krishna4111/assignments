const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = new Admin({
    username,
    password,
  });
  admin
    .save()
    .then(() => {
      res.status(200).json({
        msg: "admin created successfully!!",
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;

  const course = new Course({
    title,
    description,
    price,
    imageLink,
  });
  course
    .save()
    .then((result) => {
      res.status(200).json({
        msg: "course created successfully",
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.status(200).json({
    courses: courses,
  });
});

module.exports = router;
