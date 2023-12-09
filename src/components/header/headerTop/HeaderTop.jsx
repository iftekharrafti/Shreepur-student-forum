import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import Style from './headerTop.module.css';

const HeaderTop = () => {
  const { data, loading } = useFetch("/home/csfdu");
  return (
    <header>
      <Container>
        <div className={Style.logo}>
          <Link href="/" className="d-flex align-items-center">
            <img
              src="./csfdu.jpeg"
              alt=""
              style={{ height: "40px", width: "auto" }}
            />
            <h3 className={Style.name} >
              {data?.admin?.name}
            </h3>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default HeaderTop;
