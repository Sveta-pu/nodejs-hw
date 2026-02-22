export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};

// notFoundHandler.js —
// обробка всіх запитів на неіснуючі маршрути (повертає статус 404 та наступний об’єкт:
