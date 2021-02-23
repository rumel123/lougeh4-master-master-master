 
const connection = ({pg,dotenv}) => {
    return async function conn(){


        dotenv.config()
        const { Pool } = pg
        let config = null
        const env = process.env.NODE_ENV
        //check the environment to choose
        if(env == "development" || env == "production")
        {
            config = {
                user:process.env.PGUSER,
                password:process.env.PGPASSWORD,
                database:process.env.PGDATABASE,
                port:process.env.PGPORT,
                host:process.env.PGHOST
            }
        }
    //other choose if another db to use
        if(env == "test" )
        {
            config = {
                user:process.env.PGUSER,
                password:process.env.PGPASSWORD,
                database:process.env.PGDATABASE,
                port:process.env.PGPORT,
                host:process.env.PGHOST
            }
        }
        pool = new Pool({config})
        return pool
    }
}

module.exports = connection