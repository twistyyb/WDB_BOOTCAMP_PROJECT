const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());


// Basic route
app.get('/', (req, res) => {
  res.json({ message: `Backend running on port ${PORT}` });
});

app.get('/pokemon', async (req, res) => {
  try {
    console.log(`fetching page ${req.query.page}`)
    response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(req.query.page - 1) * 10}`)
    data = await response.json()

    results = []
    for (const pokemon of data.results) {
      response = await fetch(pokemon.url)
      data = await response.json()
      results.push({name: data.name, sprite_url: data.sprites.front_default})
    }

    res.json(results)

  } catch (error) {
    console.error('Error fetching pokemon:', error)
    res.status(500).json({ error: 'Failed to fetch pokemon' })
  }
});

app.get('/pokemon/:name', async (req, res) => {
  try {
    console.log(`fetching pokemon ${req.params.name}`)
    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
    data = await response.json()
    res.json(data)

  } catch (error) {
    console.error('Error fetching pokemon:', error)
    res.status(500).json({ error: 'Failed to fetch pokemon' })
  }
});

// Tells your backend to be listening to this PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
