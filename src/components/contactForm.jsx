import { Formik, Form,Field,ErrorMessage } from "formik"
import { nanoid } from "nanoid";
import * as Yup from "yup";
import styles from './stylesForAllComponents.module.css'
export default function ContactForm({ onAdd }) {
    
    const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(30, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(12, "Too long!").required("Required")
})

    const initialValues = {
        name: "",
        number: ""
    }
    
const handleSubmit = (values, actions) => {
    onAdd({
        name: values.name,
        number: values.number,
        id: nanoid()
    });

    actions.resetForm();
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={styles.wrapper}>
                <label htmlFor="">Name</label>
                <Field type="text" name="name"></Field>
                <ErrorMessage name="name" component="span"></ErrorMessage>
                 <label htmlFor="">Number</label>
                <Field type="text" name="number"></Field>
                <ErrorMessage name="number" component="span"></ErrorMessage>
                <button className={styles.btnAddContact} type="submit">Add contact</button>
            </Form>
        </Formik>
)
}