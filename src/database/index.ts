import { createConnection } from 'typeorm';

createConnection().then().catch(err => console.log(err));