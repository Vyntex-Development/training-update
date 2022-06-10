import classes from "./CardsSection.module.css";
import Card from "../UI/Card";

const CardsSetion = ({ services }) => {
  return (
    <div className={`container ${classes.CardsSection}`}>
      <h2>Popular Treatments</h2>
      <p className="large-p">
        Nulla tempus ipsum sed vehicula feugiat. Nunc pretium metus ac porta
        pulvinar.
      </p>
      {/* DINAMICKI PRISTUP */}
      <div className={classes.CardsWrapper}>
        {services.map((service) => {
          return (
            <Card
              // service={service} -- AKO PROSLEDJUJEMO CITAV OBJEKAT
              key={service.id}
              // KEY SE KORISTI KADA IMAMO NIZ
              id={service.id}
              title={service.attributes.serviceTitle}
              description={service.attributes.serviceDescription}
              image={service.attributes.serviceImage.data.attributes.url}
            />
          );
        })}
      </div>
      {/* STATICKI PRISTUP */}
      {/* <div>
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
};

export default CardsSetion;
