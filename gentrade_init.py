# v0.1.0
# { "Depends": "py-genlayer:latest" }

from genlayer import *

class GenTradeInit(gl.Contract):

    def __init__(self):
        pass

    @gl.public.view
    def ping(self) -> str:
        return "pong"
