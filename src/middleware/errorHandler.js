// src/middleware/errorHandler.js

import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  console.error('Error middleware:', err);
  if (err instanceof createHttpError.HttpError) {
    return res.status(err.statusCode).json({
      message: err.message || err.name,
    });
  }

  const isProd = process.env.NODE_ENV === 'production';

  return res.status(500).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });
};
