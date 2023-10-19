import PropTypes from 'prop-types';
/* 
Button: Button component
props: attributes/values of the button destructured
Button.propTypes: datatypes of the button props
*/
const Button = (props) => {
  const { label, className, disabled, handleClick } = props;

  return (
    <>
      <button className={className} onClick={handleClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
