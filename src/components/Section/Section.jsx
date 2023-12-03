import css from './section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      {title !== false && <h2>{title}</h2>}
      {children !== false && children}
    </section>
  );
};

export default Section;
