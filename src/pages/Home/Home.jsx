import Header from "../Shered/Header/Header";
import Navbar from "../Shered/Navbar/Navbar";
import LeftSideNav from "../Shered/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shered/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* Up Comming news */}
        <div className="md:col-span-2 border-2 rounded-lg p-4 ">
          {Array.isArray(news) &&
            news?.map((aNews) => (
              <NewsCard key={aNews.id} news={aNews}></NewsCard>
            ))}
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
