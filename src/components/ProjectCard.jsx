import PropTypes from 'prop-types';

export default function ProjectCard({ id, image, title, description, link, isExpanded, onExpand, onClose }) {
    return (
        <div id={id} className="flex flex-col rounded-lg bg-primary shadow-secondary-1 mx-3">
            {isExpanded ? (
                <div className="relative flex flex-col md:flex-row p-3 border border-accent rounded-lg">
                    <img
                        className="md:w-1/3 m-3 mx-2 rounded-lg"
                        src={image}
                        alt={title}
                    />
                    <div className=" flex flex-col md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-accent">{title}</h2>
                        <div className="mb-4 text-white">
                            {description}
                        </div>
                        <div className='flex flex-row justify-between mx-3'>
                            <a href={link} target='_blank' type="button" className="w-fit bg-accent p-2 rounded text-primary font-bold hover:bg-primary hover:text-accent border border-transparent hover:border-accent ">View Live</a>
                        </div>
                        <button onClick={onClose} className="absolute bottom-2 right-5 md:bottom-auto text-2xl m-0 text-white rounded hover:bg-accent px-2 hover:text-primary hover:rounded-full">X</button>
                    </div>
                </div>
            ) : (
                <div id={id} className="flex flex-col justify-between rounded-lg bg-primary shadow-secondary-1 mx-3 h-full">
                    <div className="h-48">
                        {image ? (
                            <img
                                className="rounded-lg w-full h-full  p-2"
                                src={image}
                                alt={title}
                            />
                        ) : (
                            <div className="h-full flex items-center justify-center bg-gray-200 text-gray-500">
                                No Image Available
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col p-3 text-surface flex-grow h-32">
                        <h5 className="mb-2 text-lg text-white font-medium leading-tight line-clamp-2">
                            {title}
                        </h5>
                        <button
                        onClick={onExpand}
                            className="mt-auto text-center inline-block rounded bg-accent p-2 text-xs font-bold uppercase leading-normal text-primary shadow-secondary-3"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

ProjectCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    isExpanded: PropTypes.bool.isRequired,
    onExpand: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

