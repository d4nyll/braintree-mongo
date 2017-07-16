# braintree-mongo

This repository is a **work in progress**.

NPM Package that provides an abstraction layer for integrating an e-commerce site with Braintree, using MongoDB as its database.

## Requirements

You should have already:

* Set up MongoDB
  * [Installed MongoDB](https://docs.mongodb.com/manual/installation/) on your machine
  * Created a database (usually at `/data/`)
  * Started the Mongo daemon
* Created a (sandbox) account with Braintree and obtained your [credentials](https://articles.braintreepayments.com/control-panel/important-gateway-credentials)

The package requires you to set the following environment variables:

* `MONGO_URL` - URL of your database and collection. E.g. `mongodb://localhost:27017/myproject`
* `BRAINTREE_MERCHANT_ID` - Braintree Merchant ID. E.g. `nbfthc5k9vjs6djb`
* `BRAINTREE_PUBLIC_KEY` - Braintree Public Key. E.g. `6th2gszftrfx7mg4`
* `BRAINTREE_PRIVATE_KEY` - Braintree Private Key. E.g. `ac54ecc54h3a0a8290adf72cb580bbc6`
* `MODE` - The current environment. Valid values are `test`, `dev`, `staging`, `production`
* `MONGO_DEV_URL` - URL of your development database and collection. E.g. `mongodb://localhost:27017/braintree`
* `MONGO_TEST_URL` - URL of your test database and collection. E.g. `mongodb://localhost:27017/test`

## TODOs

* Use [JSVerify](http://jsverify.github.io/) to generate random values for tests instead of using the [chance.js](https://github.com/chancejs/chancejs) library.
* Convert all uses of promises in tests to async/await. The only reason we are not currently doing that is because we couldn't get the async/await to work in the before/after hooks.
