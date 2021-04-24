import { Form, Input, Button, Space, Row, Col, InputNumber } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";
import { FC, useState } from "react";

interface FormProps {
  submitForm: (value: any) => typeof value;
}

const MainForm: FC<FormProps> = ({ submitForm }) => {
  const [form] = Form.useForm();
  const [setData, data] = useState([] as any);
  const onFinish = (values: any) => {
    submitForm(values);
  };

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFormChange = () => {};

  return (
    <Form
      onChange={onFormChange}
      {...layout}
      form={form}
      name="formCalculate"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{
        port: [
          {
            symbol: "",
          },
        ],
      }}
    >
      <Form.List name="port">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} className="flex mb-1" align="baseline">
                <Row key={field.key} gutter={[16, 0]}>
                  <Col lg={6} sm={24} xs={24}>
                    <Form.Item
                      label="ชื่อหุ้น"
                      {...field}
                      name={[field.name, "symbol"]}
                      normalize={(value) => (value || "").toUpperCase()}
                      fieldKey={[field.fieldKey, "symbol"]}
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกชื่อหุ้นที่ต้องการ",
                        },
                      ]}
                    >
                      <Input placeholder="ชื่อหุ้น" />
                    </Form.Item>
                  </Col>

                  <Col lg={6} sm={24} xs={24}>
                    <Form.Item
                      label="จำนวนหุ้นที่มี"
                      {...field}
                      name={[field.name, "available"]}
                      fieldKey={[field.fieldKey, "available"]}
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกจำนวนหุ้นที่มี",
                          type: "number",
                          min: 1,
                        },
                      ]}
                    >
                      <InputNumber
                        formatter={(value) =>
                          `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                        parser={(value) =>
                          value ? value.replace(/\$\s?|(,*)/g, "") : ""
                        }
                        className="w-full"
                        placeholder="จำนวน"
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={6} sm={24} xs={24}>
                    <Form.Item
                      label="ราคาที่ซื้อมา"
                      {...field}
                      name={[field.name, "avg"]}
                      fieldKey={[field.fieldKey, "avg"]}
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกราคาที่ซื้อมา",
                        },
                      ]}
                    >
                      <InputNumber
                        className="w-full"
                        placeholder="ราคาที่ซื้อมา"
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={6} sm={24} xs={24}>
                    <Form.Item
                      className="current-amount"
                      label="ราคาในปัจจุบัน"
                      {...field}
                      name={[field.name, "market"]}
                      fieldKey={[field.fieldKey, "market"]}
                      rules={[
                        {
                          required: true,
                          message: "กรุณากรอกราคาในปัจจุบัน",
                        },
                      ]}
                    >
                      <InputNumber
                        className="w-full"
                        placeholder="ราคาปัจจุบัน"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                เพิ่ม
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          icon={<CalculatorOutlined />}
        >
          คำนวณ
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MainForm;
