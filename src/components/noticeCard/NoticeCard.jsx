import React from "react";
import { Button, Col } from "react-bootstrap";
import Img from "../lazyLoadImage/Img";
import { baseImgUrl } from "@/utils/imgUrl";
import Style from "./noticeCard.module.css";
import Link from "next/link";

const NoticeCard = ({ item }) => {
  return (
    <Col lg={6} md={6} sm={12} data-aos="fade-up">
      <div className={Style.cardDesign}>
        <Link href={`/notice/${item.id}`}>
          <Img
            src={baseImgUrl + item?.image}
            className={`${Style.cardImg} img-fluid`}
          />
        </Link>
        <Link
          href={`/notice/${item.id}`}
          className="text-black text-decoration-none"
        >
          <h4 className={Style.title}>{item?.title}</h4>
        </Link>
        <p className={Style.text}>{item?.text.slice(0, 200)}.....</p>
        <Link href={`/notice/${item.id}`}>
          <Button className={Style.button}>বিস্তারিত দেখুন</Button>
        </Link>
      </div>
    </Col>
  );
};

export default NoticeCard;
