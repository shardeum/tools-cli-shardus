#!/usr/bin/env node

const prog = require('caporal')
const shardusInit = require('shardus-init')
const shardusNetwork = require('shardus-network')
const shardusDebug = require('shardus-debug')
const packageJson = require('../package.json')

prog
  .bin('shardus')
  .name('Shardus CLI')
  .version(packageJson.version)

for (const command in shardusInit.register) shardusInit.register[command](prog)
for (const command in shardusNetwork.register) shardusNetwork.register[command](prog, 'network')
for (const command in shardusDebug.register) shardusDebug.register[command](prog, 'debug')

prog.parse(process.argv)
