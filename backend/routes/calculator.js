const express = require('express');
const router = express.Router();
const rates = require('../config/rates.json');

// Calculates surface area excluding back panel
function calculateSurfaceArea(height, width, depth) {
    const frontBack = width * height; // front only
    const topBottom = width * depth * 2; // top + bottom
    const sides = height * depth * 2; // left + right

    return frontBack + topBottom + sides; // total sq inches
}

// Convert sq inches to sq ft
function toSquareFeet(sqInches) {
    return sqInches / 144;
}

router.post('/estimate', (req, res) => {
    const { height, width, depth, woodSpecies, finishType } = req.body;
    
    // Input Validation
    if(!height || !width || !depth || height <= 0 || width <= 0 || depth <= 0) {
        return res.status(400).json({
            error: 'Invalid dimensions.'
        });
    }

    const surfaceAreaSqIn = calculateSurfaceArea(height, width, depth);
    const surfaceAreaSqFt = toSquareFeet(surfaceAreaSqIn);

    // Material needed
    const materialNeeded = surfaceAreaSqFt / rates.materialCoverageRate;

    // Labor Cost
    const laborMultiplier = rates.woodSpecies[woodSpecies] || 1;
    const finishMutiplier = rates.finishTypes[finishType] || 1;
    const laborCost = surfaceAreaSqFt * rates.baseLaborRate * laborMultiplier * finishMutiplier;

    // Material Cost
    const materialCost = materialNeeded * rates.materialCostPerUnit;

    const totalCost = laborCost + materialCost;

    res.json({
        surfaceAreaSqFt: surfaceAreaSqFt.toFixed(2),
        materialNeeded: materialNeeded.toFixed(2),
        laborCost: laborCost.toFixed(2),
        materialCost: materialCost.toFixed(2),
        totalCost: totalCost.toFixed(2)
    });
});

module.exports = router;
