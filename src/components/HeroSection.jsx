import { useEffect, useState, useMemo } from "react";
import profilePic from "/public/images/profile-pic.png";
import { data } from "../data/data.js";

// Define your API URL using Vite's environment variable
const API_URL = import.meta.env.VITE_API_URL || '/api'; // Fallback to '/api' for development

export default function HeroSection() {
    const [solvedProblems, setSolvedProblems] = useState(0);

    const totalSolved = useMemo(() => {
        return solvedProblems;
    }, [solvedProblems]);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await fetch(`${API_URL}/Abdalkader_Kouhda/solved`); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setSolvedProblems(result.totalSolved);
            } catch (error) {
                console.error("Error fetching solved problems:", error);
            }
        };

        if (solvedProblems === 0) {
            fetchProblems();
        }
    }, [solvedProblems]);

    return (
        <div id="about" className="container mx-auto p-4 mt-10 bg-primary flex flex-col lg:flex-row sm:justify-center items-center">
            <img
                className="text-5xl rounded-full mb-0 md:mb-6 w-80 h-80 md:w-96 md:h-96"
                src={profilePic}
                alt="Abdalkader Kouhda"
            />
            <div className="flex flex-col sm:ml-10 pl-5 py-4 w-auto">
                <h1 className="text-accent text-5xl">Hi, I’m Abdalkader!</h1>
                <p className="text-white mt-3 text-lg w-full sm:w-2/3">
                    {data.description}
                </p>
                <h2 className="text-accent text-xl mt-3 text-lg">
                    Currently, I have solved {totalSolved} problems on LeetCode!
                </h2>
            </div>
        </div>
    );
}