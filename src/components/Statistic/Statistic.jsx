import styles from './statistic.module.css'
export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <ul className={styles.list}>
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total: {total}</li>
        <li> Positive: {positivePercentage}%</li>
      </ul>  );
};