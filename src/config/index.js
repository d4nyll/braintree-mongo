const namespace = 'btm';
const MODE = process.env.MODE || 'test';
const DEFAULT_MONGO_DEV_URL = 'mongodb://localhost:27017/braintree';
const DEFAULT_MONGO_TEST_URL = 'mongodb://localhost:27017/test';
const MONGO_DEV_URL = process.env.MONGO_DEV_URL || DEFAULT_MONGO_DEV_URL;
const MONGO_TEST_URL = process.env.MONGO_TEST_URL || DEFAULT_MONGO_TEST_URL;
const MONGO_URL = MODE === 'test' ? MONGO_TEST_URL : MONGO_DEV_URL;

export {
  namespace,
  MODE,
  MONGO_URL,
}
