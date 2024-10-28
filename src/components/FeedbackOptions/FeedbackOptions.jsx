import styles from './Feedbackbuttons.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          key={option}
          className={styles.element}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
