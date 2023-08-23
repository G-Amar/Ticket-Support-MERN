# Ticket-Support-MERN
This is a fullstack project I made to gain a better understanding of the MERN (Mongo-Express-React-Node) stack.

This is a ticket support application with functionality to create/update/close tickets as well as create textual notes for each ticket.

Authentication is performed by hashing passwords with bcryptjs. Authentication of users affects which tickets they are authorized to view. There is also functionality to register new users.

## Run this project locally
- Clone the repository and run `npm install` in the root directory as well as in the `frontend` directory to install the necessary node_modules.
- create a `.env` file in the root directory with `NODE_ENV` (development/production), `PORT`, `JWT_SECRET` (any value), and `MONGO_URI` (URI for cloud mongo deployment (I used Atlas))
- run `npm run dev` to start the application
