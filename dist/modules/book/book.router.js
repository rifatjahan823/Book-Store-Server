'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.bookRouter = void 0
const express_1 = __importDefault(require('express'))
const book_controller_1 = require('./book.controller')
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest'),
)
const book_validation_1 = require('./book.validation')
const router = express_1.default.Router()
router.post(
  '/create-book',
  (0, validateRequest_1.default)(book_validation_1.createBookZodSchema),
  book_controller_1.bookController.createBook,
)
router.patch(
  '/:id',
  (0, validateRequest_1.default)(book_validation_1.updateBookZodSchema),
  book_controller_1.bookController.updateBook,
)
router.get('/', book_controller_1.bookController.getAllBooks)
router.get('/:id', book_controller_1.bookController.getSingleBook)
router.delete('/:id', book_controller_1.bookController.getSingleBook)
exports.bookRouter = {
  router,
}
