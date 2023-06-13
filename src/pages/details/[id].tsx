import { NextPageWithLayout } from "../page";
import DetailsContainer from "@/components/DetailsContainer/DetailsContainer";
import Layout from "@/components/common/Layout/Layout";
import { useIsLoading } from "@/hooks/store";
import { useFetchDetails } from "@/hooks/useFetchDetails";
import { Spin } from "antd";

type DetailsProps = {
  id: number;
};

const Details: NextPageWithLayout<DetailsProps> = ({ id }) => {
  const { isLoading } = useIsLoading();
  useFetchDetails(id);

  return <>{isLoading ? <Spin /> : <DetailsContainer />}</>;
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  // I wanted to get the data here and pass it as props to the DetailsContainer component
  // but the query takes too long to load and the page is blocked
  // so I had to use the useFetchDetails hook
  return { props: { id: Number(id) } };
};

Details.getLayout = (page) => <Layout>{page}</Layout>;

export default Details;
