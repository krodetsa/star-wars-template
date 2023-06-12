import { NextPageWithLayout } from "./page";
import Layout from "@/components/common/Layout/Layout";
import HomepageGrid from "@/components/HomepageGrid/HomepageGrid";
import PaginationBlock from "@/components/common/PaginationBlock/PaginationBlock";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HomepageGrid />
      <PaginationBlock />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
