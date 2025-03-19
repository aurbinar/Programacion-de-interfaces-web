import { Handlers } from "$fresh/server.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (req: Request) => {
    const url = new URL(req.url);
    const word = url.searchParams.get("word");

    if (!word) {
      return new Response(JSON.stringify({ error: "Se requiere una palabra" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      const response = await Axios.get(apiUrl);

      return new Response(JSON.stringify(response.data, null, 2), {
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      return new Response(JSON.stringify({ error: "Palabra no encontrada" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};