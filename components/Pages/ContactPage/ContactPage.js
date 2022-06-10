import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/dist/client/router";

const ContactPage = () => {
  const [treatment, setTreatment] = useState(null);
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const contactInputRef = useRef();
  const emailInputRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const treatmentInfo = JSON.parse(localStorage.getItem("Treatment info"));
    setTreatment(treatmentInfo);
  }, []);

  const submitFormHandler = (ev) => {
    ev.preventDefault();

    const contactFormData = {
      name: nameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      contact: contactInputRef.current.value,
      email: emailInputRef.current.value,
      price: treatment.price,
      treatmntName: treatment.treatmentName,
      treatmensNum: treatment.numberOfTreatments,
    };

    console.log(contactFormData);
    router.push("/");
  };

  return (
    <div>
      <h1>{treatment?.treatmentName}</h1>
      <p>
        Price is : <span>{treatment?.price} dinara</span>
      </p>
      <p>
        Number of treatments: <span>{treatment?.numberOfTreatments}</span>
      </p>
      <div>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="">Name</label>
            <input ref={nameInputRef} type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input
              ref={lastNameInputRef}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          <div>
            <label htmlFor="">Contact</label>
            <input
              ref={contactInputRef}
              type="text"
              id="contact"
              name="contact"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input ref={emailInputRef} type="text" id="email" name="email" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
