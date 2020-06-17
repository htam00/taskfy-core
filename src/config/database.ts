import { connect } from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/test';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

export const allow = () => connect(uri, options);