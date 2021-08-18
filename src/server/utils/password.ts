import {promisify} from 'util';
import {scrypt, randomBytes} from 'crypto';

const scryptAsync = promisify(scrypt);

class PasswordUtil {
  static async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(32).toString('hex');
    const buffer = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buffer.toString('hex')}.${salt}`;
  }

  static async comparePassword(
    storedPassword: string,
    suppliedPassword: string,
  ): Promise<boolean> {
    const [hashedPassword, salt] = storedPassword.split('.');

    const buffer = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buffer.toString('hex') === hashedPassword;
  }
}

export default PasswordUtil;
