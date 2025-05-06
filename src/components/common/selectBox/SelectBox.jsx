import { useEffect, useState } from "react";
import styles from "./SelectBox.module.css";
import arrow from "../../../assets/images/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
const SelectBox = ({ options, selected, onSelect, renderLabel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (!e.target.closest(`.${styles.container}`)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className={styles.container}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={styles.selector}>
        <span>{renderLabel ? renderLabel(selected) : selected}</span>
        <img className={styles.icon} src={arrow} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.optionsWrapper}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.optionsList}>
              {options.map((opt) => (
                <li
                  key={opt}
                  className={styles.optionItem}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(opt);
                    setIsOpen(false);
                  }}
                >
                  {renderLabel ? renderLabel(opt) : opt}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectBox;
