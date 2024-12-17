## Tasks Completed

### Task 1
Implement a background job that will fetch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum and store it in a database. This job should run once every 2 hours.

#### Approach:
Used node-cron libraray to setup the Cron Jobs and wrote the "fetchCryptoData" function that fetches the required data from CoinGecko's API. Stored it in MongoDB Database.

### Task 2
Implement an API "/stats", that will return the latest data about the requested cryptocurrency.

#### Approach:
Created a route with all the error and edge case handling to retrieve the latest fetched data from our MongoDB Server.

Working Routes:

https://fetch-crypto.fly.dev/stats?coin=matic

https://fetch-crypto.fly.dev/stats?coin=bitcoin

https://fetch-crypto.fly.dev/stats?coin=ethereum

### Task 3
Implement an API "/deviation", that will return the standard deviation of the price of the requested cryptocurrency for the last 100 records stored by the background service in the database.

#### Approach:
Created a route with all the error and edge case handling to retrieve the latest fetched data from our MongoDB Server and applied the standard deviation formula on that.

Working Routes:

https://fetch-crypto.fly.dev/deviation?coin=matic

https://fetch-crypto.fly.dev/deviation?coin=bitcoin

https://fetch-crypto.fly.dev/deviation?coin=ethereum

## Optional Tasks

### Optional Task 1
Deploy your database using MongoDB Atlas or other similar tools.

#### Approach:
Used the MongoDB Atlas to remotely host our Database.

### Optional Task 2
Deploy your backend using platforms like Heroku or any cloud platform like AWS, GCP or Azure and expose the API to the public.

#### Approach:
Deployed on Fly IO for seamlessly running our backend server.

Test Link: https://fetch-crypto.fly.dev/ping

## Note Points

### Point 1
Think of this assignment as a production grade project. Using best practices, writing clean code etc. will fetch you additional points.
#### Approach:
Used a clean code approach that follows modularity. Used Controllers that are used for validations in the API's. 

Wrote Services that handles the functionality requested by the particular controller.

Used Repository Section which is responsdible for interacting with the database.

Took the help of "Prettier" npm library to keep the consistency in the syntax of the code.

Followed a well-structured production ready way to approach the code.

### Point 2
Do think well about how you want to design your database schemas.
#### Approach:
Designed a clean and concise schema that helps retrieves and stores the data in the DB Optimally.

### Point 3
We care about the usage of version control and the way you structure(and name) your commits!
#### Approach:
Used Git and Github for version control. Committed the changes with the understandable names.

## Project setup

### Step 1
Clone this Repository

### Step 2
Create a .env file and write all the fields present in .env.sample file

### Step 3
npm install 

### Step 4
npm run dev
