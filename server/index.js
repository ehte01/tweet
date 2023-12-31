import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import config from './config/index.js'
import http from 'http'
import chat from './chat/chat.js'
import userRouter from './routes/user-routes.js'
import authRouter from './routes/auth-routes.js'
import tweetRouter from './routes/tweet-routes.js'
import conversationRouter from './routes/conversation-routes.js'
import messageRouter from './routes/message-routes.js'
const port = 8000;

dotenv.config()

const app = express()

const server = http.createServer(app)

const io = chat.getIo(server)

app.use(cors({ origin: "*" }))
config.connectToDatabase()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/tweets', tweetRouter)
app.use('/conversations', conversationRouter)
app.use('/messages', messageRouter)

server.listen(port, () => console.log(`server is running on port ${port}`));