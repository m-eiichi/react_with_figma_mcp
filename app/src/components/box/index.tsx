import React from "react";
import classNames from "classnames";
import styles from "./box.module.css";

type BackgroundColor = "primary" | "secondary" | "tertiary";
type BoxProps = {
  backgroundColor?: BackgroundColor;
  border?: boolean;
  shadow?: boolean;
  hoverShadow?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Box: React.FC<BoxProps> = ({
  backgroundColor = "primary",
  border = false,
  shadow = false,
  hoverShadow = false,
  children,
  className,
}) => {
  const boxClasses = classNames(
    styles.box,
    styles[backgroundColor],
    {
      [styles.border]: border,
      [styles.shadow]: shadow,
      [styles.hoverShadow]: hoverShadow,
    },
    className
  );

  return <div className={boxClasses}>{children}</div>;
};
