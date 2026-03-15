import React from "react";

const ResultCard = ({ result }) => {

    return (
        <div className="result-card">
            <h2>Estimate</h2>
            <p>Surface Area: {result.surfaceAreaSqFt} sq ft</p>
            <p>Material Needed: {result.materialNeeded} units</p>
            <p>Material Cost: ${result.materialCost}</p>
            <p>Labor Cost: ${result.laborCost}</p>
            <p><strong>Total Cost: ${result.totalCost}</strong></p>

        </div>
    );
};

export default  ResultCard;
