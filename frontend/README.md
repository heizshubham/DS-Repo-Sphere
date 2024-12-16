# To Run backend independently
```shell 
cd backend
docker build -t fastapi-backend -f Dockerfile .
docker run -p 8080:8000 -t fastapi-backend
```
```to remove all untagged images