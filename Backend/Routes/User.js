var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { isSignedIn, isAuthenticated } = require("../Controller/Auth");
const {
  update,
  userEnrollmentList,
  pushCourseInEnrollmentList,
  getUserById,
  read,
  AdminCount,
  TeacherCount,
  StudentCount,
  MonthlyUserCount,
  deleteUserById,
  forgotPassword,
  getTeachersByHod,
  getStudentByTeacher,
} = require("../Controller/User");

router.param("userId", getUserById);



router.get("/user/:userId",  read);
router.get("/adminsCount",AdminCount);
router.get("/teachersCount",TeacherCount);
router.get("/studentsCount",StudentCount);
router.get("/monthlyUsersCount",MonthlyUserCount);
router.get("/user/getbyhod/:userId",  getTeachersByHod);
router.get("/user/getbyteacher/:userId",  getStudentByTeacher);
router.delete("/user/:userId", deleteUserById);
router.post("/user/:userId/forgotPassword", forgotPassword);
router.put("/user/:userId", update);
router.get("/user/userList", userEnrollmentList);

//it will come from course control
router.post("/user/:userId/:courseId", pushCourseInEnrollmentList);
module.exports = router;
