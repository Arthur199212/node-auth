import { Schema, model, Document } from 'mongoose'

interface UserDocument extends Document {
  email: string
  name: string
  password: string
}

const userSchema = new Schema({
  email: String,
  name: String,
  password: String
}, {
  timestamps: true
})

export const User = model<UserDocument>('User', userSchema)
