import styles from './buttons.module.css';
export const FeedbackButtons = ({ onLeaveFeedback }) => {
  return(
      <div className={styles.buttons}>
        <button className={styles.element} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={styles.element} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button className={styles.element} onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
  );
};