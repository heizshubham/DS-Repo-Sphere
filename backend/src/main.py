from fastapi import FastAPI
from .api import chat, github

app = FastAPI()

# Routers
app.include_router(chat.router, prefix="/chat", tags=["chat"])
app.include_router(github.router, prefix="/github", tags=["github"])


@app.get("/")
def root():
    return {"message": "Backend is running!"}
