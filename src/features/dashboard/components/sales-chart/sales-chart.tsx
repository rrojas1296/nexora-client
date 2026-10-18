import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    label: "Mon",
    current: 12000,
    previous: 10000,
  },
  {
    label: "Tue",
    current: 1000,
    previous: 2000,
  },
  {
    label: "Wed",
    current: 2500,
    previous: 2300,
  },
  {
    label: "Thu",
    current: 1200,
    previous: 1800,
  },
  {
    label: "Fri",
    current: 8200,
    previous: 9800,
  },
  {
    label: "Sat",
    current: 9500,
    previous: 9200,
  },
  {
    label: "Sun",
    current: 7500,
    previous: 7300,
  },
];
const SalesChart = () => {
  return (
    <BarChart
      data={data}
      responsive
      barGap={4}
      style={{
        width: "100%",
        maxHeight: "256px",
        aspectRatio: 1.618,
      }}
    >
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip cursor={false} />
      <Bar maxBarSize={32} dataKey="current" fill="var(--primary-500)" radius={[8, 8, 0, 0]} />
      <Bar maxBarSize={32} dataKey="previous" fill="var(--surface-muted)" radius={[8, 8, 0, 0]} />
    </BarChart>
  );
};

export default SalesChart;
