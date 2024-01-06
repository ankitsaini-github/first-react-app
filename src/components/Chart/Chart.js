import "./Chart.css";
import Chartbar from "./Charbar";
const Chart = (props) => {
  const dataPointValueArray = props.dataPoints.map((dataPoint) => dataPoint.value );
  const MaximumValue = Math.max(...dataPointValueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar className="chartbar"
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={MaximumValue}
          label={dataPoint.label}
        />)
      )}
    </div>
  );
};

export default Chart;
