import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

async function run(prompt) {
  const files = fs.readdirSync("./");

  const projectContext = files.map(f => {
    if (f.endsWith(".html") || f.endsWith(".md")) {
      return `FILE:${f}\n${fs.readFileSync(f,"utf8")}`;
    }
    return "";
  }).join("\n");

  const response = await anthropic.messages.create({
    model: "claude-3", // ✅ modèle valide
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: `
Project files:

${projectContext}

Task:
${prompt}

Return modified files.
`
      }
    ]
  });

  console.log(response.content[0].text);
}

run(process.argv.slice(2).join(" "));