var express = require("express");
const { isSignedIn, isAuthenticated, isRegulator } = require("../Controller/Auth");
const {
  read,
  getCollegeById,
  deleteCollege,
  createCollege,
  updateCollege,
  getAllColleges,
  CollegeCount,
  addAdminTOCollege,
  removeAdminFromCollege,
} = require("../Controller/College");
const { getUserById } = require("../Controller/User");
var router = express.Router();

router.param("collegeId", getCollegeById);
router.param("userId", getUserById);

router.post("/college",createCollege);
router.get("/collegesCount",CollegeCount);
router.get("/college/getall", getAllColleges);
router.get("/college/:collegeId", read);
router.delete("/college/:collegeId", deleteCollege);
router.delete("/college/removeadmin/:collegeId", removeAdminFromCollege);
router.put("/college/:collegeId", updateCollege);
router.put("/college/addadmin/:collegeId", addAdminTOCollege);
module.exports = router;
