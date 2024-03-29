import { createLogger, format, transports } from 'winston'

const loggingFormat = format.printf(
	({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`
)

const logger = createLogger({
	format: format.combine(
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		loggingFormat
	),
	transports: [
		new transports.Console(),
		new transports.File({
			filename: 'notice.log',
			level: 'info'
		})
	]
})

export default logger
