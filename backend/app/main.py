from fastapi import FastAPI
from app.api.assets import router as assets_router

app = FastAPI(
    title="Dividend Master AI"
)

app.include_router(assets_router)