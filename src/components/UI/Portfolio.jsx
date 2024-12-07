import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Model from "./Model";

function Portfolio() {
  const [nextItems, SetItems] = useState(3);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModel, setShowModel] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHander = () => {
    SetItems((prev) => prev + 3);
  };

  const showModelHandler = (id) => {
    setShowModel(true);
    setActiveId(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "Web-Design") {
      const filteredData = data.filter((item) => item.category === "Web-Design");
      setPortfolios(filteredData);
    }

    if (selectTab === "UI/UX-Design") {
      const filteredData = data.filter(
        (item) => item.category === "UI/UX-Design"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingcolor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("Web-Design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("UI/UX-Design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              UI/UX Design
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {portfolios?.slice(0, nextItems)?.map((Portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              key={index}
              className="group relative z-[1] bg-white rounded-[8px] overflow-hidden"
            >
              <figure className="w-full h-[200px] sm:h-[250px]">
                <img
                  className="rounded-[8px] w-full h-full object-cover"
                  src={Portfolio.imgUrl}
                  alt={`Portfolio ${index + 1}`}
                />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-50 absolute top-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModelHandler(Portfolio.id)}
                    className="text-white bg-headingcolor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 3 && (
            <button
              onClick={loadMoreHander}
              className="text-white bg-headingcolor hover:bg-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModel && <Model setShowModel={setShowModel} activeId={activeId} />}
    </section>
  );
}

export default Portfolio;
