import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const email = "kazoku@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // CurrentPage
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/my-jobs/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        setIsLoading(false);
      });
  }, [search]);

  //PAGINATION
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFristItem = indexOfLastItem - itemsPerPage;
  console.log(indexOfFristItem, indexOfLastItem);
  const currentJobs = jobs.slice(indexOfFristItem, indexOfLastItem);

  //   NEXT BTN & PRECIOS BTN

  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    // FILTER JOBS BY TITLE
    const filterjobs = jobs.filter(
      (job) => job.jobTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    setJobs(filterjobs);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All My Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button
            className="bg-blue text-white font-semibold rounded-sm px-8 py-2 mb-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* TABLE */}
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All My Jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to={"/post-jobs"}
                    className="bg-blue/90 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Post A Job
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      NO
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      TITLE
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      COMPANY NAME
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      SALARY
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      EDIT
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      DELETE
                    </th>
                  </tr>
                </thead>

                {isLoading ? (
                  <div className="flex items-center justify-center h-20">
                    <p> Loading.....</p>
                  </div>
                ) : (
                  <tbody>
                    {currentJobs &&
                      currentJobs.map((job, index) => (
                        <tr key={job._id}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            {index + 1}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {job.jobTitle}
                          </td>
                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {job.companyName}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            ${job.minPrice} - ${job.maxPrice}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button className="hover:underline">
                              <Link to={`/edit-job/${job._id}`}>Edit</Link>
                            </button>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button
                              className="bg-red-700 py-2 px-6 text-white rounded-sm cursor-pointer"
                              onClick={() => handleDelete(job._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>

        {/* 
        PAGINATION */}

        <div className=" flex justify-center text-black space-x-8 mb-8">
          {currentPage > 1 && (
            <button className="hover:underline" onClick={prevPage}>
              Previous
            </button>
          )}

          {indexOfLastItem < jobs.length && (
            <button className="hover:underline" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
