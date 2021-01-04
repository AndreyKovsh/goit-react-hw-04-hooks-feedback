import PT from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PT.string.isRequired,
  children: PT.node.isRequired,
};

export default Section;
