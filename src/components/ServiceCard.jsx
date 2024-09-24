import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, description }) => {
    return (
            <div className=" flex flex-col w-1/4 items-center p-3 m-5 bg-primary rounded-lg transition-transform duration-300 hover:shadow-xl border border-transparent hover:border-accent
            hover:scale-110">
                <img src={icon} width="50px"height="50px"  alt="" />
                <div className="py-4">
                    <h2 className="text-2xl text-accent font-semibold">{title}</h2>
                    <p className="mt-2 text-white">{description}</p>
                </div>
            </div>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ServiceCard;