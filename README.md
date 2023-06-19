# Pranksters-Inc
Web service for pranking your friends


## Database

   - Pranks - title, price, description, in person or mail-in
   - Users - username, password, email
   - Order - prankee(location, name, date/time), prank, user

## GraphQL

   - query - readPranks(reads all prank options), readOrders(loads all pranks ordered by user)
   - mutations - addUser, deleteUser, updateUser, createOrder, deleteOrder, updateOrder

## Backend

   - express
   - apollo/server
   - jsonwebtoken(?)
   - graphql
   - mongoose
   - bcrypt

## Client

   - Login (JWT)
   - Apollo/client
   - React-router (static ~6.11.1)
   - context-api
   - tailwindcss
   - jwt-decode

    test

## Description
PRANKSTERS-INC is a website that allows users to browse and order pranks!
## Usage
When you first land on the webpage, you will be greeted by a homepage with options to login or sign-up. Once you've loged in or signed up you will be directed to page with all the avalible pranks. Pick a prank and order!

## Task Breakdown
### Will Putnam
- homepage
- header
- footer
### Jennifer Jimenez
- prankgrid
- orderform
### Kyle Moellenkamp
- mutations
- schemas
- deploy to heroku
### Jack Burke
- login
- signup
- orderlist
### Branham Morris
- made readMe
- queries
- stripe 
- schemas

## Pros & Cons
### Pros:

working with others to implement code gave us a good idea as to what a developer project would look like
The group worked well together. Tasks were broken up evenly and everyone communicated well when it came to pulling and overcoming blockers
We were able to work together on specific tasks that were causing blockers and come up with a solution we all agreed on
### Cons:

Difficulty in merges resulting in overlapping code
Difficulty geting stripe to process payments
## Future Modifications
Add a feature were users can suggest future pranks and finish getting stripe pament processing to work.
 
## Deployed Application 
![Alt text](<Screenshot 2023-06-19 170538.png>)
![Alt text](<Screenshot 2023-06-19 172154.png>)
![Alt text](<Screenshot 2023-06-19 171457.png>)
![Alt text](<Screenshot 2023-06-19 171752.png>)
## Credits

Will Putnam - https://github.com/Will-rd </br>
Jennifer Jimenez - https://github.com/JJennifer </br>
Jack Burke - https://github.com/JackBurke7 </br>
Kyle Moellenkamp - https://github.com/kylemoely </br>
Branham Morris - https://github.com/BranhamMorris </br>