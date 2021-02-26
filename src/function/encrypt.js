const encrypts = ({jwt,dotenv}) => {
    return function(text){ 
            dotenv.config()
            const tokens = { text}
            const accesstokens = jwt.sign(tokens,process.env.ACCESS_TOKEN_KEY,{expiresIn:'60m'})
            return accesstokens
           
    }
}

module.exports = encrypts