const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/calculate", (req, res) => {
  const { brutto } = req.body;

  if (!brutto || isNaN(brutto)) {
    return res.status(400).json({ error: "Ungültiges Bruttogehalt" });
  }

  // Beispielberechnungen (vereinfacht):
  const steuern = brutto * 0.2;
  const sozialversicherungen = brutto * 0.2;
  const netto = brutto - steuern - sozialversicherungen;

  return res.json({
    netto,
    steuerbetrag: steuern,
    sozialversicherungen
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
