import { connect } from 'mongoose';

const uri: string = 'mongodb://localhost:27017/test';
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
};

export const allow = () => connect(uri, options).then(() => console.log('MONGODB connected...'))
    .catch((err: any) => {
        console.error(err)
    });