import Responses from '../helpers/response';
import {
  HTTP_OK,
  HTTP_METHOD_NOT_ALLOWED,
  HTTP_NOT_FOUND,
} from '../constants/httpStatusCodes';
import auth from './auth';

const apiVersion = '/api/v1';
const isProd = process.env.NODE_ENV === 'production';

const router = app => {
  app.use(apiVersion, auth);

  app.get('/', (req, res) =>
    Responses.handleOk(HTTP_OK, 'Welcome to the API', res),
  );

  if (isProd) {
    app.all('/', (req, res) =>
      Responses.handleError(
        HTTP_METHOD_NOT_ALLOWED,
        'Invalid method',
        res,
      ),
    );
    app.use('*', (req, res) =>
      Responses.handleError(HTTP_NOT_FOUND, 'Invalid route', res),
    );
  }
};

export default router;
