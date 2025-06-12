import path from "path";
import fs from "fs";

export const getCardData = (req, res) => {
  const dataPath = path.join(process.cwd(), "data", "cards.json");
  const cardData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json(cardData);
};
