import styles from './Statistic.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.list}>
      <li>Good {good}</li>
      <li>Neutral {neutral}</li>
      <li>Bad {bad}</li>
      <li>Total: {total}</li>
      <li> Positive: {positivePercentage}%</li>
    </ul>
  );
};
