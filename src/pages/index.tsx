import { type NextPage } from "next";
import Announcement from "~/components/homepage/announcement";
import LatestStalls from "~/components/homepage/latest-stalls";
import StallCategories from "~/components/homepage/stall-categories";

const Home: NextPage = () => {
  return (
    <>
      <Announcement />
      <StallCategories />
      <LatestStalls />
    </>
  );
};

export default Home;
