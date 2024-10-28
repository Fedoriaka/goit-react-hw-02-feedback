import styles from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.header}>{title}</h2>
      {children}
    </div>
  );
};
