import { app } from './app.js'; // Isso está correto se app.ts está em src

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
