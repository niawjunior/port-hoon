import React, { FC } from "react";
import { Row, Col, Divider, message } from "antd";
import { formState } from "../store/atoms";

import AntLayout from "../components/layout";
import MainForm from "../components/form";
import Summary from "../components/summary";
import { useSetRecoilState } from "recoil";

const Home: FC = () => {
  const setForm = useSetRecoilState(formState);
  const submitForm = (value: any) => {
    message.success(`คำนวณสำเร็จ`);
    setForm(() => value.port);
  };
  return (
    <AntLayout>
      <Row gutter={[16, 0]} justify="space-between">
        <h1 className="text-xl m-8">คำนวณ มูลค่าพอร์ตหุ้น</h1>
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
