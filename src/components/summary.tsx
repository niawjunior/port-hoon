import { Card } from "antd";
import { useRecoilValue } from "recoil";
import { getFormState } from "../store/selectors";
import Pie from "./pie-chart";
const Summary = () => {
  const formState = useRecoilValue(getFormState);
  return (
    <Card title="สรุป" size="small">
      <p>จำนวนหุ้นทั้งหมด {formState.length}</p>
      <div style={{ width: "100%", height: "300px" }}>
        <Pie data={formState} />
      </div>
    </Card>
  );
};

export default Summary;
