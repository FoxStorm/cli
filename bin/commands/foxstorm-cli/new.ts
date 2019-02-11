import * as fs from 'fs-extra'
import { exec } from 'child_process'

export const newApp = {
  command: 'new',
  describe: 'Create new FoxStorm Application',
  handler: async (argv: any) => {
    const destinationDirectory = argv._[1] ? `${process.cwd()}/${argv._[1]}` : process.cwd()
    const templatesDir = `${__dirname}/../bin/commands/foxstorm-cli/new/templates/`

    console.log(`Destination Directory: ${destinationDirectory}`)

    await fs.readdir(templatesDir, (_err, files) => {
      files.forEach(file => {
        console.log(`Copying file: ${file}`)
      })
    })

    await fs.copy(templatesDir, destinationDirectory)

    const npmInstall = exec(`cd ${destinationDirectory} && npm install`, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
      }
    })
    npmInstall.stdout.pipe(process.stdout)
  }
}
