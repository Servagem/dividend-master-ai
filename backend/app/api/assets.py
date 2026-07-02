from fastapi import APIRouter
from app.models.asset import Asset

router = APIRouter()

carteira = []

@router.get("/assets")
def listar_ativos():
    return carteira


@router.post("/assets")
def adicionar_ativo(asset: Asset):
    carteira.append(asset)
    return {
        "mensagem": "Ativo cadastrado com sucesso",
        "ativo": asset
    }