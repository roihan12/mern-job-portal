import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    require: true,
  },
  jobTitle: {
    type: String,
    require: true,
  },
  companyLogo: {
    type: String,
    require: true,
  },
  minPrice: Number,
  maxPrice: Number,
  salaryType: {
    type: String,
    require: true,
  },
  jobLocation: {
    type: String,
    require: true,
  },
  postingDate: {
    type: String,
    require: true,
  },
  experienceLevel: {
    type: String,
    require: true,
  },
  employmentType: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  postedBy: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
    default: [],
  },
});

const Jobs = new mongoose.model("Jobs", jobsSchema);
export default Jobs;
