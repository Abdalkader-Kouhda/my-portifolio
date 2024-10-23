import Navbar from "./components/Navbar";
import HeroSecion from "./components/HeroSection"
import ProjectSection from './components/ProjectSection'
import ContactUs from './components/ContactUs';
import ServiceSection from './components/ServiceSection.jsx';
import AwardsCertificates from './components/AwardsSection.jsx';
import { data } from './data/data.js';

function App() {
    return (
        <>
            <Navbar />
            <div className=" mx-auto">
                <HeroSecion />
                <ServiceSection />
                <ProjectSection projects={data.projects} />
                <AwardsCertificates />
                <ContactUs />
            </div>
        </>
    );
}

export default App;
