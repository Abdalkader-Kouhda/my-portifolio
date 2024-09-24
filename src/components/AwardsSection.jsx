import Award from './AwardCard.jsx';
import { data, responsive } from '../data/data.js';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function AwardsSection() {
    const awrads = data.awards.map((item) => (
        <Award
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            link={item.link}
        />
    ));
    return (
        <div id='awards' className=' my-5 bg-secondary p-5 my-2'>
            <h2 className='text-3xl font-bold text-center text-accent m-3'>Awards & Certificates</h2>
            <Carousel className='container mx-auto' responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {awrads}
            </Carousel>
        </div>
    );
}