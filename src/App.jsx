import { useState } from 'react';
import './App.css';
import { RickkMorty } from './components/RickMorty';

const URL = 'https://rickandmortyapi.com/api/character';

function App() {
  const [characters, setCharacters] = useState([]);

  const handleGetApi = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCharacters(data.results);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-4">
        <h1 className='text-3xl font-bold '>rick and morty api</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
          onClick={handleGetApi}
        >
          Generar Personajes
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {characters.map((character) => (
          <RickkMorty
            key={character.id}
            nameCharacter={character.name}
            imgCharacter={character.image}
            quoteCharacter={`Status: ${character.status}, Species: ${character.species}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
