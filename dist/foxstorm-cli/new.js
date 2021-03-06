"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const child_process_1 = require("child_process");
exports.newApp = {
    command: 'new',
    describe: 'Create new FoxStorm Application',
    handler: (argv) => __awaiter(this, void 0, void 0, function* () {
        const destinationDirectory = argv._[1] ? `${process.cwd()}/${argv._[1]}` : process.cwd();
        const templatesDir = `${__dirname}/../bin/commands/foxstorm-cli/new/templates/`;
        console.log(`Destination Directory: ${destinationDirectory}`);
        yield fs.readdir(templatesDir, (_err, files) => {
            files.forEach(file => {
                console.log(`Copying file: ${file}`);
            });
        });
        yield fs.copy(templatesDir, destinationDirectory);
        const npmInstall = child_process_1.exec(`cd ${destinationDirectory} && npm install`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
            }
        });
        npmInstall.stdout.pipe(process.stdout);
    })
};
//# sourceMappingURL=new.js.map