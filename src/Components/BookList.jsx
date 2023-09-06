import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  // console.log(props.arrBooks);
  return (
    <Container>
      <Row>
        {props.arrBooks.map((book) => {
          return SingleBook(book);
        })}
      </Row>
    </Container>
  );
};

export default BookList;
