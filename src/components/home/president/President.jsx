/* eslint-disable @next/next/no-img-element */
import Img from "@/components/lazyLoadImage/Img";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Style from "./president.module.css";
import { baseImgUrl } from "@/utils/imgUrl";
import Link from "next/link";

const President = ({ data, loading }) => {
  return (
    <div className={Style.presidentSecretery}>
      <Container>
        {data?.welcome?.map((item) => {
          return (
            <Row className="mb-4" key={item.id}>
              <Col
                lg={4}
                md={12}
                sm={12}
                className="d-flex align-items-center justify-content-center"
                data-aos="fade-right"
              >
                <div className={Style.imgContent}>
                  <img src={baseImgUrl + item?.image} className={Style.img} alt="Image" />
                  <div className="mt-3 text-center" style={{ width: "250px" }}>
                    <h4 className={Style.name}>{item?.name}</h4>
                    <h5 className={Style.workplace}>{item?.workplace}</h5>
                  </div>
                </div>
              </Col>
              <Col lg={8} md={12} sm={12} data-aos="fade-left">
                <div className={Style.content}>
                  <h2 className={Style.title}>{item?.title}</h2>
                  <p className={Style.text1}>{item?.text1.slice(0, 650)}...</p>
                  <div className="d-flex justify-content-center">
                    <Link href={`/president/${item.id}`}>
                      <button className={Style.button}>Read more...</button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default President;
