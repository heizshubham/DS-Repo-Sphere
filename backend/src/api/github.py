from fastapi import APIRouter

router = APIRouter()

# Predefined list of GitHub repositories
repos = [{"id": 1, "name": "Repo A"}, {"id": 2, "name": "Repo B"}, {"id": 3, "name": "Repo C"}]


@router.get("/repos")
async def get_repositories():
    """Fetch predefined GitHub repositories."""
    return {"repositories": repos}
