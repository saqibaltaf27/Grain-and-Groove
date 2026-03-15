import React, {useState} from "react";
import ResultCard from "./ResultCard";

const CabinetForm = () => {
    const [formData, setFormData] = useState({
        height: '',
        width: '',
        depth: '',
        woodSpecies: 'Oak',
        finishType: 'Standard Stain'
    });

    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        // Input Validation
        if (!formData.height || !formData.width || !formData.depth) {
            setError('All fields are required.');
            return;
        }

        if (formData.height <= 0 || formData.width <= 0 || formData.depth <= 0) {
            setError('Dimensions must be positive numbers.');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/estimate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if(res.ok) setResult(data);
            else setError(data.error);
        } catch (err) {
            setError('Server error. Please try again.');
        }
    };

    return (
        <div className="cabinet-form">
            <form onSubmit={handleSubmit}>
                <input type="number" name="height" placeholder="Height (inches)" value={formData.height} onChange={handleChange} />
                <input type="number" name="width" placeholder="Width (inches)" value={formData.width} onChange={handleChange} />
                <input type="number" name="depth" placeholder="Depth (inches)" value={formData.depth} onChange={handleChange} />
                <select name="woodSpecies" value={formData.woodSpecies} onChange={handleChange}>
                    <option>Oak</option>
                    <option>Maple</option>
                    <option>Cherry</option>
                    <option>Walnut</option>
                </select>

                <select name="finishType" value={formData.finishType} onChange={handleChange}>
                    <option>Standard Stain</option>
                    <option>High-Gloss Lacquer</option>
                    <option>Natural Oil</option>
                </select>

                <button type="submit">Calculate</button>
            </form>

            {error &&
            <p className="error">{error}</p>
            }
            {result && <ResultCard result={result} />}

        </div>
    );
};

export default CabinetForm;