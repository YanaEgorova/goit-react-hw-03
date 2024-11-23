import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const initialValues = { name: "", number: "" };
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name is too short!")
    .max(50, "The name is too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "The name is too short!")
    .max(50, "The name is too long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const id = useId();
  const idx = nanoid();

  const onSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: idx,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={css.form}>
        <div className={css.block}>
          <label htmlFor={`name-${id}`}>Name</label>
          <Field
            className={css.input}
            type="text"
            id={`name-${id}`}
            name="name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.block}>
          <label htmlFor={`number-${id}`}>Number</label>
          <Field
            className={css.input}
            type="number"
            name="number"
            id={`number-${id}`}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
