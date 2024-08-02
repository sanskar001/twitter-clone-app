import Form from "@/components/Form";
import Header from "@/components/Header";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
    </>
  );
};

export default HomePage;
