import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  console.log("jobs", jobs);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/get-jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
        // console.log(data);
        setIsLoading(false);
      });
  }, []);

  // HANDLE INPUT CHANGE
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // FILTER JOBS BY TITLE
  const filterItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // RADIO FILERING
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // BUTTON BASED FILTERING
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // CALCULATE THE INDEX RANGE
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // funtion for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filterItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //FUNCTION FOR PREVIOUS PAGE
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // MAIN FUNCTION
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    console.log(selected);
    // FILTERING INPUT ITEMS
    if (query) {
      filteredJobs = filterItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          postingDate >= selected ||
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );

      console.log(selected);
      console.log(filteredJobs);
    }

    // SLICE THE DATA BASED ON CURENNT PAGE
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* MAIN CONTENT */}

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* LEFT SIDE */}
        <div className="bg-white p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* JOBS CARD */}
        <div className="col-span-2 bg-white">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              {" "}
              <h3 className="font-bold text-lg mb-2">
                {result.length} Jobs
              </h3>{" "}
              <p>No data found</p>{" "}
            </>
          )}

          {/* PAGINATION  */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx2">
                Page {currentPage} of{" "}
                {Math.ceil(filterItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(result.length < itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
