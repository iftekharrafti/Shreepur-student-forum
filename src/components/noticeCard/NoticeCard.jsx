import React from "react";
import { Button, Col } from "react-bootstrap";
import Img from "../lazyLoadImage/Img";
import { baseImgUrl } from "@/utils/imgUrl";
import Style from "./noticeCard.module.css";
import { MdDateRange } from "react-icons/md";
import Link from "next/link";

const NoticeCard = ({ item }) => {
  //   Convert Date
  const formatDateString = (inputDate) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
  return (
    <Col lg={4} md={6} sm={12} data-aos="fade-up">
      <div className={Style.cardDesign}>
        <Link href={`/notice/${item.id}`}>
          {item?.image === null ? (
            <img
              src="/department.jpg"
              className={`${Style.cardImg} img-fluid`}
            />
          ) : (
            <Img
              src={baseImgUrl + item?.image}
              className={`${Style.cardImg} img-fluid`}
            />
          )}
        </Link>
        <div className={Style.date}>
          <MdDateRange style={{ color: "#009CFF" }} />
          <span className="ms-2">{formatDateString(item?.date)}</span>
        </div>
        <Link
          href={`/notice/${item.id}`}
          className="text-black text-decoration-none"
        >
          <h4 className={Style.title}>{item?.title}</h4>
        </Link>
        <Link href={`/notice/${item.id}`}>
          <button className={Style.button}>Read more</button>
        </Link>
      </div>
    </Col>
  );
};

export default NoticeCard;
