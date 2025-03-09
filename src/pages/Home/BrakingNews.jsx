import Marquee from "react-fast-marquee";

const BrakingNews = () => {
  return (
    <div className="flex mt-6">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true}speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BrakingNews;
