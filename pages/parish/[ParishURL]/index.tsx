import News from "components/parish/news";
import ParishHero from "components/parish/parishHero";
import MenuCards from "components/parish/parishMenu";
import { GetStaticPaths, GetStaticProps } from "next";
import { useSelector } from "react-redux";

const Parish = (props: any) => {
  return (
    <>
      <ParishHero callname="asd" />
      <MenuCards />
      <News />
    </>
  );
};

export default Parish;

export const loadParishes = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Parish`, {
  //   headers: {
  //     "Content-Type": "application/json",

  //   },
  // });
  // const data = await res.json();
  // console.log(data);
  // return data;
  return {
    statusCode: 200,
    data: {
      id: "4136506c-81d9-4945-a947-dba7b9fc4a60",
      callName: "Św Apostołów Szymona i Judy Tadeusza",
      contact: { phoneNumber: "123123123", email: "rzejan@gmail.com" },
      address: {
        region: "Krakowska",
        city: "Skawina",
        street: "Kopścielna",
        buildingNumber: "1",
        postCode: "32-050",
      },
      priests: [
        {
          id: "6274f189-ddba-4551-9569-8fcbd2df65d1",
          name: "Test Janek",
          photo: {
            path: "",
            pathMin: "",
          },
          functionParish: 0,
        },
      ],
    },
    errors: null,
  };
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

  // const paths = parishes.map((parish) => ({
  //   params: { ParishURL: parish.url },
  // }));
  const paths = [
    { params: { ParishURL: "a" } },
    { params: { ParishURL: "b" } },
    { params: { ParishURL: "c" } },
  ];

  return { paths, fallback: false };
};
