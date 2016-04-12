'use strict';

const _ = require('lodash');
const expect = require('chai').expect;
const rewire = require('rewire');

const cbpPorts = rewire('../index.js');

const USLAX = cbpPorts.JSON.USLAX;

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
  describe('Methods ->', () => {
    describe('UNLOC #', () => {
      describe('getByUnloc()', () => {
        it('should be a function', () => {
          expect(cbpPorts.getByUnloc).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.getByUnloc('USLAX')).that.is.an('object').to.eql(USLAX);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.getByUnloc('YUYUYU')).to.eql(undefined);
        });
      });
      describe('getByUNLOC()', () => {
        it('should be a function', () => {
          expect(cbpPorts.getByUNLOC).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.getByUNLOC('USLAX')).that.is.an('object').to.eql(USLAX);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.getByUNLOC('YUYUYU')).to.eql(undefined);
        });
      });
      describe('findByUnloc()', () => {
        it('should be a function', () => {
          expect(cbpPorts.findByUnloc).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.findByUnloc('USLAX')).that.is.an('object').to.eql(USLAX);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.findByUnloc('YUYUYU')).to.eql(undefined);
        });
      });
      describe('findByUNLOC()', () => {
        it('should be a function', () => {
          expect(cbpPorts.findByUNLOC).to.be.a('function');
        });
        it('should return object when find it', () => {
          expect(cbpPorts.findByUNLOC('USLAX')).that.is.an('object').to.eql(USLAX);
        });
        it('should return undefined when can\'t find it', () => {
          expect(cbpPorts.findByUNLOC('YUYUYU')).to.eql(undefined);
        });
      });
    });
  });
});