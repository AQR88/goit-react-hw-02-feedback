import css from './section.module.css';
const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      {title !== undefined && <h2>{title}</h2>}
      {children !== undefined && children}
    </div>
  );
};
export default Section;
