import db from '../models';
import UserService from './userService';

const User = new UserService(db);

const Service = { User };

export default Service;
