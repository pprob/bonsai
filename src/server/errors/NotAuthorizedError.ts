import {CustomError} from './CustomError';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');
  }

  serializeErrors(): {message: string}[] {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}
