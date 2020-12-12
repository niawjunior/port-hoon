import React, { FC } from "react";
import { Row, Col, Divider } from "antd";

import AntLayout from "../components/layout";
import MainForm from "../components/form";

const Home: FC = () => {
  const submitForm = (value: any) => {
    console.log(value);
  };
  return (
    <AntLayout>
      <Row justify="center">
        <h1 className="text-xl">คำนวณรายได้</h1>
        <Divider />
        <Col span={16}>
          <MainForm submitForm={submitForm} />
        </Col>
      </Row>
    </AntLayout>
  );
};

export default Home;
