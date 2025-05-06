import styles from "../../../../pages/mypage/order/list/OrderList.module.css";
import SearchBar from "../../../../components/common/searchBar/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import OrderContent from "../OrderContent";
import SelectBox from "../../../../components/common/selectBox/SelectBox";

const yearOptions = [2025, 2024, 2023, 2022, 2021, 2020];

const OrderList = () => {
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]);

  const item1 = {
    id: 1,
    name: "청송사과",
    description: "청송사과 3EA",
    quantity: 3,
    price: 5000,
    imgUrl:
      "http://static.megamart.com/product/editor/8809/8809280//13141009_009.jpg",
  };

  const item2 = {
    id: 2,
    name: "바나나",
    description: "바나나 3EA",
    quantity: 5,
    price: 5000,
    imgUrl:
      "https://cwfruit.com:446/data/editor/2112/f53fa845f04aed02cfa72653c55ec452_1640071334_4033.JPG",
  };
  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeadWrapper}>
        <span className={styles.head}>주문목록</span>
        <div className={styles.filterWrapper}>
          <SearchBar placeholder={"주문한 상품을 입력하세요"} />
          <SelectBox
            options={yearOptions}
            selected={selectedYear}
            onSelect={(year) => setSelectedYear(year)}
            renderLabel={(year) => `${year}년`}
          />
        </div>
      </div>
      <div className={styles.orderListContainer}>
        <div className={styles.orderListWrapper}>
          {/** 주문 iterator */}
          <div className={styles.orderWrapper}>
            <div className={styles.orderHeadWrapper}>
              <span className={styles.orderDate}>25.05.02</span>
              <Link
                to={`/my/orders/${1}/detail`}
                className={styles.orderDetailLink}
              >
                주문 상세
              </Link>
            </div>
            <OrderContent product={item1} />
            <OrderContent product={item2} />
          </div>

          <div className={styles.orderWrapper}>
            <div className={styles.orderHeadWrapper}>
              <span className={styles.orderDate}>25.05.01</span>
              <Link className={styles.orderDetailLink}>주문 상세</Link>
            </div>
            <OrderContent product={item2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
