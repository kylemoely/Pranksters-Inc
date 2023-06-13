# Pranksters-Inc
Web service for pranking your friends


Database

    Pranks - title, price, description, in person or mail-in
    Users - username, password, email
    Order - prankee(location, name, date/time), prank, user

graphQL

    query - readPranks(reads all prank options), readOrders(loads all pranks ordered by user)
    mutations - addUser, deleteUser, updateUser, createOrder, deleteOrder, updateOrder

backend

    express
    apollo/server
    jsonwebtoken(?)
    graphql
    mongoose
    bcrypt

Client

    Login (JWT)
    Apollo/client
    React-router (static ~6.11.1)
    context-api
    tailwindcss
    jwt-decode

  