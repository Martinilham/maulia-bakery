import Card from "../../../components/Card1";
import { useState, useEffect } from "react";
import axios from "axios";

const JenisKue = () => {
  const [data, setData] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [itemperPage] = useState(4);

  const indexItemAkhir = currentpage * itemperPage;
  const indexItemAwal = indexItemAkhir - itemperPage;
  const currentItems = data.slice(indexItemAwal, indexItemAkhir);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const api_link = process.env.REACT_APP_API_SECRET;
  const getUserData = async () => {
    try {
      const res = await axios.get(`/api/proxy/getdata`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 401 || !res.data) {
        console.log("error");
      } else {
        setData(res.data.getBarang);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <section className="self-stretch text-center flex flex-row items-start justify-center pt-0  pr-[78px] pl-20 box-border max-w-full mt-10 text-21xl text-black font-body-large mq750:pl-10 mq750:pr-[39px] mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start  max-w-full mq750:gap-[43px] mq450:gap-[21px]">
          <div className="w-full flex m-auto flex-col items-end justify-start gap-[60px] max-w-full mq1050:gap-[30px]">
            <div className="self-stretch flex m-auto flex-row items-start justify-start max-w-full">
              <div className="w-full m-auto flex flex-col items-start justify-start gap-[10px] max-w-full">
                <h1 className="m-0 lg:text-center lg:m-auto text-center relative text-inherit  capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
                  Jenis - Jenis Kue
                </h1>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                  <div className="h-[3px] w-[155px] relative box-border border-t-[3px] border-solid border-main-color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-5xl">
        <div className="w-full overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-center  min-h-[1028px] max-w-full">
          <section className="flex flex-row items-start justify-center py-0 px-0.5 box-border max-w-full text-left text-5xl text-black font-body-large">
            <div className="w-screen overflow-x-auto  flex lg:flex-row flex-row  items-start justify-center gap-[20px] max-w-full flex-wrap">
              {currentItems.map((e, index) => (
                <Card
                  key={index}
                  selectFood={e.imgpath}
                  title={e.fname}
                  description={e.deskripsi}
                />
              ))}
            </div>
          </section>
          <div>
            <div class="w-full lg:m-auto  lg:mt-5 m-auto ">
              <nav aria-label="Page navigation m-auto w-full">
                <ul class="inline-flex list-none m-auto bg-transparent mr-10">
                  <li>
                    <button class="bg-transparent pointer-events-none px-4 py-2 disabled text-black transition-colors duration-150 focus:bg-main-color border border-r-0 border-main-color rounded-l-lg focus:shadow-outline">
                      Prev
                    </button>
                  </li>
                  <li>
                    {Array.from(
                      { length: Math.ceil(data.length / itemperPage) },
                      (_, index) => (
                        <button
                          onClick={() => paginate(index + 1)}
                          className="bg-transparent px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-r-0 border-main-color focus:shadow-outline"
                        >
                          {index + 1}
                        </button>
                      )
                    )}
                  </li>
                  <li>
                    <button class="bg-transparent pointer-events-none px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-main-color rounded-r-lg focus:shadow-outline">
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JenisKue;
