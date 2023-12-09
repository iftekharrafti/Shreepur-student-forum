import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const Pagination = ({ coursesPerPage, totalPosts, setCurrentPage }) => {
  const [newPage, setNewPage] = useState(1);

  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / coursesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

//   When page change then new course are show
  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setNewPage(pageNumber);
  };

//   When >> click then increment page number
  const incrementPage = () => {
    setCurrentPage(newPage + 1);
    setNewPage(newPage + 1);
  };

  //   When << click then decrement page number
  const decrementPage = () => {
    setCurrentPage(newPage - 1);
    setNewPage(newPage - 1);
  };

  return (
    <Container>
      <Row>
        <Col md={10} sm={12}>
        <div className="d-flex justify-content-center pt-3 pb-5">
        {/* Decrement Button */}
      {newPage === 1 ? (
        <Button variant="primary" className="py-2 px-3 me-3" disabled>
          <AiFillLeftCircle />
        </Button>
      ) : (
        <Button
          onClick={decrementPage}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          <AiFillLeftCircle />
        </Button>
      )}

      {/* All number button */}
      {pageNumbers.map((pageNumber, index) => (
        <Button key={index}
          onClick={() => handlePage(pageNumber)}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          {pageNumber}
        </Button>
      ))}

      {/* Decrement button */}
      {newPage === totalPages ? (
        <Button variant="primary" className="py-2 px-3 me-3" disabled>
          <AiFillRightCircle />
        </Button>
      ) : (
        <Button
          onClick={incrementPage}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          <AiFillRightCircle />
        </Button>
      )}
    </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination;
