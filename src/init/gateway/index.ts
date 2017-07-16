import * as braintree from 'braintree';

export default braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
});
