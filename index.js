const shardusNetwork = require('@shardus/network-tool')
const shardusDebug = require('@shardus/debug-tool')

module.exports = {
  register: {
    network: shardusNetwork.register,
    debug: shardusDebug.register
  },
  lib: {
    network: shardusNetwork.lib,
    debug: shardusDebug.lib
  }
}
