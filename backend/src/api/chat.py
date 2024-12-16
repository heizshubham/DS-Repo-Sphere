from fastapi import APIRouter
from src.services.chat_service import save_message, get_chat_history

router = APIRouter()


# Start a new conversation
@router.post("/new")
async def new_message(repo_id: int, message: str):
    """Save a new message for the selected repository."""
    return await save_message(repo_id, message)


# Fetch conversation history
@router.get("/history")
async def chat_history(repo_id: int):
    """Retrieve conversation history for a specific repository."""
    return await get_chat_history(repo_id)
