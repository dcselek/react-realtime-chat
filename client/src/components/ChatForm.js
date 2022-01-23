import React from 'react'
import { useFormik } from 'formik'
import styles from './styles.module.css'
import { sendMessages } from '../socketApi'
import { useChat } from '../context/ChatContext'

function ChatForm() {
    const { setMessages } = useChat()
    const { values, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            if (values.message !== "") {
                sendMessages(values.message)
                setMessages((prevState) => [...prevState, { message: values.message, fromMe: true }])
                resetForm(values.message = "")
            }else{
                alert("boş mesaj gönderilemez!")
            }
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
