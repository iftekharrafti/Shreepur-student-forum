import Head from "next/head";

import useFetch from "@/hooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";

export default function Bank() {
  const { data, loading } = useFetch("/bank");
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Bank</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./shreepur.jpeg" />
      </Head>
      <main>
        {loading ? (
          <div className="loadingContainer">
            <img src="./loading.gif" alt="" className="loadingGif" />
          </div>
        ) : (
          <>
            <div className="headerTitle mt-5">
              <h3 class="headerTitleMain">ব্যাংক একাউন্ট</h3>
            </div>
            {/* Alumni Details */}
            <Container className="mt-4 mb-5">
              <Row>
                <Col md={10} sm={12} className="mx-auto">
                  <p
                    dangerouslySetInnerHTML={{ __html: data?.data[0]?.dureg }}
                  />
                </Col>
              </Row>
            </Container>
          </>
        )}
      </main>
    </>
  );
}
