# Getting Started

## Configuring .env.local
Use .env.example as an example of what env variables are needed to run the app.

## Running the app
npm start

## Features
- **Logging:** Utilizes Morgan for HTTP request logging.
- **Rate Limiting:** Protects against brute-force attacks and ensures fair usage by limiting request rates.
- **Swagger Documentation:** API documentation and testing interface generated by Swagger.
- **Connection Pooling:** Improves database efficiency and scalability. By utilizing a pool of reusable connections, the API reduces the overhead associated with establishing a new database connections for each request. This allows us to handle a higher volume of concurrent database requests and minimize latency in database queries. 


TODO testing?

# Viewing documentation
You are able to view api documentation at [api-docs](http://localhost:8000/api-docs)