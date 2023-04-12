# react_dev

##React Projects for udemy course

 - 01-starting-setup - the first 3 modules of the course used this codebase, this is everything up to Assignment 1

 - assignment1 - the assignment for the previous (ca. 2019) version of this course, it is not current or even running probably

 - homeproject - not sure

 - 04-state - 
 
 - 05-lists - the list app, now with card above, and ability to change titles. Most controls do not work still

 - 06-styling - new "todo" app, now with styling work done

 - 08-practice_project - new listing app that does not work for some reason. Unsure if this was submitted.



##Building these
Needs Docker, and no .bat version of the build is yet available
each project is trivially runnable on a system with Node installed (yarn start)

1. ./init.sh  - to start the Docker container
2. docker attach react_dev_env - to connect to the container shell
3. inside the container, switch to appropriate project subfolder
4. yarn start (or npx react-scripts start)

Heaven forfend any of the versions get out of sync, these were all taken from either the course github repo or create-react-app. I don't even know what version of Node I am on. Docker container takes node-latest. Good luck future Ben!

Course code repo: (https://github.com/academind/react-complete-guide-code)




