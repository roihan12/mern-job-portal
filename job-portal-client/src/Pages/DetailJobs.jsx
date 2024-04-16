import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PageHeader from "../Components/PageHeader";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const DetailJobs = () => {
  const { id } = useParams();
  const [job, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Detail Jobs"} path={job.jobTitle} />

      <img
        className="h-36 rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
        src={job.companyLogo}
        alt=""
      />
      <h1>{job.jobTitle}</h1>
      <h1>{job.companyName}</h1>
      

      <div className="flex space-x-4 mt-4">
        <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
          Apply Now
        </button>

        <button className="flex items-center space-x-3 px-8 py-2 bg-white border-2 border-blue  hover:bg-blue hover:text-white ">
          <FiBookmark size={20} /> Bookmark
        </button>
        <button className="px-8 py-2 bg-white border-2 border-blue   hover:bg-blue ">
          <FiShare2 /> Share
        </button>
      </div>
    </div>
  );
};

export default DetailJobs;
