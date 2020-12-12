import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { FC } from "react";
import styled from "styled-components";

const { Header, Content, Footer, Sider } = Layout;

const AntLayout: FC = ({ children }) => {
  const StyledContent = styled.div`
    min-height: calc(100vh - 0.5rem - 1rem - 69px - 64px);
  `;

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" collapsible>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            หน้าหลัก
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-0" />
        <Content className="m-2">
          <StyledContent className="bg-white p-8">{children}</StyledContent>
        </Content>
        <Footer className="text-center">โปรแกรมคำนวณหุ้น</Footer>
      </Layout>
    </Layout>
  );
};

export default AntLayout;
