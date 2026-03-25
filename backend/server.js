const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Adresse de ton contrat GenLayer
const CONTRACT_ADDRESS = "0x41C754FB001C095FeAA3544C8ED8D4e80137Cd0a";

// URL de l'API GenLayer pour appeler ton contrat
const GENLAYER_API_URL = `https://studio.genlayer.com/api/contracts/${CONTRACT_ADDRESS}/call`;

// Vérification du backend
app.get("/status", (req, res) => {
  res.json({
    ok: true,
    service: "GenTrade backend",
    contract: CONTRACT_ADDRESS,
  });
});

// Appel de la méthode ping() de ton contrat
app.get("/ping", async (req, res) => {
  try {
    const response = await axios.post(GENLAYER_API_URL, {
      method: "ping",
      args: {}
    });

    res.json({
      ok: true,
      fromContract: response.data,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: "Failed to call contract ping()",
      details: err.response?.data || err.message,
    });
  }
});

// Endpoint placeholder pour le futur trading
app.post("/trade", async (req, res) => {
  res.json({
    ok: true,
    message: "Trade endpoint placeholder – strategy to be implemented."
  });
});

// Lancement du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`GenTrade backend running on port ${PORT}`);
});
