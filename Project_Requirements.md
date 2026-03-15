# Grain & Groove - Custom Cabinet Finishing & Material Estimator

# Overview
Grain & Groove is a custom cabinetry workshop. This internal tool helps sales representatives instantly estimate cabinet finishing costs based on cabinet dimensions, wood species, and finish type.

## Features
1. Dimensional Inputs
    - Users can input height, width, and depth (in inches) for standard cabinet boxes.

2. Surface Area Calculation
    - Calculates total exterior surface area, excluding the back panel.
    - Formula considers top, bottom, sides, and front faces.

3. Dynamic Rate Multipliers
    - Wood Species:
        - Oak (standard) -> No extra multiplier
        - Maple -> +10% labor cost
        - Cherry -> +15% labor cost
        - Walnut -> +25% labor cost
    - Finish Type:
        - Standard Stain
        - High-Gross Lacquer
        - Natural Oil

4. Calculation Engine
    - Material Needed = total surface area + coverage rate constant (e.g., sq ft per liter)
    - Labor Cost = total surface area * base labor rate * wood species multiplier
    - Total Project Cost = material cost + labor cost

5. UI
    - clea, professional interface
    - Responsive for tablets and desktops
    - Input Validation: no negative or empty values allowed

6. Tech Stack
    - Node.js + Express Backend
    - Frontend: React
    - Configuration stored in JSON (no external database)

## Deliverables

1. Codebase: A ZIP file containing the complete, organized source code.
2. Public Repository: A link to a public GitHub repository including a README with setup instructions.
3. Live Demo: A deployed link to the application (e.g., Vercel, Netlify, or Fly.io).
4. Visual Documentation: Three screenshots showing the calculator in use with different wood species and finishes selected.