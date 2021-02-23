const encrypts = ({jwt,dotenv}) => {
    return async function(text){ 
            dotenv.config() 
            const accesstokens = jwt.sign(text,process.env.ACCESS_TOKEN_KEY)  
            return accesstokens 
    }
}

module.exports = encrypts