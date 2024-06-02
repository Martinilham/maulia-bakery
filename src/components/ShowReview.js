import axios from "axios";
import FrameComponent2 from "./FrameComponent2";
import { useState, useEffect } from "react";

const ShowReview = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexItemAkhir = currentPage * itemsPerPage;
  const indexItemAwal = indexItemAkhir - itemsPerPage;
  const currentItems = data.slice(indexItemAwal, indexItemAkhir);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const api_link = process.env.REACT_APP_API_SECRET;
  const getReview = async () => {
    try {
      const response = await axios.get(`/api/proxy/review`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <>

    <div className="w-full justify-center items-center  flex-col flex">
      <div className="w-full flex-row justify-center gap-5 items-center mx-auto flex">
      {currentItems.map((e, index) => (
              <div
                key={index}
                className="w-96 rounded-lg box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[18px] min-w-[565px] max-w-full border-[1px] border-solid border-gray lg:flex-1 mq750:min-w-full"
              >
                <FrameComponent2 andiaJorida={e.nama} myExperienceAtYourRestaur={e.review} />
              </div>
            ))}
      </div>
        <div className="w-full flex lg:m-auto justify-center items-center lg:mt-5 m-auto">
            <nav aria-label="Page navigation justify-center items-center text-center m-auto w-full">
              <ul className="inline-flex list-none  mx-auto bg-transparent mr-10">
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`bg-transparent px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-r-0 border-main-color rounded-l-lg focus:shadow-outline ${
                      currentPage === 1 ? "pointer-events-none disabled" : ""
                    }`}
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`bg-transparent px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-r-0 border-main-color focus:shadow-outline ${
                        currentPage === index + 1 ? "bg-main-color" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className={`bg-transparent px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-main-color rounded-r-lg focus:shadow-outline ${
                      currentPage === Math.ceil(data.length / itemsPerPage) ? "pointer-events-none disabled" : ""
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
    </div>


    </>
  );
};

export default ShowReview;
