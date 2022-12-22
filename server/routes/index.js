import {validateCreateUser, validateLogin, validateCreateChannel, validateSearchUser, validateGetChannelList, validateAddMessage  } from '../utility/validation.js'
import { createChannel, createUser, getChannelList, loginUser, searchUser, sendMesage } from '../controllers/controller.js';

const applyRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send(`API is running fine`)
    })
    app.post('/user', validateCreateUser ,createUser)

    app.post('/login', validateLogin, loginUser)
    app.post('/channel', validateCreateChannel, createChannel)
    app.get('/search-user', validateSearchUser, getChannelList)
    app.get('/channel-list', validateGetChannelList, searchUser)
    app.post('/message', validateAddMessage, sendMesage)

};
export default applyRoutes;