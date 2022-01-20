import React from 'react'
import { useFormik } from 'formik'
import styles from './styles.module.css'
import { sendMessages } from '../socketApi'

function ChatForm() {

    const { values, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            console.log(values.message)
            sendMessages(values.message)
            resetForm(values.message = "")
        },
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className={styles.textInput} name="message" value={values.message} onChange={handleChange} />
            </form>
        </div>
    )
}

export default ChatForm
