import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// Load album data
const albums = JSON.parse(fs.readFileSync("./albums.json", "utf8"));

// To Do: Add routes here

app.listen(4000, () => {
    console.log("Album API running at http://localhost:4000");
});

// GET /api/albums
// Return the full list of albums

app.get("/api/albums", (req, res) => {
    res.json(albums);
});

// GET /api/albums/:id
// Return one album by ID

app.get("/api/albums/:id", (req, res) => {
    const album = albums.find((a) => a.id == req.params.id);

    if(!album) {
        return res.status(404).json({error: "Album not found" });
    }

    res.json(album);
});

// GET /api/albums/:id/year
// Return the title and the year

app.get("/api/albums/:id/year", (req, res) => {
    const album = albums.find((a) => a.id == req.params.id);

    if (!album) {
        return res.status(404).json({error: "Album not found" })
    }

    res.json({
        title: album.title,
        year: album.year
    });
});

app.get("/api/albums/artist/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  const results = albums.filter(
    (a) => a.artist.toLowerCase() === name
  );

  res.json(results);
});
