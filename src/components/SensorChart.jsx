import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

// Sensor status data
const data = [
  {
    name: "Active",
    value: 40,
  },
  {
    name: "Offline",
    value: 8,
  },
];

export default function SensorChart() {
  return (
    <div className="chart">
      {/* Chart Title */}
      <h3>Sensor Status</h3>

      {/* Pie Chart */}
      <PieChart
        width={300}
        height={250}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={90}
        />

        <Tooltip />
      </PieChart>
    </div>
  );
}