const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;

    const user = await User.create({ username, password });
    res.status(200).json({
      msg: "data stored successfully",
    });
  } catch (err) {
    res.status(400).json({
      err: "something went wrong",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.status(200).json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const password = req.headers.password;
  const courseId = req.params.courseId;

  const user = await User.findOne({ username, password });

  if (user) {
    user.purchasedCourses.push(courseId);
    user.save();
    return res.status(200).json({ msg: "course purchased successfully!!!" });
  } else {
    res.status(400).json({ err: "something went wrong" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
