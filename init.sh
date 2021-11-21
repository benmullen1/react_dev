docker stop react-dev-env

docker run --rm -it -d --name react-dev-env -v /opt/repo/react_dev:/usr/src/app -w /usr/src/app -e "PORT=3000" -p 8081:3000 node:latest /bin/bash

docker exec -d react-dev-env npm install -g react
docker exec -d react-dev-env npm install -g react-dom
docker exec -d react-dev-env npm install -g react-scripts
docker exec -d react-dev-env npm install -g create-react-app
docker exec -d react-dev-env chmod 777 -R /usr/src/app 
#docker exec -d react-dev-env cd ./assignment1
#docker exec -d react-dev-env npx react-scripts start
