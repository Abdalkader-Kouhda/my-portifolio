import ServiceCard from "./ServiceCard.jsx";
import {data} from '../data/data.js';
function ServiceSection() {
    return (
        <div id="services" className="flex flex-col items-center bg-secondary my-4">
            <h1 className="mt-5 text-3xl font-bold text-accent mb-6">Services</h1>
            <div className="flex flex-col md:flex-row justify-center flex-wrap">
                {data.services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}

            </div>
        </div>
    );
}

export default ServiceSection;