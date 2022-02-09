import PropTypes from 'prop-types';

const feedBackOptions = props => {
  const options = props.options;
  const onLeaveFeedback = props.onLeaveFeedback;

  return options.map(button => {
    return (
      <button
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        data-action={button}
      >
        {button}
      </button>
    );
  });
};

feedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default feedBackOptions;
