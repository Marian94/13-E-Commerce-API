# 13-E-Commerce-API
Back end for an e-commerce site


## Description
This project is the back end for an e-commerce site. This application configure a working Express.js API to use Sequelize to interact with a MySQL database.


  ## Table of Contents
  1. [User Story](#user-story)
  2. [Acceptance Criteria](#acceptance-criteria)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [Github](#Github)
  6. [Email](#Email)
  7. [Licenses](#Licenses)


# User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

# Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

  # Installation
  Once you download the app into your computer you need to run 
  `npm install`.
  
  After that you need to initialice the data base running in the db file `mysql -u root -p`, introduce your password and run `SOURCE db/schema.sql`

  Once you quit mysql do not forget to seed the database `npm run seed`

  And then start the serve `npm start`

   # Github
  https://github.com/marian94

  # Email
  mgromero94@hotmail.com

  # Licenses
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
  # Demo Video


https://user-images.githubusercontent.com/51127563/163744702-b8df521b-b8ee-47cc-902e-54f21189c1cf.mp4

