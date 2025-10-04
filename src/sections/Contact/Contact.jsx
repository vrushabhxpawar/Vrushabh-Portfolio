import styles from "./ContactStyles.module.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("myznpgla");

  if (state.succeeded) {
    return (
      <p className={styles.message}>
        Thank you for reaching out. I'll get back to you soon!
      </p>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form
        action={import.meta.env.ACTION_URL}
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input
          className="hover btn"
          type="submit"
          value="Submit"
          disabled={state.submitting}
        />
      </form>
    </section>
  );
}

export default Contact;
