import {promisify} from 'util';
import {scrypt, randomBytes, timingSafeEqual} from 'crypto';

const scryptAsync = promisify(scrypt);

class PasswordUtil {
  static async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(32).toString('hex');
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${derivedKey.toString('hex')}:${salt}`;
  }

  static async comparePassword(
    storedPassword: string,
    suppliedPassword: string,
  ): Promise<boolean> {
    const [hashedPassword, salt] = storedPassword.split(':');

    const keyBuffer = Buffer.from(hashedPassword, 'hex');
    const derivedKey = (await scryptAsync(
      suppliedPassword,
      salt,
      64,
    )) as Buffer;

    return timingSafeEqual(derivedKey, keyBuffer);
  }
}

export default PasswordUtil;
