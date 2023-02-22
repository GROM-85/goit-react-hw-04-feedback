import PropTypes from 'prop-types';
import { SectionCss } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionCss>
      {title && <h2>{title}</h2>}
      {children}
    </SectionCss>
  );
};


Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};