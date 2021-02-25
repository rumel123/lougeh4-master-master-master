const decrypts = ({jwt,dotenv}) => {
    return  async function(req,res,next){
        try {
            dotenv.config
            jwt.verify(req.token,process.env.ACCESS_TOKEN_KEY,(error,callbackData)=>{
                if(error) {res.status(403)}else{
                    next()
                }
            })
            } catch (error) {
            console.log("Error: ", error.message)
        }
    }
}

module.exports = decrypts