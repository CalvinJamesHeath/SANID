import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  button,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={button}
      href="#Contácto"
      key="hola"
    >
      {children}
    </a>
    // </a>
  );
};
