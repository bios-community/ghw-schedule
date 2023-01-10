![image](https://user-images.githubusercontent.com/84132532/211053638-510f30b5-371e-47ca-b362-1a69a2b1f7fe.png)

# MLH GHW Schedule in IST

Welcome to the GHW Schedule in IST Website Repository.

## Overview

This is a website by the BIO-S Community to help the participants of the MLH GHW Hackathon to keep track of the schedule of the event in IST.

## Progress

To check the progress and design of the webiste, do check out the wiki page of this repository. It contains all the information about the website. It also contains the design of the website.

## Tech Stack

-   Frontend is built using [ReactJS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjXherzqLP8AhXkgWMGHVrlCE8QFnoECA4QAQ&url=https%3A%2F%2Freactjs.org%2Fdocs%2Fgetting-started.html&usg=AOvVaw2ELKlyujw4msP4lLpv0rOd) and [Sass](https://sass-lang.com/documentation/).
-   Design is done using [Figma](https://figma.com/).

## Requirements

-   [NodeJS](https://nodejs.org/en/download/)
-   [Git](https://git-scm.com/downloads)

## Installation

1. Fork the repository.
2. Clone the repository using `git clone` command in your terminal.
3. Run `npm install` to install all the dependencies.
4. Run `npm run dev` to start the development server.
5. Create a new branch using `git checkout -b <branch_name>`.
6. Make changes in the code.
7. Commit the changes using `git commit -m "<commit_message>"`.
8. Push the changes using `git push -u origin <branch_name>`.
9. Create a pull request.

You are done! Enjoy open-sourcing!

## How to change the schedule

To change the schedule, you need to edit the `src/data/ScheduleData.js` file. The file contains an array of objects. Each object represents a day of the event. The object contains the following properties:

-   `dateDay`: The date & day of the event.
-   `events`: This is an array of objects of all the events happening on that day. Each object contains the following properties:
    -   `time`: The time of the event.
    -   `title`: The name of the event.
    -   `link`: The link to the event.

## Maintainers

-   [Adarsh Dubey](https://bio.link/inclinedadarsh)

## Thank You!
