/* eslint-disable max-len */
import PasswordUtil from './password';

describe('PasswordUtil', () => {
  const password = 'test123';

  it('should hash a plain text password', async () => {
    const hashedPassword = await PasswordUtil.hashPassword(password);

    expect(hashedPassword).not.toEqual(password);
  });

  it('should return true if supplied password matches stored password', async () => {
    const hashedPassword = await PasswordUtil.hashPassword(password);

    const isPasswordMatch = await PasswordUtil.comparePassword(
      hashedPassword,
      password,
    );

    expect(isPasswordMatch).toBe(true);
  });

  it('should return false if supplied password does not match stored password', async () => {
    const hashedPassword = await PasswordUtil.hashPassword(password);

    const isPasswordMatch = await PasswordUtil.comparePassword(
      hashedPassword,
      'test12',
    );

    expect(isPasswordMatch).toEqual(false);
  });
});
