'use strict';

const ports = require('./lib/ports.json');

function getByUnloc(unloc) {
  return ports[unloc];
}

module.exports = {
  JSON: ports,
  getByUnloc: getByUnloc,
  getByUNLOC: getByUnloc,
  findByUnloc: getByUnloc,
  findByUNLOC: getByUnloc,
};
