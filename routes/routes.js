const express=require("express");
const router= express.Router();
const Controllers=require("../controllers/controllers");


router.get("/",Controllers.getCourse);
router.get("/:id",Controllers.getAsingleCourse);
router.post("/",Controllers.creatingCourse);
router.delete("/",Controllers.deleteCourse);
router.put("/",Controllers.updateCourse);



module.exports = router;