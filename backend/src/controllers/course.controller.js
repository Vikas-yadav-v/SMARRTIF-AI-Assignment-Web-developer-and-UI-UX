const Course = require("../db/models/Course");
const User = require("../db/models/User");

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
};

exports.updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
};

exports.deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

exports.enroll = async (req, res) => {
 
  const user = await User.findById(req.user.id);
  console.log(req.user.id, '++++++', req.params.id, user)
  user.enrolledCourses.push(req.params.id);
  await user.save();

  res.json({ msg: "Enrolled" });
};

exports.dashboard = async (req, res) => {
  const user = await User.findById(req.user.id).populate("enrolledCourses");
  res.json(user.enrolledCourses);
};
