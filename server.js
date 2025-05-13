const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
    const { brutto } = req.body;

    if (!brutto || isNaN(brutto)) {
        return res.status(400).json({ error: "Ungültiger Bruttolohn" });
    }

    const steuer = brutto * 0.2;
    const sozial = brutto * 0.1;
    const netto = brutto - steuer - sozial;

    res.json({
        brutto,
        steuerbetrag: steuer,
        sozialversicherungen: sozial,
        netto
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Backend läuft auf Port ${PORT}`);
});
