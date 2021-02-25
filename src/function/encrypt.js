const encrypts = ({jwt,dotenv}) => {
    return function(text){ 
            dotenv.config()
            const tokens = { text}
            const accesstokens = jwt.sign(tokens,process.env.ACCESS_TOKEN_KEY)
            return accesstokens
           
    }
}

module.exports = encrypts