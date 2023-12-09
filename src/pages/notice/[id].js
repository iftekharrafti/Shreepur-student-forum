import Img from "@/components/lazyLoadImage/Img";
import useFetch from "@/hooks/useFetch";
import { baseImgUrl } from "@/utils/imgUrl";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NoticeDetails = () => {
  const { data, loading } = useFetch("/notice/csfdu");

  const router = useRouter();
  const { id } = router.query;

  const notice = data?.data?.find((item) => item.id === parseInt(id));


  if (!notice) {
    return <h3 className="text-center font-bold mb-4">Notice not found.</h3>;
  }
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Notice Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./csfdu.jpeg" />
      </Head>
      <main>
        <Container className="mb-5 mt-5">
          <Row>
            <Col md={8} sm={12} className="mx-auto">
              {loading ? (
                <div className="loadingContainer">
                  <img src="./loading.gif" alt="" className="loadingGif" />
                </div>
              ) : (
                <div>
                  <h3
                    style={{ fontSize: "30px", fontWeight: 600, fontFamily: 'Kalpurush' }}
                    className="mb-4"
                  >
                    {notice?.title}
                  </h3>
                  <Img
                    src={baseImgUrl + notice?.image}
                
                    className="img-fluid"
                  />
                  <p
                    className="mt-4"
                    style={{ lineHeight: 1.7, fontSize: "18px", fontWeight: 600, fontFamily: 'Kalpurush' }}
                  >
                    {notice?.text}
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default NoticeDetails;
