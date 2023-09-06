import { Button, Card, Col, Row } from "react-bootstrap";

const SingleBook = (props) => {
  console.log(props);
  return (
    <Row>
      {/* <Col xs={12} sm={6} md={4} lg={3} xl={2} key={props.book.asin} className="g-4">
        <Card className="h-100">
          <Card.Img className="object-fit-contain img-fluid h-50" variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title className="text-truncate">{props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col> */}
    </Row>
  );
};

export default SingleBook;
