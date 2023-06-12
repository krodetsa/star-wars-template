import { useEffect } from "react";
import { NextPageWithLayout } from "../page";
import { usePersonStore } from "@/hooks/store";
import DetailsContainer from "@/components/DetailsContainer/DetailsContainer";
import Layout from "@/components/common/Layout/Layout";
import { fetchDetails } from "@/helpers/api";
import { Person } from "@/types/person";

interface DetailsProps {
  data: Person;
}

const Details: NextPageWithLayout<DetailsProps> = ({ data }) => {
  const { personStore, setPersonStore } = usePersonStore();

  useEffect(() => {
    setPersonStore(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {personStore.name !== undefined ? (
        <DetailsContainer />
      ) : (
        <p>User is not found</p>
      )}
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  try {
    const { data } = await fetchDetails(Number(id));
    return { props: { data } };
  } catch (error) {
    return { props: { data: { name: undefined } } };
  }
};

Details.getLayout = (page) => <Layout>{page}</Layout>;

export default Details;
