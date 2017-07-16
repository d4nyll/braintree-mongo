# braintree-mongo

Package that provides useful functions for building e-commerce site with Braintree, using MongoDB as its database.

## Requirements

You should have already:

* installed MongoDB on your machine
* created a database (usually at `/data/`)
* started the Mongo daemon

The package requires you to set the following environment variables:

* `MONGO_URL` - URL of your database and collection. E.g. `mongodb://localhost:27017/myproject`

## TODOs

* Use [JSVerify](http://jsverify.github.io/) to generate random values for tests instead of using the [chance.js](https://github.com/chancejs/chancejs) library.
* Convert all uses of promises in tests to async/await. The only reason we are not currently doing that is because we couldn't get the async/await to work in the before/after hooks.
