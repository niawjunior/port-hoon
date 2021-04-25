import { FC } from "react";
import { ResponsivePie } from "@nivo/pie";
const numeral = require("numeral");
interface IForm {
  available: string;
  avg: string;
  market: string;
  symbol: string;
}

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
        return (
          <div className="w-60 text-center h-full bg-yellow-200	 rounded-sm shadow-lg relative flex items-center p-2">
            <div
              style={{
                width: "25px",
                height: "15px",
                backgroundColor: input.datum?.color,
              }}
            ></div>
            <span className="px-2 text-xs break-words">
              {`Symbol ${input.datum.id} Vol ${numeral(
                input.datum?.data?.value
              ).format("0.0a")} Avg ${
                findData(String(input.datum.id))?.avg
              } Market ${
                findData(String(input.datum.id))?.market
              } %U.PL ${getPercentageChange(
                Number(findData(String(input.datum.id))?.avg),
                Number(findData(String(input.datum.id))?.market)
              )}`}
            </span>
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
