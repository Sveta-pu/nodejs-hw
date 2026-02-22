import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

//create rourer
const router = Router();

//get all notes
router.get('/', getAllNotes);

//get one note dy id
router.get('/:noteId', getNoteById);

//creare note
router.post('/', createNote);

//delete note by id
router.delete('/:noteId', deleteNote);

// apdate note by id
router.patch('/:noteId', updateNote);

//export router
export default router;
