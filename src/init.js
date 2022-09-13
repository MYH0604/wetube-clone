import "./db";
import "./models/Video";
import app from "./server";

// PORT NUMBER
const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server is listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
