#! /usr/bin/env node

import * as Yargs from 'yargs'
import { newApp } from './foxstorm-cli/new'
import { serve } from './foxstorm-cli/serve'
import { generate } from './foxstorm-cli/generate'

Yargs.demandCommand(1) // tslint:disable-line
  .strict()
  .command(newApp)
  .command(generate)
  .command(serve)
  .argv
