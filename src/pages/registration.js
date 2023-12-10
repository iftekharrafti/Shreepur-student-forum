import Head from "next/head";

import useFetch from "@/hooks/useFetch";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Style from "../styles/Registration.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "@/utils/api";
import { toast } from "react-toastify";

export default function Advisor() {
  const [isValid, setIsValid] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: dbData, loading } = useFetch("/member/csfdu/Advisor");

  const onSubmit = async (data) => {
    setLoadingBtn(true);
    try {
      data.admin_name = await dbData?.admin?.admin_name;

      if (data.phone.length > 11 || data.phone.length < 11) {
        setIsValid(false);
        return;
      }

      const response = await axios.post(BASE_URL + "/registration", data);
      console.log(response.data);

      setIsValid(true);
      toast.success("Registration Successful");
      setLoadingBtn(false);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Head>
        <title>Cox&apos;s Bazar Student Forum Registration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./shreepur.jpeg" />
      </Head>
      <main>
        <>
          {/* Registration Title */}
          <div className="headerTitle mt-5">
            <h3 class="headerTitleMain">EXHIBITORS DETAILS</h3>
            <h3 class="headerTitleMain">TOURISM FAIR REGISTRATION FROM</h3>
          </div>
          {/* Registration Details */}
          <Container className="mt-4 mb-5">
            <Row className="mb-4">
              <Col lg={8} md={10} sm={12} className="mx-auto">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className={Style.contactInstitute}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Contact Person
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={Style.inputField}
                        {...register("name", { required: true })}
                        placeholder="Contact Person"
                      />
                      {errors.name && (
                        <span className="text-danger">
                          Contact Person is required
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={`${Style.institute} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Institute/Organization
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className={Style.inputField}
                        {...register("custom1", { required: true })}
                        placeholder="Institute/Organization"
                      />
                      {errors.custom1 && (
                        <span className="text-danger">
                          Institute/Organization is required
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className={`${Style.contactInstitute} mb-4`}>
                    <Form.Group
                      className={`${Style.contact} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className={`${Style.inputField} ${Style.inputNumber} input`}
                        {...register("phone", { required: true })}
                        placeholder="Phone Number"
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          Phone Number is required
                        </span>
                      )}
                      {!isValid && (
                        <span className="text-danger">
                          This number is not valid
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group
                      className={`${Style.institute} mb-3`}
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={Style.inputLabel}>
                        E-mail
                      </Form.Label>
                      <Form.Control
                        type="email"
                        className={Style.inputField}
                        {...register("custom2", { required: true })}
                        placeholder="E-mail"
                      />
                      {errors.custom2 && (
                        <span className="text-danger">E-mail is required</span>
                      )}
                    </Form.Group>
                  </div>
                  <h6 className={Style.stallSizeTitle}>Stall Size :</h6>
                  <p className={Style.stallSizeText}>
                    Standard Booth(8*8)sft=64sft, Regular Rate(Negotiable)
                  </p>
                  {loadingBtn ? (
                    <div className="d-flex justify-content-center">
                      <Button disabled className={Style.submit}>
                        Inserting...
                      </Button>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <Button type="submit" className={Style.submit}>
                        Submit
                      </Button>
                    </div>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      </main>
    </>
  );
}
