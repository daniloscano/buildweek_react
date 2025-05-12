import './customButton.css'

const CustomButton = ({ variant = '', text = 'default', iconPosition = '', icon = null }) => {
    const Icon = icon;

    return (
        <>
            <button
                className={`custom-button ${variant}`}
            >
                {iconPosition === 'left' && <span className="me-2"><Icon /></span>}
                { text }
                {iconPosition === 'right' && <span className="ms-2"><Icon /></span>}
            </button>
        </>
    );
};

export default CustomButton;