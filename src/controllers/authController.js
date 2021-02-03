/* eslint-disable class-methods-use-this */
import Encrypt from '../helpers/encrypt';
import { HTTP_CREATED } from '../constants/httpStatusCodes';
import Response from '../helpers/response';
import Service from '../database/services';

const { User } = Service;

/**
 * Contains the authentification routes
 *
 * @class AuthController
 */
class AuthController {
  /**
   * Sign up
   *
   * @author Verdotte Aututu
   * @param {*} req
   * @param {*} res
   * @returns {object} res
   * @memberof AuthController
   */
  async signUp(req, res) {
    const hashPassword = Encrypt.hashPassword(req.body.password);
    const { email } = req.body;

    const user = await User.createUser({
      email,
      password: hashPassword,
    });

    const token = Encrypt.generateToken(user.id);

    return Response.handleSuccess(
      HTTP_CREATED,
      'successful registered',
      { user, token },
      res,
    );
  }
}

export default AuthController;
