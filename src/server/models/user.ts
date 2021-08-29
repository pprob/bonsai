/* eslint-disable no-invalid-this */
import mongoose from 'mongoose';
import PasswordUtil from '../utils/password';

interface UserProps {
  email: string;
  password: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(props: UserProps): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: {
      transform(doc, ret) {
        (ret.id = ret._id), delete ret._id, delete ret.password;
        delete ret.__v;
      },
    },
  },
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await PasswordUtil.hashPassword(
      this.get('password'),
    );
    this.set('password', hashedPassword);
  }
  next();
});

userSchema.statics.build = (props: UserProps) => {
  return new User(props);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;
