import React from "react";

import styles from "./HHData.module.css";

import cn from "classnames";

import { IHHDataProps } from "./HHData.props";
import { Card, Icon } from "@/ui";

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
        <div className={styles.title}>Начальный</div>
        <div className={styles.salaryValue}>{juniorSalary}</div>
        <div className={styles.rate}>
          <Icon name="iconRateHH" />
        </div>
      </Card>
    </div>
  );
};
