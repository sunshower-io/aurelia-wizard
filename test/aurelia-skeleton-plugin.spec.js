import {configure} from '../src/index';
//import {Container} from 'aurelia-dependency-injection';

describe('aurelia-skeleton-plugin', function() {
  describe('configure()', function() {
    it('Should call configure with a function', function() {
      configure(()=>{
        expect(true).toBe(true);
      });
    });
  });
});
