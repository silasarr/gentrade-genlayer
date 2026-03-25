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
