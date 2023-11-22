import { useLibrary } from "./hooks";
import { library } from "./api/books.json";
import { ListBooks } from "./books/components";

export const BooksApp = () => {

  const { genres, setGenre, filteredGenre, readList, handleReadList } = useLibrary();

  return (
    <>
      <h1 className='ms-5 my-5' >BooksApp</h1>
      <div className="container">
        <div className="row justify-content-center">

          <main className='col-md-8'>
            <h3 className='fw-bold mb-3'>Libros disponibles: {library.length - readList.length}</h3>
            <h5 className='fw-bold mb-3'>Libros por leer: {readList.length}</h5>
            <div className="d-flex align-items-center mb-3">
              <div>
                <h5>Filtrar por género</h5>
                <select onChange={(event) => setGenre(event.target.value)} >
                  <option value="">Todos</option>
                  {genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)}
                </select>
              </div>
            </div>
            <ul className='book-list'>
              {filteredGenre.map(({ book }) => (
                <ListBooks key={book.ISBN} book={book} onClick={() => handleReadList(book)} />)
              )
              }
            </ul>
          </main>
          <aside className='col-md-4 text-center'>
            {
              (readList.length > 0) ?

                (<ul className='read-book-list'>
                  {
                    readList.map(book => (
                      <ListBooks key={book.ISBN} book={book} onClick={() => handleReadList(book, book.ISBN)} />
                    ))
                  }
                </ul>)

                :

                (<h4 className="fw-bold">No hay libros en la lista de lectura</h4>)

            }
          </aside>
        </div>
      </div>
    </>
  );

};
