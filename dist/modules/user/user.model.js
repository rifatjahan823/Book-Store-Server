'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.User = void 0
const mongoose_1 = require('mongoose')
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.Schema(
  {
    name: {
      type: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    needsPasswordChange: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)
// 3. Create a Model.
exports.User = (0, mongoose_1.model)('User', userSchema)
