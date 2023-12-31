import axios from 'axios'

const API_URL = "https://twitt-anu4.onrender.com"

export const getConversations = async (userId) => {
    const res = await axios.get(`${API_URL}/conversations/${userId}`)

    return res.data
}

export const getMessages = async (chatId) => {
    const res = await axios.get(`${API_URL}/messages/${chatId}`)

    return res.data
}

export const postMessage = async (message) => {
    const res = await axios.post("https://twitt-anu4.onrender.com/messages", message)

    return res.data
}