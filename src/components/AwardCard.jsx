import PropTypes from 'prop-types';
import award from '../assets/images/icons/award.svg';
function Award({ id, title, link }) {
    return (
        <div id={id} className="flex flex-col justify-between rounded-lg bg-primary shadow-secondary-1 mx-3 h-50">
            <img src={award} alt=""  className="self-center p-3 " width={"100px"} height={"100px"}/>
            <div className="flex flex-col p-3 text-surface flex-grow h-32">
                <h5 className="mb-2 text-lg text-white font-medium leading-tight line-clamp-2">
                    {title}
                </h5>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-center inline-block rounded bg-accent p-2 text-xs font-bold uppercase leading-normal text-primary shadow-secondary-3"
                >
                    View Award
                </a>
            </div>
        </div>
    );
}

Award.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    // The button to view the award
};

export default Award;

