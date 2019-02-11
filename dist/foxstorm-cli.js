#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Yargs = require("yargs");
const new_1 = require("./foxstorm-cli/new");
const serve_1 = require("./foxstorm-cli/serve");
const generate_1 = require("./foxstorm-cli/generate");
Yargs.demandCommand(1) // tslint:disable-line
    .strict()
    .command(new_1.newApp)
    .command(generate_1.generate)
    .command(serve_1.serve)
    .argv;
//# sourceMappingURL=foxstorm-cli.js.map