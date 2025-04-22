import styles from "./checkbox.module.css";
const Checkbox = () => {
  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};
export default Checkbox;
