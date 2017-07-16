import './init/env';

describe('Initialization', function() {
  require('./init/index.test');
});
describe('CRUD', function() {
  require('./crud/index.test');
});
describe('Customers', function() {
  require('./customers/index.test');
});
describe('Payments', function() {
  require('./payments/index.test');
});
