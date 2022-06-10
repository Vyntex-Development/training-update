import { useState } from "react";
import { useRouter } from "next/router";
import Faq from "../../Layout/Faq";

const treatments = [
  {
    id: 1,
    treatmentName: "Acupuncture",
    prices: [
      { price: 1000, for: "Single treatment" },
      { price: 55000, for: "5 treatment" },
      { price: 90000, for: "10 treatment" },
      { price: 150000, for: "20 treatment" },
    ],
  },
  {
    id: 2,
    treatmentName: "Cupping",
    prices: [
      { price: 14000, for: "Single treatment" },
      { price: 51000, for: "5 treatment" },
      { price: 97000, for: "10 treatment" },
      { price: 157000, for: "20 treatment" },
    ],
  },
  {
    id: 3,
    treatmentName: "Skin Treatment",
    prices: [
      { price: 12000, for: "Single treatment" },
      { price: 52000, for: "5 treatment" },
      { price: 86000, for: "10 treatment" },
      { price: 157000, for: "20 treatment" },
    ],
  },
  {
    id: 4,
    treatmentName: "Massage",
    prices: [
      { price: 1000, for: "Single treatment" },
      { price: 65000, for: "5 treatment" },
      { price: 95000, for: "10 treatment" },
      { price: 152000, for: "20 treatment" },
    ],
  },
];

const PricingPage = ({ faqs }) => {
  const [treatment, setTreatment] = useState(treatments[0]);
  const [checked, setChecked] = useState(0);
  const [treatmentPrice, setTreatmentPrice] = useState(null);
  const [active, setActive] = useState(null);
  const router = useRouter();

  const radioChangeHandler = (ev, index) => {
    const targetedTreatment = treatments.find(
      (treatment) => treatment.treatmentName === ev.target.id
    );
    setTreatment(targetedTreatment);
    setChecked(index);
  };

  const inputSingleTreatmetHandler = (_, price) => {
    setTreatmentPrice(price);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    localStorage.setItem(
      "Treatment info",
      JSON.stringify({
        price: treatmentPrice.price,
        numberOfTreatments: treatmentPrice.for,
        treatmentName: treatment.treatmentName,
      })
    );
    router.push("/contact");
  };

  return (
    <div style={{ paddingLeft: "13vw" }}>
      <form onSubmit={submitHandler}>
        <div>
          <h1>Pricing & Packages</h1>
          <p>
            Acupuncture can inhibit the accumulation of toxic proteins in
            neurological diseases, modulate energy supply based on glucose
            metabolism.
          </p>
          <div>
            <span>SELECT A TREATMENT:</span>
            {treatments.map((treatment, index) => {
              return (
                <div key={treatment.id}>
                  <label htmlFor={treatment.treatmentName}>
                    {treatment.treatmentName}
                  </label>
                  <input
                    checked={index === checked ? true : ""}
                    type="radio"
                    id={treatment.treatmentName}
                    name="radio"
                    onChange={(ev) => radioChangeHandler(ev, index)}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <h3>{treatment.treatmentName}</h3>
            <p>{treatment.treatmentName} can inhibit the accumulation.</p>
            {treatment.prices.map((price, index) => {
              return (
                <div key={index}>
                  <div>
                    <input
                      type="radio"
                      name="treatments"
                      id={price.for}
                      onChange={(ev) => inputSingleTreatmetHandler(ev, price)}
                    />
                    <span style={{ margin: "0 8px" }}>{price.for}</span>
                    <span>{price.price}</span>
                  </div>
                </div>
              );
            })}
            <button style={{ marginTop: "16px" }}>Book consultation</button>
          </div>
        </div>
        <div></div>
      </form>

      <div style={{ marginTop: "64px" }}>
        <h2>FAQs</h2>
        <div>
          {faqs.map(({ attributes }, faq) => {
            return (
              <Faq
                key={faq}
                id={faq}
                question={attributes.faqQuestion}
                answer={attributes.faqAnswer}
                onActive={(id) => setActive(id)}
                active={active}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
