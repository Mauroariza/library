import React from 'react'

interface Book {
  id: number;
  title:string;
  author:string;
  coverImage: string;
}



const books : Book[] = [
  { 
    id : 1,
    title : 'sociales',
    author : 'David',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZF5yGdJ-9iK7okaJ0uAaNKfEe4LRI75bgEQ&s',

  },
  {
    id : 2,
    title : 'inglés',
    author : 'Mauricio',
    coverImage: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg',

  },
  {
    id : 3,
    title : 'Cien años de Soledad',
    author : 'gabo',
    coverImage: 'data:image/jpeg;base64,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',

  },{ 
    id : 1,
    title : 'sociales',
    author : 'David',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZF5yGdJ-9iK7okaJ0uAaNKfEe4LRI75bgEQ&s',

  },
  {
    id : 2,
    title : 'inglés',
    author : 'Mauricio',
    coverImage: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg',

  },
  {
    id : 3,
    title : 'Cien años de Soledad',
    author : 'gabo',
    coverImage: 'data:image/jpeg;base64,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',

  },
  { 
    id : 1,
    title : 'sociales',
    author : 'David',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZF5yGdJ-9iK7okaJ0uAaNKfEe4LRI75bgEQ&s',

  },
  {
    id : 2,
    title : 'inglés',
    author : 'Mauricio',
    coverImage: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg',

  },
  {
    id : 3,
    title : 'Cien años de Soledad',
    author : 'gabo',
    coverImage: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg',

  }



]


export default function HomePage() {
  return (
    <div className="bg-black min-h-screen   p-4 ">
      <h1 className="text-3xl font-bold mb-6">Bienvenido a la Biblioteca</h1>
      <div className="bg-green-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-1/2 h-64 object-cover m-12 p-8 bg-green-500 border-8 border-blue-500"
            />
            <div className="bg-slate-500 p-4">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}