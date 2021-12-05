# Complete Back-end
This version of the back-end reads from and writes to the database. It also serves the front-end as a static site. See [RUN_ON_EC2](../RUN_ON_EC2.md) for information about how to run this repo on the EC2 server.

## Practice
1. Serve the front-end using Express static server middleware.
2. Create a splat `*` route other routes to the static server and prepend `api` to other endpoints to avoid naming colisions.
3. Connect to the local database and create a "questionModel" to read from and write to the database.
4. Use Postman to test the endpoints.
5. Next, go to the [front-end](../front-end/README.md) folder and connect our updated API.
