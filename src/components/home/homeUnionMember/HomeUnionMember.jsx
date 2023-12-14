import { BASE_URL } from "@/utils/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Style from "./homeUnionMember.module.css";
import { toast } from "react-toastify";

const HomeUnionMember = () => {
  const [unionName, setUnionName] = useState([]);
  const [selectUnion, setSelectUnion] = useState("");
  const [selectMember, setSelectMember] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(false);

  useEffect(() => {
    axios.get(BASE_URL + "/union_view").then((res) => {
      setUnionName(res.data.data);
    });
  }, []);

  const handleUnionNameChange = (event) => {
    setSelectUnion(event.target.value);
  };

  const handleMemberChange = (event) => {
    setSelectMember(event.target.value);
  };

  const handleMemberSubmit = (event) => {
    event.preventDefault();

    if (!selectUnion) {
      toast.error("Please Select Union");
      setLoadingBtn(false);
      return;
    }
    if (selectUnion === "ইউনিয়ন নির্বাচন করুন" || selectUnion === "") {
      toast.error("Please Select Union");
      setLoadingBtn(false);
      return;
    }

    if (!selectMember) {
      toast.error("Please Select Member");
      setLoadingBtn(false);
      return;
    }
    if (selectMember === "সদস্য নির্বাচন করুন" || selectMember === "") {
      toast.error("Please Select Member");
      setLoadingBtn(false);
      return;
    }
    console.log(selectUnion);
    console.log(selectMember);

    axios.get(`${BASE_URL}/memberGetByUnion?union_id=${selectUnion}&member_category=${selectMember}`)
  .then(response => {
    // Handle the successful response here
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });
  };

  return (
    <div className="mb-4">
      <Container>
        <Row>
          <Col md={9} className="mx-auto">
            <Form action="" onSubmit={handleMemberSubmit}>
              <Row className="shadow border p-4">
                <Col md={5}>
                  <Form.Group
                    className={`${Style.contact} mb-3`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Select
                      value={selectUnion}
                      onChange={handleUnionNameChange}
                      style={{ fontSize: "14px" }}
                      aria-label="Default select example"
                      className={`${Style.inputField} ${Style.formSelect}`}
                    >
                      <option>ইউনিয়ন নির্বাচন করুন</option>
                      {unionName?.map((item) => (
                        <option key={item.id} value={item?.id}>
                          {item?.dureg}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group
                    className={`${Style.contact} mb-3`}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Select
                      value={selectMember}
                      onChange={handleMemberChange}
                      style={{ fontSize: "14px" }}
                      aria-label="Default select example"
                      className={`${Style.inputField} ${Style.formSelect}`}
                    >
                      <option>সদস্য নির্বাচন করুন</option>
                      <option value="Senior">সম্মানিত সদস্য</option>
                      <option value="General">সাধারণ সদস্য</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <button type="submit" className={Style.button}>
                    Submit
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeUnionMember;
