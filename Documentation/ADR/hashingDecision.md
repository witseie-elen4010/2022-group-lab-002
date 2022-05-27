# USING Bcrypt for hashing 
Date: 2022-May-20

## Status
Accepted

## Context
 Use Bcrypt library to hash player's passwords when signing up into the game site for security purpose for scenarios when player's data is compromised.

## Decision
Bcrypt was used because it can generate random salt and  salt rounds can be chosen to increase the hashing level which increases security level. The use of this encryption framework ensured that each player(user) password has it's own unique has hence data is protected.

## Consequences
* User passwords were always encypted befored being stored, this improved the security level of the application
* The use of the framework guaranteed that sign in actions do not pass if entered player password do not match with stored hashed passwords. 