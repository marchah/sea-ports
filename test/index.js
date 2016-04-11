'use strict';

const _ = require('lodash');
const expect = require('chai').expect;
const rewire = require('rewire');

const cbpPorts = rewire('../index.js');

describe('Unit Testing ->', () => {
  describe('JSON ->', () => {
    it('should return an object', () => {
      expect(cbpPorts.JSON).to.be.an('object');
    });
    it('should have unloc as object keys', () => {
      const keys = _.keys(cbpPorts.JSON);
      keys.forEach((key) => {
        expect(cbpPorts.JSON[key]).that.is.an('object').to.have.property('unlocs');
        expect(cbpPorts.JSON[key].unlocs.indexOf(key)).to.not.eql(-1);
      });
    });
  });
});