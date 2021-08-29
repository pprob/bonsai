import {Request, Response} from 'express';
import getCurrentUser from './getCurrentUser';

jest.mock('jsonwebtoken', () => ({
  verify: jest.fn().mockReturnValue({
    id: '123',
    email: 'test@test.com',
  }),
}));

describe('getCurrentUser middleware', () => {
  const next = jest.fn();
  const mockRequest = {
    session: {
      token: '',
    },
  } as unknown as Request;
  const mockResponse = {} as unknown as Response;
  const user = {
    id: '123',
    email: 'test@test.com',
  };

  it('should append authUser to request if valid token & call next', () => {
    getCurrentUser(mockRequest, mockResponse, next);

    expect(next).toHaveBeenCalled();
    expect(mockRequest.authUser).toEqual(user);
  });
});
