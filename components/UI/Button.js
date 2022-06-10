import classes from "./Button.module.css";

const Button = ({ children, href, btnType }) => {
  let comboClass;

  if (btnType === "primary") {
    comboClass = classes.BtnPrimary;
  }

  if (btnType === "secondary") {
    comboClass = classes.BtnSecondary;
  }

  return <button className={`${classes.Btn} ${comboClass}`}>{children}</button>;
};

export default Button;
