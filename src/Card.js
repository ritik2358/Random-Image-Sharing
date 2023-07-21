// EmployeeCard.js

import React, { useState } from 'react';
// import App from './App';

const EmployeeCard = () => {
    // State to manage the contribution and retirement age values
    const [contribution, setContribution] = useState(5); // Default value: 5%
    const [retirementAge, setRetirementAge] = useState(65); // Default value: 65 years

    // Function to handle the contribution slider change
    const handleContributionChange = (e) => {
        setContribution(e.target.value);
    };

    // Function to handle the retirement age slider change
    const handleRetirementAgeChange = (e) => {
        setRetirementAge(e.target.value);
    };

    // Function to handle the update button click
    const handleUpdateClick = () => {

        console.log("Employee data updated!");
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mx-0 text-left mb-2">Retirement Strategy</div>

                {/* Contribution Range Slider */}
                <div className="mb-4 mt-4">
                    <div className='text-left'>
                        <label htmlFor="employeeContribution" className='font-bold text-left' >Employee Contribution </label>
                    </div>
                    <div className='mt-3'>
                        <input
                            type="range"
                            id="employeeContribution"
                            name="employeeContribution"
                            min="0"
                            max="100"
                            step="1"
                            value={contribution}
                            onChange={handleContributionChange}
                            className="w-4/5"

                        />
                        <span className='mx-4'> {contribution}%</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className='text-left'>
                        <label htmlFor="retirementAge" className='font-bold'>Retirement Age </label>
                    </div>
                    <div>
                        <input
                            type="range"
                            name="retirementAge"
                            id="retirementAge"
                            min="0"
                            max="100"
                            step="1"
                            value={retirementAge}
                            onChange={handleRetirementAgeChange}
                            className="w-4/5"

                        />
                        <span className='mx-4'> {retirementAge}%</span>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className=' text-left flex justify-between'> Employee Contribution <p>{contribution}%</p> </p>
                </div>
                <div className='mt-3'>
                    <p className='text-left flex justify-between'> Interest <p>5%</p></p>
                </div>


                {/* Update Button */}
                <div className='mt-8'>
                    <button
                        className="w-3/4 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        onClick={handleUpdateClick}
                    >
                        Update
                    </button>
                </div>


                {/* View Help Docs Button */}
                <div className='mt-6'>
                    <button
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-red-900 text-l"
                    >
                        View Help Docs
                        <svg
                            className="inline-block w-4 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>

                    </button>
                </div>

            </div>
        </div>
    );
};

export default EmployeeCard;
