import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const AntLayout: FC = ({ children }) => {
  let history = useHistory();
  const [key, setKey] = useState<string>(history.location.pathname.slice(1));

  const StyledContent = styled.div`
    min-height: calc(100vh - 0.5rem - 1rem - 69px - 64px);
  `;

  const handleOnChange = (event: any) => {
    history.push(event.key);
    setKey(event.key);
  };
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" collapsible>
        <Menu
          onClick={handleOnChange}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[key]}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            หน้าหลัก
          </Menu.Item>
          <Menu.Item key="about" icon={<HomeOutlined />}>
            เกี่ยวกับ
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="p-0" />
        <Content className="m-2">
          <StyledContent className="bg-white pl-6 p-2">
            {children}
          </StyledContent>
        </Content>
        <Footer className="text-center">
          โปรแกรมคำนวณมูลค่าพอร์ตหุ้น <br />
          พัฒนาโดย{" "}
          <a
            target="_blank"
            className="text-blue-500"
            href="https://facebook.com/pasupol.b/"
            rel="noreferrer"
          >
            Pasupol.B
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AntLayout;
