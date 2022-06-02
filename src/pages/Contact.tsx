import { send } from "emailjs-com";
import { useState } from "react";
import { Button } from "../ui/Button";
import { InputContact, TextAreaContact } from "../ui/form/Contact";
import { Form } from "../ui/form/Form";
import { FormLayout } from "../ui/layouts/FormLayout";
import { setErrorToast, setSuccessToast } from "../utils/toasts";
import { FooterGap } from "../ui/Spot";

const SERVICE_ID = "service_d9ceky2";
const TEMPLATE_ID = "template_fln43aq";
const USER_ID = "uF9gIbijQQUVE3Ycl";

const Contact = () => {
  const [toSend, setToSend] = useState({
    email: "",
    name: "",
    message: "",
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessToast("Your message has been sent, THANKS!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setErrorToast("Error sending message");
      });
    e.target.reset();
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormLayout>
        <div className="contacttext">
          <h3>
            If you want to flatter us, or have a suggestion, or want to pay for
            our servers or whatever, we will be happy to help you
          </h3>
        </div>
        <Form onSubmit={onSubmit}>
          <InputContact
            type="email"
            name="email"
            placeholder="Your email"
            value={toSend.email}
            onChange={handleChange}
          />

          <InputContact
            type="text"
            name="name"
            placeholder="Your name"
            value={toSend.name}
            onChange={handleChange}
          />
          <TextAreaContact
            rows={10}
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <Button variant="white" type="submit">
            Submit
          </Button>
        </Form>
      </FormLayout>
      <FooterGap></FooterGap>
    </>
  );
};

export default Contact;
