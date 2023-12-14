/* eslint-disable @next/next/no-img-element */
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import Style from './headerTop.module.css';

const HeaderTop = () => {
  const { data, loading } = useFetch("/home");
  return (
    <header>
      <Container>
        <div className={Style.logo}>
          <Link href="/" className="d-flex align-items-center">
            <img
              src="/shreepur.jpeg"
              alt=""
              
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default HeaderTop;
