import classes from "./Faq.module.css";

const Faq = ({ question, answer, id, onActive, active }) => {
  const setActiveFaq = (_, id) => {
    onActive(id);
  };

  return (
    <div>
      <div
        onClick={(ev) => setActiveFaq(ev, id)}
        className={classes.FaqQuestion}
      >
        <h4>{question}</h4>
      </div>
      <div
        className={`${classes.FaqPanel} ${active === id ? classes.Active : ""}`}
      >
        <p>
          <span>{answer}</span>
        </p>
      </div>
    </div>
  );
};

export default Faq;
