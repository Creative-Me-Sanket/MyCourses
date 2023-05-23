var express = require("express");
var router = express.Router();
const { create,video, mediaByID,read,generateCertificate } = require("../Controller/VideoTest");


router.post("/VideoCreateTest",create);

router.post("/GenerateCertificate",generateCertificate);

router.get("/VideoStreamTest/:mediaId",video)

router.get('/VideoStreamTest/media/:mediaId',read)
router.param('mediaId', mediaByID)

module.exports = router;
