import { FC } from "react";
import ReactEcharts from "echarts-for-react";

const Pie: FC = () => {
  const option = {
    title: {
      text: "同名数量统计",
      subtext: "纯属虚构",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      right: 10,
      top: 20,
      bottom: 20,
      data: 10,

      selected: 4,
    },
  };

  return <ReactEcharts option={option} />;
};
export default Pie;
