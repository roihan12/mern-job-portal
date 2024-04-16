import express from "express";
import {
  postJob,
  getJobs,
  myJobs,
  deleteJobs,
  getJobById,
  updateJob,
} from "../controllers/jobs.js";

const router = express.Router();

router.post("/post-job", postJob);
router.get("/get-jobs", getJobs);
router.get("/my-jobs/:email", myJobs);
router.delete("/job/:id", deleteJobs);
router.get("/job/:id", getJobById);
router.patch("/job/:id", updateJob);

export default router;
