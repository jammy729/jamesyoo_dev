// This is a simplified example using an in-memory object to store the content
let content = "Default content";

export default function handler(req, res) {
  res.status(200).json({ content });
}
