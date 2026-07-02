from pydantic import BaseModel

class Asset(BaseModel):
    ticker: str
    quantidade: int
    preco_medio: float