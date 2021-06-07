import dotenv from 'dotenv'
dotenv.config();

export default {
    PORT : process.env.PORT || 3000,    
    MONGO_URI : process.env.MONGO_URI || 'mongodb://Admin:admin@localhost/reports',
    TOKEN_SECRET : process.env.TOKEN_SECRET || 'grupo4'
}