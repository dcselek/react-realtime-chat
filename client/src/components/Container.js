import { useEffect } from 'react'
import { init, subscribeChat, subscribeMessageList } from '../socketApi';
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useChat } from '../context/ChatContext'

function Container() {
    const { setMessages } = useChat();
    useEffect(() => {
        init();

        subscribeMessageList((message) => setMessages(message));
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message }])
        })
    }, []);

    return (
        <div>
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container
