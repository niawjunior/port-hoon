import { FC } from "react";
import { ResponsivePie } from "@nivo/pie";

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
      label: item.symbol.toUpperCase(),
      value: Number(item.available),
    };
  });

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
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
    />
  );
};

export default Pie;
