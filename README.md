# depinj-express-example
An [express](https://github.com/expressjs/express#readme) app example with an integration of [depinj](https://github.com/sj-freitas/depinj#readme).

## Usage

1. Clone this repository.
1. Run `yarn` to install the dependencies.
1. Run `yarn build` to compile the code.
1. Run `yarn start` to spin the server.

## Requests

Do the following curls:
- Increment counter: `curl -I --request POST --url 'http://localhost:3000/counter'`
- Check value of counter: `curl --request GET --url 'http://localhost:3000/counter'`

## Behaviors

If you add query parameters to the request, the request will respond with a 400 and it will log an error.
All requests are logged with a unique-id per request. If the same request has more than one log, the id will be the same.
The ID is generated on demand, so any service that depends on RANDOM_UUID will always have a different one per instance.
The counter is configured as a singleton, as long as the app is alive it will keep its state globally.

Enjoy!
