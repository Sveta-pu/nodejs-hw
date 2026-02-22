import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true, // Поле є обов'язковим
    trim: true,
  },
  content: {
    type: String, // Обов'язково вказуємо тип
    default: '', // За замовчуванням порожній рядок
    trim: true,
  },
  tag: {
    type: String, // Обов'язково вказуємо тип
    enum: [
      'Work',
      'Personal',
      'Meeting',
      'Shopping',
      'Ideas',
      'Travel',
      'Finance',
      'Health',
      'Important',
      'Todo',
    ],
    default: 'Todo', // За замовчуванням Todo
  },
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

export default Note;
