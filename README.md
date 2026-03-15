# Grain & Groove – Custom Cabinet Finishing & Material Estimator

## Overview
**Grain & Groove** is a custom cabinetry workshop that requires a lightweight internal tool to help sales representatives quickly estimate the cost of finishing custom cabinets.  

This application calculates the **required finishing material**, **labor cost**, and **total estimated project cost** based on cabinet dimensions, selected wood species, and finishing type.

The tool is designed to work smoothly on **desktop and tablet devices**, making it practical for both office staff and workshop technicians.

---

# Features

## 1. Dimensional Input
Users can enter cabinet dimensions in inches:
- Height
- Width
- Depth

These values are used to calculate the cabinet’s **total exterior surface area**.

---

## 2. Surface Area Calculation
The system calculates the **total exterior surface area excluding the back panel**.

Included surfaces:
- Front panel
- Top
- Bottom
- Left side
- Right side

Formula:
Surface Area = (Width × Height) + 2(Width × Depth) + 2(Height × Depth)


The result is converted from **square inches to square feet**.

---

## 3. Wood Species Labor Multipliers

Different wood species require different finishing preparation efforts.

| Wood Species | Labor Multiplier |
|---------------|------------------|
| Oak | 1.00 |
| Maple | 1.10 |
| Cherry | 1.15 |
| Walnut | 1.25 |

Example:  
Walnut requires **25% more labor cost** due to grain preparation.

---

## 4. Finish Type Options

Users can select the finishing method:

| Finish Type | Description |
|-------------|-------------|
| Standard Stain | Standard wood stain finish |
| High-Gloss Lacquer | Premium lacquer coating |
| Natural Oil | Hand-rubbed natural oil finish |

Each finish type may apply additional labor complexity.

---

## 5. Calculation Engine

The estimator calculates three main values:

### Material Needed

Material Needed = Surface Area (sq ft) ÷ Coverage Rate


Coverage rate is stored in a configuration file.

---

### Labor Cost

Labor Cost = Surface Area × Base Labor Rate × Wood Multiplier × Finish Multiplier


---

### Total Project Cost

Total Cost = Labor Cost + Material Cost


---

# Technology Stack

### Backend
- Node.js
- Express.js
- JSON configuration file (no external database)

### Frontend
- React.js
- Responsive CSS layout

### Communication
- REST API (POST request)

---

---

# Installation & Setup

## 1. Clone the Repository


git clone https://github.com/saqibaltaf27/Grain-and-Groove.git

cd grain-groove-estimator


---

# Backend Setup

Navigate to the backend folder:


cd backend


Install dependencies:


npm install


Run the backend server:


node server.js


The server will start on:


http://localhost:5000


---

# Frontend Setup

Open another terminal and navigate to the frontend folder:


cd frontend


Install dependencies:


npm install


Start the React application:


npm start


The application will open in the browser:


http://localhost:3000


---

# API Endpoint

### POST `/api/estimate`

Calculates cabinet finishing estimates.

### Request Example


POST /api/estimate
Content-Type: application/json

{
"height": 30,
"width": 24,
"depth": 20,
"woodSpecies": "Maple",
"finishType": "High-Gloss Lacquer"
}


---

### Response Example


{
"surfaceAreaSqFt": "18.33",
"materialNeeded": "0.37",
"laborCost": "120.99",
"materialCost": "3.70",
"totalCost": "124.69"
}


---

# Input Validation

The application validates inputs to ensure accurate calculations.

Validation rules:

- Dimensions cannot be empty
- Dimensions must be positive numbers
- Invalid values return an error response

Example validation message:


Dimensions must be positive numbers.


---

# Testing the Application

## Start both servers

Backend:


cd backend
node server.js


Frontend:


cd frontend
npm start


---

## Test Case Example

Input values:


Height: 30
Width: 24
Depth: 20
Wood Species: Maple
Finish Type: High-Gloss Lacquer


Expected output:

- Surface Area
- Material Required
- Labor Cost
- Material Cost
- Total Cost

---

# Responsive Design

The interface is optimized for:

- Desktop browsers
- Workshop tablets
- Mobile devices

The form layout adapts automatically using responsive CSS.

---

# Visual Documentation

Three screenshots demonstrating different configurations should be included:

1. Oak + Standard Stain
2. Cherry + High-Gloss Lacquer
3. Walnut + Natural Oil

## Deployment
1. Github (https://github.com/saqibaltaf27/Grain-and-Groove.git)
2. Vercel ()