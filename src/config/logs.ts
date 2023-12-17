import fs from 'fs'
import winston from 'winston'
import moment from 'moment'

const logDirectory = './src/app/logs/'
const errorLogDirectory = `${logDirectory}errors/`
const successLogDirectory = `${logDirectory}successes/`

function checkOrCreateDirectory(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }
}

function checkOrCreateFile(directory: string) {
  if (!fs.existsSync(directory)) {
    fs.writeFileSync(directory, moment().format('YYYY-MM-DD') + '\n')
  }
}

function createDailyArchive(type: string) {
  const currentDate = moment().format('YYYY-MM-DD')
  const directory = type === 'error' ? errorLogDirectory : successLogDirectory
  const nameFile = `${directory}log_${currentDate}.log`

  checkOrCreateDirectory(directory)
  checkOrCreateFile(nameFile)
}

const getFile = (type: string) => {
  const currentDate = moment().format('YYYY-MM-DD')
  const directory = type === 'error' ? errorLogDirectory : successLogDirectory
  return `${directory}log_${currentDate}.log`
}

function removeOldFiles(type: string) {
  const directory = type === 'error' ? errorLogDirectory : successLogDirectory
  fs.readdir(directory, (err, files) => {
    if (err) throw err

    files.forEach((file) => {
      const fileDate = moment(file.split('_')[1].split('.')[0], 'YYYY-MM-DD')
      const diffDays = Math.abs(moment().diff(fileDate, 'days'))

      if (diffDays > 7) {
        fs.unlink(`${directory}${file}`, (err) => {
          if (err) throw err
          console.log(`File ${file} successfully removed`)
        })
      }
    })
  })
}

const successLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: getFile('success'), level: 'info' })
  ]
})

const errorLogger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: getFile('error'), level: 'error' })
  ]
})

const initFileLogs = () => {
  createDailyArchive('success')
  createDailyArchive('error')
  removeOldFiles('success')
  removeOldFiles('error')
}

export { initFileLogs, successLogger, errorLogger }
