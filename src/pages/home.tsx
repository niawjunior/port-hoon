import React, { FC } from "react";
import { Row, Col, Divider } from "antd";
import { formState } from "../store/atoms";

import AntLayout from "../components/layout";
import MainForm from "../components/form";
import Summary from "../components/summary";
import { useSetRecoilState } from "recoil";

const Home: FC = () => {
  const setForm = useSetRecoilState(formState);

  const submitForm = (value: any) => {
    setForm((oldState) => [...oldState, value as never]);
  };
  return (
    <AntLayout>
      <Row gutter={[16, 0]} justify="space-between">
        <h1 className="text-xl m-8">คำนวณรายได้</h1>
        <Divider />
        <Col lg={14} md={12} sm={24} xs={24}>
          <MainForm submitForm={submitForm} />
        </Col>
        <Col lg={10} md={12} sm={24} xs={24}>
          <Summary />
        </Col>
      </Row>
    </AntLayout>
  );
};

export default Home;
