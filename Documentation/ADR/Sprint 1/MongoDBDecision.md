# Using MongoDB for persistent data storage  
Date: 2022-May-27

## Status
Accepted

## Context
 Store all necessary data into MongoDB database. It works in NoSQL form

## Decision

MongoDb was chosen for data storage to store user/player sessions,cookies, scores, attempts and players account information for security. Data previously stored in arrays have been moved to mongodb database stored as collections or documents and hosted in the cloud. The decision was taken due to it being easy and fast to learn, easilyy scalable
Mongoose library was used to create connection between the MongoDb database and express

## Consequences
* Most team members did not push themselves to learning how to use MongoDb which might be due to learning new database model hence only few members used the database 
* However the use of MongoDb guaranteed that data is always backed up to the cloud and it is easy
to use CRUD operations as the syntax is similar to javasript.

* Deploying to azure was challenging as the deployment would break when the database uri string was stored in .env file and ignored bythe .gitignore file. These came at an expense of security compromisation as the string containing login details tothe database is exposed to anyone visiting the repo
* Storing user sessions, account details and scores came at a big advantage because the site can remember users and destroy sessions when they log out compared to when there was no database , users had to register everytime they come to the site. This also increased security.