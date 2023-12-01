const path = require("path");

const config = {
    views: path.join(__dirname, '../views'),
};

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(config.views, 'home.html'));
        
    },
    register: (req, res)=>{
        res.sendFile(path.join(config.views, 'register.html'))
    },
    login: (req, res)=>{
        res.sendFile(path.join(config.views, 'login.html'))
    }
};
