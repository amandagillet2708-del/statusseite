export default async function handler(req, res) {
  const url = req.query.url;

  try {
    const response = await fetch(url, {
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
