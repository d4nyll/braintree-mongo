const namespace = 'btm';
const DEFAULT_MONGO_URL = 'mongodb://localhost:27017/test';
const MONGO_URL = process.env.MONGO_URL || DEFAULT_MONGO_URL;
export {
  namespace,
  DEFAULT_MONGO_URL,
  MONGO_URL,
}
