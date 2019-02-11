import * as fs from 'fs-extra'

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
  }
}
