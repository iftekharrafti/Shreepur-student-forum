/* eslint-disable @next/next/no-img-element */
import useFetch from "@/hooks/useFetch";
import { baseImgUrl } from "@/utils/imgUrl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Advertise = () => {
  const { data, loading } = useFetch("/advertisement_view");
  console.log(data);
  return (
    <div className="mb-4">
      <Container>
        <Row>
          {
            data?.data?.map(item => <Col key={item.id} md={3}>
              <a href="">
                <img src={baseImgUrl + item?.image} alt="" className="img-fluid" style={{width: '350px', height: '250px'}} />
              </a>
            </Col>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default Advertise;
