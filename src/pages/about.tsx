import { FC } from "react";
import { Alert, Card, Row, Col } from "antd";
import AntLayout from "../components/layout";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
const About: FC = () => {
  return (
    <AntLayout>
      <div className="px-10">
        <Alert
          message="คำชี้แจง"
          description="เว็บไซต์นี้จัดทำขึ้นมา เพื่อใช้ในการคำนวณมูลค่าหุ้นในพอร์ต ซึ่งใช้ได้ฟรี ไม่จำเป็นต้องสมัครสมาชิก และไม่มีการเก็บข้อมูลใดๆ"
          type="info"
        />

        <br />

        <Card
          title="เพิ่มไปยังหน้าหลักโทรศัพท์ (iOS)"
          style={{ width: "100%" }}
        >
          <Row gutter={[20, 16]}>
            <Col lg={4}>
              <p>1. เปิดเว็บไซต์ด้วย Safari</p>
              <img width={200} src={step1} alt="step1" />
            </Col>
            <Col lg={4}>
              <p>2. กด เพิ่มไปยังหน้าหลัก</p>
              <img width={200} src={step2} alt="step2" />
            </Col>
            <Col lg={4}>
              <p>3. กด เพิ่ม</p>
              <img width={200} src={step3} alt="step3" />
            </Col>
            <Col lg={4}>
              <p>4. กดที่ไอคอนเพื่อเข้าใช้งาน</p>
              <img width={200} src={step4} alt="step4" />
            </Col>
          </Row>
        </Card>
      </div>
    </AntLayout>
  );
};

export default About;
