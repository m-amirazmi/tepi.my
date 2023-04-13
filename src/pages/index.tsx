import { type NextPage } from "next";
import Announcement from "~/components/homepage/announcement";
import LatestStalls from "~/components/homepage/latest-stalls";

const Home: NextPage = () => {
  return (
    <>
      <Announcement />
      <LatestStalls />
    </>
  );
};

export default Home;
