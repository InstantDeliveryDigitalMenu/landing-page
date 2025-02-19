import React, { ReactNode, useState } from "react";
import Image from "next/image";

import { ChevronIcon } from "@/app/assets";

import styles from "./accordion.module.css";

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
  ...props
}) => {
  const [isActive, setIsActive] = useState(defaultOpen);

  return (
    <div className={styles.container} {...props}>
      <div
        className={styles.titleBox}
        data-state={isActive ? "open" : "closed"}
        onClick={() => setIsActive(!isActive)}
      >
        <i>
          <Image src={ChevronIcon} alt="Arrow to down" />
        </i>
        <h4>{title}</h4>
      </div>
      <div className={styles.content} data-state={isActive ? "open" : "closed"}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
