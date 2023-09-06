import { Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  console.log(props.arrBooks);
  return (
    <Container>
      {props.arrBooks.map((book) => {
        return SingleBook(book);
      })}
    </Container>
  );
};

export default BookList;
