import React from 'react'
import UserForm from '../components/UseForm';

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
    coverImage: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg',

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
    coverImage: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b0/d7/b0d76991385a4810f38c460ba329e0dd.jpg',

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
    
    <div className="bg-black  min-h-screen   p-4 ">
      
      <h1 className="text-3xl text-white font-bold mb-12">Bienvenido a la Biblioteca</h1>
      <div className="bg-green-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-sky-600 shadow-md rounded-lg overflow-hidden">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-[500px] h-64 object-cover m-12 p-8 bg-green-500 border-8 border-blue-500"
            />
            <div className="bg-slate-500 p-4">
              <h2 className="text-xl text-black font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
      <UserForm  />
     
    </div>
  );
}

/*
mb = margin-bottom
mt = margin-top
ml = margin-left
mr = margin-right
m = margin

pb= padding-bottom
pt= padding-top
pl= padding-left
pr= padding-right
p= padding

*/