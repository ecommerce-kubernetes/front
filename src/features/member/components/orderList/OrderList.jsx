import styles from "../../../../pages/mypage/order/OrderList.module.css";
import SearchBar from "../../../../components/common/searchBar/SearchBar";
import arrow from "../../../../assets/images/arrow.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const yearOptions = [2025, 2024, 2023, 2022, 2021, 2020];

const OrderList = () => {
  const [selectState, setSelectState] = useState(false);
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]);

  const handleSelect = (year) => {
    setSelectedYear(year);
    setSelectState(false);
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeadWrapper}>
        <span className={styles.head}>주문목록</span>
        <div className={styles.filterWrapper}>
          <SearchBar placeholder={"주문한 상품을 입력하세요"} />
          <div
            className={styles.selectContainer}
            onClick={() => setSelectState((prev) => !prev)}
          >
            <div className={styles.selectWrapper}>
              <span>{selectedYear}년</span>
              <img className={styles.selectIcon} src={arrow} />
            </div>
            <AnimatePresence>
              {selectState && (
                <motion.div
                  className={styles.selectItemContainer}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className={styles.selectItemWrapper}>
                    {yearOptions.map((year) => (
                      <li
                        key={year}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(year);
                        }}
                      >
                        {year}년
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className={styles.orderListContainer}>
        <div className={styles.orderListWrapper}>
          <div className={styles.orderWrapper}>
            <div className={styles.orderHeadWrapper}>
              <span className={styles.orderDate}>25.05.02</span>
              <Link className={styles.orderDetailLink}>주문 상세</Link>
            </div>
            <div className={styles.orderContentWrapper}>
              <img
                className={styles.itemImg}
                src="http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg"
              />
              <div className={styles.orderDescription}>
                <span className={styles.itemName}>청송사과</span>
                <span className={styles.itemDescription}>청송사과 3EA</span>
                <span className={styles.itemQuantity}>5개</span>
                <span className={styles.itemPrice}>5000원</span>
              </div>
            </div>
            <div className={styles.orderContentWrapper}>
              <img
                className={styles.itemImg}
                src="http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg"
              />
              <div className={styles.orderDescription}>
                <span className={styles.itemName}>청송사과</span>
                <span className={styles.itemDescription}>청송사과 3EA</span>
                <span className={styles.itemQuantity}>5개</span>
                <span className={styles.itemPrice}>5000원</span>
              </div>
            </div>
          </div>

          <div className={styles.orderWrapper}>
            <div className={styles.orderHeadWrapper}>
              <span className={styles.orderDate}>25.05.01</span>
              <Link className={styles.orderDetailLink}>주문 상세</Link>
            </div>
            <div className={styles.orderContentWrapper}>
              <img
                className={styles.itemImg}
                src="https://cwfruit.com:446/data/editor/2112/f53fa845f04aed02cfa72653c55ec452_1640071334_4033.JPG"
              />
              <div className={styles.orderDescription}>
                <span className={styles.itemName}>바나나</span>
                <span className={styles.itemDescription}>바나나 3EA</span>
                <span className={styles.itemQuantity}>5개</span>
                <span className={styles.itemPrice}>5000원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
