import React, { useEffect, useState } from "react";
import PageHeader from "../Components/PageHeader";

const Salary = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);
 
  useEffect(() => {
    fetch(`salary.json`)
      .then((res) => res.json())
      .then((data) => {
        setSalary(data);
        console.log(data);
   
      });
  }, [searchText]);

  const handleSearch = () => {
    // FILTER JOBS BY TITLE
    const filterSalary = salary.filter(
      (salary) =>
        salary.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setSalary(filterSalary);
    console.log(filterSalary);
  
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={" Estimate Salary"} path={"Salary"} />

      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* SALARY CARD */}

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
          {salary &&
            salary.map((salary) => (
              <div key={salary.id} className="shadow px-4 py-8">
                <h4 className="font-semibold text-xl">{salary.title}</h4>
                <p className="my-2 font-medium text-blue text-lg">
                  {salary.salary}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/" className="underline">
                    {salary.status}
                  </a>
                  <a href="/" className="underline">
                    {salary.skills}
                  </a>
                </div>
              </div>
            ))}
        </div>
    
    </div>
  );
};

export default Salary;
