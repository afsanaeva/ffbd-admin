import * as React from "react";
import { Button, Form } from "react-bootstrap";
import Card from "./card";
import style from "../styles/signup.module.css";

export default function BasicTextFields() {
  return (
    <div className="container">
      <div className={style.body}>
        <br />
        <br />
        <h1 className={style.createBrand}>Create Brand</h1>
        <div className="displayFlex">
          <Card />
        </div>
        <br />

        <div className="d-flex justify-content-space-between gap-3">
          <div className={style.mainForm}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>*Brand Name</Form.Label>
                <Form.Control type="email" placeholder="Type brand name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Parent Brand Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Type parent brand name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="email" placeholder="Type company name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Company Address</Form.Label>
                <Form.Control type="email" placeholder="Type company address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="email" placeholder="Type description" />
              </Form.Group>
            </Form>
          </div>
<br/>
          <div className={style.mainForm}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Website</Form.Label>
                <Form.Control type="email" placeholder="Type web address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Parent Brand Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Type parent brand name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="email" placeholder="Type company name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Company Address</Form.Label>
                <Form.Control type="email" placeholder="Type company address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="email" placeholder="Type description" />
              </Form.Group>
            </Form>
          </div>

        </div>
        <br />

        <div className="d-flex justify-content-between">
        <div className={style.mainForm}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Business Name </Form.Label>
              <Form.Control type="email" placeholder="Type business name" />
            </Form.Group>
          </Form>
        </div>
        <div>
          
        <Button variant="primary" type="submit">
              Submit
            </Button>
        </div>
        </div>

      </div>
    </div>
  );
}
