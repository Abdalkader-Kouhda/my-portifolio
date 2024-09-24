import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { responsive, data } from '../data/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectsSection() {
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    const handleExpand = (id) => {
        setExpandedProjectId(id);
    };

    const handleClose = () => {
        setExpandedProjectId(null);
    };

    const Projects = data.projects.map((item) => (
        <div key={item.id} className={`transition-all duration-300 ease-in-out ${expandedProjectId === null ? 'w-full' : expandedProjectId === item.id ? 'w-full' : 'hidden'}`}>
            <ProjectCard
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                link={item.link}
                isExpanded={expandedProjectId === item.id}
                onExpand={() => handleExpand(item.id)}
                onClose={handleClose}
            />
        </div>
    ));

    return (
        <section id='projects' className="p-2 text-secondary bg-accent my-2 p-5">
            <h1 className="text-3xl font-bold text-center mb-3">Projects</h1>
            {expandedProjectId === null ? (
                <Carousel className=' mx-auto' responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {Projects}
                </Carousel>
            ) : (
                <div className="container mx-auto">
                    {Projects}
                </div>
            )}
        </section>
    );
};