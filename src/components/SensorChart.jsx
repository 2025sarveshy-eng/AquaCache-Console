import {
 PieChart,
 Pie,
 Tooltip
} from "recharts";

const data = [
 { name: "Active", value: 40 },
 { name: "Offline", value: 8 }
];

function SensorChart() {
 return (
  <div className="chart">

   <h3>Sensor Status</h3>

   <PieChart width={300} height={250}>
    <Pie
      data={data}
      dataKey="value"
      outerRadius={90}
    />
    <Tooltip />
   </PieChart>

  </div>
 );
}

export default SensorChart;