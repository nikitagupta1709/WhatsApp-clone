import * as Controller from '../controllers';
import * as Validation from '../utility/validation'

const applyRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send(`API is running fine`)
    })
    app.post('/user', Validation.validateCreateUser ,Controller.createUser)

    app.post('/login', Validation.validateLogin, Controller.loginUser)
    app.post('/channel', Validation.validateCreateChannel, Controller.createChannel)
    app.get('/search-user', Validation.validateSearchUser, Controller.getChannelList)
    app.get('/channel-list', Validation.validateGetChannelList, Controller.searchUser)
    app.post('/message', Validation.validateAddMessage, Controller.sendMesage)

};
export default applyRoutes;