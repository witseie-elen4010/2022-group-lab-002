# USING ARRAYS TO STORE DATA INSTEAD OF DATABASE
Date: 2022-May-19

## Status
Accepted

## Context
Arrays were used to store data necessary for the game and player information instead of using a persistant data storage


## Decision
This decision was taken due to the group members still not familiar with how to use a relational database
hence information such as user account details were stored in an array of objects. Similar functions to CRUD operations
in an SQL database were implemented to create, read, and update the players account deatils. The words were stored in an 
array of words instead of an array.

## Consequences

* Use of words dictionary array increased number of lines code making files not easy to read and review
* players data stored in arrays could not be retrieved after the page sessions have stopped. This would've been made easy 
  with the use of a database 