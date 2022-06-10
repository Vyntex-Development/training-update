import Link from "next/link";
import classes from "./CustomLink.module.css";

const CustomLink = ({ children, href, type }) => {
  let className;

  if (type === "primary") {
    className = classes.Primary;
  }

  if (type === "hero-link") {
    className = classes.HeroLink;
  }

  if (type === "red") {
    className = classes.Red;
  }

  return (
    <div className={`${classes.LinkWrapper} ${className}`}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default CustomLink;
