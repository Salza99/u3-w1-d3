import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchValue: "",
  };
  filterBookList = () => {
    return this.props.arrBooks
      .filter((book) => {
        return book.title.toLowerCase().includes(this.state.searchValue);
      })
      .map((book) => SingleBook(book));
  };

  render() {
    console.log(
      this.props.arrBooks.map((book) => {
        return book.title.toLowerCase().includes("cleopatra");
      })
    );
    console.log(
      this.props.arrBooks.filter((book) => {
        return book.title.toLowerCase().includes("lessons");
      })
    );

    return (
      <Container>
        <h2>Cerca</h2>
        <div className="input-group justify-content-center">
          <div className="form-outline">
            <input
              id="search-focus"
              type="search"
              className="form-control"
              onChange={(event) => this.setState({ searchValue: event.target.value })}
            />
          </div>
          <button type="button" className="btn btn-primary">
            Trova
          </button>
        </div>
        <h2 className="mb-4">Sfoglia</h2>
        <Row>
          {this.state.searchValue ? this.filterBookList() : this.props.arrBooks.map((book) => SingleBook(book))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
