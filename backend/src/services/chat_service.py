chat_data = {}


async def save_message(repo_id: int, message: str):
    """Save a message for a repo."""
    if repo_id not in chat_data:
        chat_data[repo_id] = []
    chat_data[repo_id].append({"message": message})
    return {"status": "Message saved successfully!"}


async def get_chat_history(repo_id: int):
    """Retrieve chat history for a repo."""
    return chat_data.get(repo_id, [])
