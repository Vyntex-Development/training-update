import CustomLink from "../UI/CustomLink";
import classes from "./Hero.module.css";

const Hero = ({ heroData }) => {
  // DOBAR PRIMER ZA DYNAMIC COMPONENT
  console.log(heroData);
  const { heroTitle, heroDescription, buttonText, buttonLink } =
    heroData.attributes.Hero[0];
  return (
    <div className={`${classes.Hero} container`}>
      <div>
        <h1>{heroTitle}</h1>
        <p className={`large-p ${classes.Paragraph}`}>{heroDescription}</p>
        <CustomLink type="primary" href={buttonLink}>
          {buttonText}
        </CustomLink>
        <div className={classes.Treatments}>
          <p className="large-p">Popular Treatments</p>
          <div>
            <CustomLink type="hero-link" href="/">
              Cupping,
            </CustomLink>
            <CustomLink type="hero-link" href="/">
              Acupuncture,
            </CustomLink>
            <CustomLink type="hero-link" href="/">
              Mpxibustion
            </CustomLink>
          </div>
        </div>
      </div>
      <div>
        <div>Image</div>
        <div>Image</div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default Hero;
