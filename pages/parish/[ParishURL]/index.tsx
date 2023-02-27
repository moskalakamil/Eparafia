import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import { GetStaticPaths, GetStaticProps } from "next";
import { API_URL } from "constants/ApiURL";
import { useSelector } from "react-redux";

const Parish = (props: any) => {
  return (
    <>
      <ParishHero callname={props.data.callName} />
      <MenuCards />
      <News />
    </>
  );
};

export default Parish;

export const loadParishes = async () => {
  // const jwt = useSelector((state: any) => {
  //   state.auth.token;
  // });
  // console.log(jwt);

  const res = await fetch(`${API_URL}/Parish`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjYyNzRmMTg5LWRkYmEtNDU1MS05NTY5LThmY2JkMmRmNjVkMSIsIk5hbWUiOiJUZXN0IiwiU3VybmFtZSI6IkphbmVrIiwiRW1haWwiOiJyemVqYW5AZ21haWwuY29tIiwicm9sZSI6IlByaWVzdCIsIm5iZiI6MTY3NzUzOTY1MiwiZXhwIjoxNjc3NTQxNDUyLCJpYXQiOjE2Nzc1Mzk2NTIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0In0.mBYgvGsk1_V_QGXvUFN08vRcn4lGOoR-vjDrJE_kRVGa_behXm2kpUxSNRexBt2sXpsddkqfJGZFibTpqbz8hQ`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
  // return ["a", "b", "c", "d"];
};

export const getStaticProps: GetStaticProps = async (contex) => {
  const parishes = await loadParishes();

  return {
    props: parishes,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch("");
  // const parishes = await res.json();

  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }));
  const paths = [
    { params: { ParishURL: "a" } },
    { params: { ParishURL: "b" } },
    { params: { ParishURL: "c" } },
  ];

  return { paths, fallback: false };
};
