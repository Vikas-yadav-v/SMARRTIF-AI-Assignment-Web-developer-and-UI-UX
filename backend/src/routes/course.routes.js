const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const ctrl = require("../controllers/course.controller");

router.get("/", ctrl.getCourses);
router.post("/", auth, ctrl.createCourse);
router.put("/:id", auth, ctrl.updateCourse);
router.delete("/:id", auth, ctrl.deleteCourse);

router.post("/enroll/:id", auth, ctrl.enroll);
router.get("/dashboard", auth, ctrl.dashboard);

module.exports = router;

