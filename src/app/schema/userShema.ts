import { Schema, Document, model } from 'mongoose'
import { IUserEntity } from '../../core/entity/user'
import validator from 'validator'

interface IUser extends Document {
  id: string
  name: string
  email: string
  photo: string
  role: string
  password: string
  passwordConfirm: string
  active: boolean
}

const userSchema = new Schema<IUserEntity>(
  {
    name: { type: String, required: [true, 'Please tell us your name!'] },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: {
      type: String,
      default: 'default.jpg'
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'dev'],
      default: 'user'
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      minlength: 8,
      select: false
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  },
  { timestamps: true }
)

userSchema.pre<IUser>('save', function (this: IUser, next) {
  if (this.isModified('password')) {
    if (this.password !== this.passwordConfirm) {
      return next(new Error('Password and password confirmation do not match.'))
    }
  }
  next()
})

const User = model<IUserEntity>('user', userSchema)

export default User
