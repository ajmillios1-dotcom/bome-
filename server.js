const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ---- AJ's data ----
const bio = {
  name: "AJ",
  role: "Full-time student",
  location: "Twin Cities, Minnesota",
  favoriteColor: "Orange",
  personality: "Big-time outdoors person",
  summary: "AJ is a student from the Twin Cities who loves lacrosse, the outdoors, and summers at YMCA Camp Northern Lights."
};

const skills = {
  sports: ["Lacrosse"],
  interests: ["Outdoors", "Camping", "YMCA Camp Northern Lights"],
  favoriteColor: "Orange"
};

const funFacts = [
  "Plays lacrosse",
  "Huge fan of YMCA Camp Northern Lights",
  "Total outdoors person — happiest outside",
  "Broke a thumb about a year ago (fully healed now!)",
  "Favorite color is orange"
];

const socials = {
  instagram: "@that.dog123"
};

// ---- Routes ----
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to AJ's personal API 🧡",
    endpoints: ["/bio", "/skills", "/fun-facts", "/socials", "/all"]
  });
});

app.get('/bio', (req, res) => res.json(bio));
app.get('/skills', (req, res) => res.json(skills));
app.get('/fun-facts', (req, res) => res.json({ funFacts }));
app.get('/socials', (req, res) => res.json(socials));

app.get('/all', (req, res) => {
  res.json({ bio, skills, funFacts, socials });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found. Try /bio, /skills, /fun-facts, /socials, or /all" });
});

app.listen(PORT, () => {
  console.log(`AJ's API is running on port ${PORT}`);
});
