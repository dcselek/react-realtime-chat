import React from 'react'
import styles from './styles.module.css'

function ChatItem({ item }) {
    return (
        <div className={styles.chatItem}>
            {item}
        </div>
    )
}

export default ChatItem
