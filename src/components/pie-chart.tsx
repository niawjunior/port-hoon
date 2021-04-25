import { FC } from "react";
import { ResponsivePie } from "@nivo/pie";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
const numeral = require("numeral");
interface IForm {
  available: string;
  avg: string;
  market: string;
  symbol: string;
}
// <FallOutlined />
//             ) : (
//               <RiseOutlined />
interface PieProps {
  data: IForm[];
}

const Pie: FC<PieProps> = ({ data }) => {
  const pieData = data.map((item) => {
    return {
      id: item.symbol,
      label: item.symbol,
      value: Number(item.available),
    };
  });

  const findData = (id: string) => data.find((item) => item.symbol === id);
  const getPercentageChange = (oldNumber: number, newNumber: number) => {
    const decreaseValue = Math.abs(oldNumber - newNumber);
    const result = ((decreaseValue / oldNumber) * 100).toFixed(2);
    return oldNumber <= newNumber ? "+" + result : "-" + result;
  };
  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={5}
      colors={{ scheme: "nivo" }}
      borderWidth={0}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsLinkDiagonalLength={8}
      radialLabelsLinkHorizontalLength={8}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: "color" }}
      radialLabelsLinkStrokeWidth={3}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      tooltip={(input) => {
        const data = findData(String(input.datum.id));
        return (
          <div className="w-max md:w-60 lg:w-max text-center h-full bg-yellow-200	 rounded-sm shadow-lg flex items-center p-2">
            <div
              style={{
                width: "25px",
                height: "15px",
                backgroundColor: input.datum?.color,
              }}
            ></div>
            <div className="px-2 text-xs border-r-2 border-black">
              <p className="border-b-2 border-black">
                {`Symbol: ${input.datum.id} Avail Vol: ${numeral(
                  input.datum?.data?.value
                ).format("0.0a")} Avg: ${data?.avg} Market: ${data?.market}`}
              </p>
              <p>
                {`%U.PL: ${getPercentageChange(
                  Number(data?.avg),
                  Number(data?.market)
                )} `}
                {data ? (
                  data?.avg < data?.market ? (
                    <RiseOutlined className="text-green-500" />
                  ) : data?.avg === data?.market ? null : (
                    <FallOutlined className="text-red-500" />
                  )
                ) : null}
              </p>
            </div>
            <div className="p-2 text-xs">
              <p className="border-b-2 border-black">
                Amount:{" "}
                {numeral(Number(data?.available) * Number(data?.avg)).format(
                  "0.0a"
                )}
              </p>
              <p>
                Market Val:{" "}
                {numeral(Number(data?.available) * Number(data?.market)).format(
                  "0.0a"
                )}
              </p>
            </div>
          </div>
        );
      }}
      valueFormat={(value) => {
        console.log(value);
        return `${numeral(value).format("0,0")}  หุ้น`;
      }}
    />
  );
};

export default Pie;
