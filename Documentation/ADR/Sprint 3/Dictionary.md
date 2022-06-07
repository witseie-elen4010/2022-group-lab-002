# USING ARRAYS TO STORE DATA INSTEAD OF DATABASE
Date: 2022-June-07

## Status
Accepted

## Context
MongoDB is used as database


## Decision
This decision was taken to have more control of the  player information

The dictionary is stored in the server. This decision is taken because the dictionary arry was too large to directly store in to the server.

## Consequences

* Use of words dictionary array increased number of lines code making files not easy to read and review
* players data stored in arrays could not be retrieved after the page sessions have stopped. This would've been made easy 
  with the use of a database 