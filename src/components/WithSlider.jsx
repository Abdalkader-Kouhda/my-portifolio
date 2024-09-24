/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useEffect, useState } from 'react';

// Higher-Order Component that adds slider functionality
const withSlider = (WrappedComponent) => {
    return (props) => {
        const [currentSlide, setCurrentSlide] = useState(0);

        const itemsPerPage = () => {
            if (window.innerWidth >= 1024) return 4;
            if (window.innerWidth >= 768) return 3;
            return 1;
        };

        const [visibleItems, setVisibleItems] = useState(itemsPerPage());

        const totalSlides = Math.ceil(props.items.length / visibleItems);

        const handleNext = () => {
            setCurrentSlide((prevSlide) => 
                prevSlide + 1 < totalSlides ? prevSlide + 1 : 0
            );
        };

        const handlePrevious = () => {
            setCurrentSlide((prevSlide) => 
                prevSlide - 1 >= 0 ? prevSlide - 1 : totalSlides - 1
            );
        };

        useEffect(() => {
            const handleResize = () => {
                setVisibleItems(itemsPerPage());
                setCurrentSlide(0);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div className="relative">
                <button
                    onClick={handlePrevious}
                    className="absolute left-0 top-1/2 pt-1 transform -translate-y-1/2 p-2 bg-primary text-accent rounded-full text-2xl z-10"
                    style={{ zIndex: 20 }}
                >
                    &lt;
                </button>
                <div className="overflow-hidden px-4">
                    <div
                        className="flex items-center transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {props.items.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 p-2"
                                style={{ minWidth: `${100 / visibleItems}%` }}
                            >
                                <WrappedComponent {...item} />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 pt-1 p-2 bg-primary text-accent rounded-full text-2xl z-50"
                >
                    &gt;
                </button>
            </div>
        );
    };
};

export default withSlider;
