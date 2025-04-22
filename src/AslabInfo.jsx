import React, { useState } from 'react';

export default function AslabInfo() {
    const [filter, setFilter] = useState('All');

    const aslabList = [
        { name: 'Ryan Safa Tjendana', praktikum: 'DMJ' },
        { name: 'Emir Fateen Haqqi', praktikum: 'DMJ' },
        { name: 'Yasmin Devina Sinuraya', praktikum: 'SBD' },
        { name: 'Kamal Makarim Iskandar', praktikum: 'SBD' },
        { name: 'George William Thomas', praktikum: 'OS' },
        { name: 'Fairuz Muhammad', praktikum: 'OS' },
        { name: 'Raihan Muhammad Ihsan', praktikum: 'OPREC' },
        { name: 'Dimas Dermawan', praktikum: 'OPREC' },
    ];

    const filteredList = filter === 'All'
        ? aslabList
        : aslabList.filter(aslab => aslab.praktikum === filter);


    return (
        <section id="aslab" className="w-screen min-h-screen bg-gradient-pastel text-white flex flex-col items-center justify-center">
            <div className="max-w-7xl w-full px-6 py-6 flex flex-col items-center">
                {/* Title */}
                <h2 className="text-3xl font-extrabold text-center mb-4">Informasi Aslab Netlab</h2>

                {/* Dropdown */}
                <div className="mb-6">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="text-black px-4 py-2 rounded-lg border border-gray-300"
                    >
                        <option value="All">Semua Aslab</option>
                        <option value="DMJ">DMJ</option>
                        <option value="SBD">SBD</option>
                        <option value="OS">OS</option>
                        <option value="OPREC">OPREC</option>
                    </select>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredList.map((aslab, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-pastelPink to-pastelYellow text-white p-4 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-2">{aslab.name}</h3>
                            <p className="text-sm">PJ {aslab.praktikum}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
