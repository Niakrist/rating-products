import React from "react";

import styles from "./HHData.module.css";

import cn from "classnames";

import { IHHDataProps } from "./HHData.props";
import { Card, Icon } from "@/ui";
import { priceRub } from "@/helpers/helpers";

export const HHData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: IHHDataProps): React.JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card color="white" className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <Card color="white" className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRub(juniorSalary)}</div>
          <div className={styles.rate}>
            <Icon name="iconRateHH" className={styles.iconRateHHActiv} />
            <Icon name="iconRateHH" className={styles.iconRateHH} />
            <Icon name="iconRateHH" className={styles.iconRateHH} />
          </div>
        </div>

        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRub(middleSalary)}</div>
          <div className={styles.rate}>
            <Icon name="iconRateHH" className={styles.iconRateHHActiv} />
            <Icon name="iconRateHH" className={styles.iconRateHHActiv} />
            <Icon name="iconRateHH" className={styles.iconRateHH} />
          </div>
        </div>

        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRub(seniorSalary)}</div>
          <div className={styles.rate}>
            <Icon name="iconRateHH" className={styles.iconRateHHActiv} />
            <Icon name="iconRateHH" className={styles.iconRateHHActiv} />
            <Icon name="iconRateHH" className={styles.iconRateHHActiv} />
          </div>
        </div>
      </Card>
    </div>
  );
};
