
export const ListBooks = ({ book, onClick }) => {

  return (
    <li className="book" onClick={onClick} >
      <img src={book.cover} alt={book.title} />
    </li>
  )
}
