export default async function handler(req, res) {
  // Wir ignorieren alle IDs und nutzen IMMER Deine ID
  const fixedUrl = "https://api.comdesk.de/v1000/json/ACD/Agents/A43782/Status";

  try {
    const response = await fetch(fixedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    const text = await response.text();

    // JSON-Erkennung
    if (text.trim().startsWith("{")) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).send(text);
    } else {
      res.status(500).json({ error: "Comdesk liefert kein JSON" });
    }

  } catch (error) {
    res.status(500).json({ error: "Proxy Fehler" });
  }
}
