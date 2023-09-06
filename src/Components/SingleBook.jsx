import { Button, Card, Col, Row } from "react-bootstrap";

const SingleBook = (props) => {
  console.log(props);
  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2} className="g-4" key={props.asin}>
      <Card className="h-100">
        <Card.Img className="object-fit-contain img-fluid h-50" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
