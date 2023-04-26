docker build -t devops . --no-cache
docker run -p 3033:3000 devops -d