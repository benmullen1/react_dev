import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const chartItems = props.dataPoints;
    const maxValue = Math.max(...chartItems.map((datapoint) => datapoint.value));
    return (
        <div className="chart">
            {chartItems.map( (chartItem) => (
                <ChartBar key={chartItem.label} label={chartItem.label} value={chartItem.value} maxValue={maxValue} />
            ))}
        </div>
    );
};

export default Chart;