import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = ({ testimonials }) => {
  return (
    <div className="container">
      <AwesomeSlider>
        {testimonials.map((testimonial) => {
          return (
            <div key={testimonial.id}>
              <h2>{testimonial.attributes.title}</h2>
              <p>{testimonial.attributes.description}</p>
              <span>{testimonial.attributes.author}</span>
            </div>
          );
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
