import React from 'react';
import "./ChartBar.css";

const ChartBar = (props) => {
    const label = props.label;
    const value = props.value;
    const maxValue = props.maxValue;
    const key = props.key

    let barFill = '0%';

    if (maxValue > 0) {
        barFill = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFill }}> </div>
            </div>
            <div className="chart-bar__label">{label}</div>

        </div>
    );
};

export default ChartBar;