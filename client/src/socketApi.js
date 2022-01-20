import io from 'socket.io-client'

let socket;

export const init = () => {
	console.log("Bağlanılıyor...")

	socket = io("http://localhost:3000", {
		transports: ["websocket"]
	})

	socket.on("connect", () => console.log("Bağlandı..."))
}

export const sendMessages = (message) => {
	if (socket) socket.emit("new-message", message)
}