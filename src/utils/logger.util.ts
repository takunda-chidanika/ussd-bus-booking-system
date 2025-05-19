import morgan, { StreamOptions } from 'morgan';
import fs from 'fs';
import path from 'path';
import winston from 'winston';

// Ensure logs directory exists
const logDirectory = path.join(__dirname, '../logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// Configure Winston Logger
export const log = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      info => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.File({ filename: path.join(logDirectory, 'app.log') }),
    new winston.transports.Console()
  ]
});

// Stream for morgan to write to winston
const stream: StreamOptions = {
  write: (message: string) => {
    log.info(message.trim());
  }
};

// Morgan HTTP request logger middleware
const loggerMiddleware = morgan('combined', { stream });

export default loggerMiddleware;
