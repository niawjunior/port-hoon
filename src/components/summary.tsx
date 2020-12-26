import { Card, Alert } from "antd";
import { DollarCircleOutlined, PercentageOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { getFormState } from "../store/selectors";
import Pie from "./pie-chart";
const numeral = require("numeral");

const Summary = () => {
  const formState = useRecoilValue(getFormState);
  const totalAvgAmount = formState.reduce(
    (total, curr: any) => (total += Number(curr.avg) * curr.available),
    0
  );
  const totalCurrentAmount = formState.reduce(
    (total, curr: any) => (total += Number(curr.market) * curr.available),
    0
  );

  const totalText: any =
    totalCurrentAmount < totalAvgAmount
      ? totalAvgAmount - totalCurrentAmount
      : totalCurrentAmount - totalAvgAmount
      ? "-" + numeral(totalAvgAmount - totalCurrentAmount).format(0, 0)
      : "+" + numeral(totalCurrentAmount - totalAvgAmount).format(0, 0);

  return (
    <Card title="สรุป" size="small">
      <div
        style={{
          width: "100%",
          height: `${formState.length ? "300px" : 0}`,
        }}
      >
        <Pie data={formState} />
      </div>
      {formState.length > 0 && (
        <>
          <Alert
            message={`จำนวนหุ้น ${formState.length}`}
            type="info"
            showIcon
          />
          <Alert
            style={{ marginTop: "5px" }}
            message={`เงินลงทุน ${numeral(totalAvgAmount).format(0, 0)}`}
            type="info"
            showIcon
            icon={<DollarCircleOutlined />}
          />
          <Alert
            style={{ marginTop: "5px" }}
            message={`กำไร/ขาดทุน ${
              totalCurrentAmount < totalAvgAmount
                ? `-${numeral(totalText).format(0, 0)} (-${(
                    (totalText * 100) /
                    totalAvgAmount
                  ).toFixed(2)}%)`
                : `${numeral(totalText).format(0, 0)} (+${(
                    (totalText * 100) /
                    totalAvgAmount
                  ).toFixed(2)}%)`
            }`}
            type={totalCurrentAmount < totalAvgAmount ? "error" : "success"}
            showIcon
            icon={<PercentageOutlined />}
          />
        </>
      )}
    </Card>
  );
};

export default Summary;
