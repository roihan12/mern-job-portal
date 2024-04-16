import Jobs from "../models/Jobs.js";
import express from "express";

export const postJob = async (req, res) => {
  try {
    const job = new Jobs(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const updateJob = async (req, res) => {
  try {
    let updatedJob = await Jobs.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.status(201).json(updatedJob);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const getJobs = async (req, res) => {
  try {
    const allJobs = await Jobs.find({});
    console.log(allJobs);
    res.json(allJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
export const getJobById = async (req, res) => {
  try {
    const jobs = await Jobs.findById(req.params.id);
    console.log(jobs);
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const myJobs = async (req, res) => {
  try {
    console.log(req.params.email);

    const myJobs = await Jobs.find({ postedBy: req.params.email });
    console.log(myJobs);
    res.status(200).json(myJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
export const deleteJobs = async (req, res) => {
  try {
    console.log(req.params.id);

    await Jobs.deleteOne({
      _id: req.params.id,
    });

    res.status(200).json({ message: "Success Delete Jobs" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
