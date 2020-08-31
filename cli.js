#!/usr/bin/env node

const program = require('commander')
const { version } = require('./package.json')

program.version(version)

require('./commands/create')(program)
require('./commands/upgrade')(program)
require('./commands/populate')(program)
require('./commands/start')(program)
require('./commands/stop')(program)
require('./commands/missing')(program)
require('./commands/service')(program)

program.parse(process.argv)
