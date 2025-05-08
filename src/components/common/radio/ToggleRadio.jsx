import styles from "./ToggleRadio.module.css";
const ToggleRadio = ({ name, value, checked, onClick, children }) => {
  return (
    <label className={styles.wrapper}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onClick={() => onClick(value)}
        onChange={() => {}}
      />
      <span className={styles.inner}>{children}</span>
    </label>
  );
};

export default ToggleRadio;
