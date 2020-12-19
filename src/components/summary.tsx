import { Card } from "antd";
import { useRecoilValue } from "recoil";
import { getFormState } from "../store/selectors";

const Summary = () => {
  console.log("hello");
  const formState = useRecoilValue(getFormState);

  // console.log(formState);
  return (
    <Card title="สรุป" size="small">
      {/* <Pie /> */}
      <p>จำนวนหุ้นทั้งหมด {formState.length}</p>
    </Card>
  );
};

export default Summary;
