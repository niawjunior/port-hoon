import { Card } from "antd";
import Pie from "./pie-chart";

const Summary = () => {
  return (
    <Card title="สรุป" size="small">
      <Pie />
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default Summary;
