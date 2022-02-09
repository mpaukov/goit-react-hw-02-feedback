import PropTypes from 'prop-types';

const Section = props => {
  const title = props.title;
  return (
    <section>
      {title && <h2>{title}</h2>}
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
