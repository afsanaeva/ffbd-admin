import * as React from "react";
import { Button, Form ,CloseButton } from "react-bootstrap";
import Card from "./card";
import style from "../styles/signup.module.css";
import {IoIosSend} from "react-icons/io";

export default function BasicTextFields() {
  return (
    <div className="container">
      <div className={style.body}>
        <div className="d-flex justify-content-between mt-5 mb-3">
        <h1 className={style.createBrand}>Create Brand</h1>
        <CloseButton />
        </div>

        <div className="displayFlex">
          <Card />
        </div>
        <br />

        <div className="d-flex justify-content-space-between gap-3">
          <div className={style.mainFormLeft}>
            <div className={style.mainFormLeft1}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label><b>*Brand Name</b></Form.Label>
                  <Form.Control type="text" placeholder="Type brand name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label><b>Parent Brand Name</b></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type parent brand name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label><b>Company Name</b></Form.Label>
                  <Form.Control type="text" placeholder="Type company name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label><b>Company Address</b></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type company address"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label><b>Description</b></Form.Label>
                  <Form.Control type="text" placeholder="Type description" />
                </Form.Group>
              </Form>
            </div>

            <br />

            <div className={style.mainFormLeft2}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label><b>Business Name</b></Form.Label>
                  <Form.Control type="text" placeholder="Type business name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label><b>Upload TIN</b></Form.Label>
                  <Form.Control type="file" placeholder="No File Chosen" />
                  <Form.Text className="text-muted">
                    Recommended image format pdf and max 500kb
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label><b>Upload BIN</b></Form.Label>
                  <Form.Control type="file" placeholder="No File Chosen" />
                  <Form.Text className="text-muted">
                    Recommended image format pdf and max 500kb
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label><b>Upload NID</b></Form.Label>
                  <Form.Control type="file" placeholder="No File Chosen" />
                  <Form.Text className="text-muted">
                    Recommended image format pdf and max 500kb
                  </Form.Text>
                </Form.Group>
              </Form>
            </div>
            <br />
          </div>

          <div className={style.mainFormRight}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><b>Website</b></Form.Label>
                <Form.Control type="text" placeholder="Type web address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><b>Social Media URL</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type social media address"
                />
                 <Form.Text className="text-muted">
                 Max 5 Categories
                  </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><b>Category</b></Form.Label>
                <Form.Control type="text" placeholder="Type category" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><b>Preferred Hashtag</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type preferred hashtag"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><b>Preferred Brandtag</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type preferred brandtag"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label><b>Contact Name</b></Form.Label>
                <Form.Control type="text" placeholder="Type contact name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Email*</b></Form.Label>
                <Form.Control type="email" placeholder="Type email address" />
              </Form.Group>
            </Form>
          </div>
        </div>
        <br />

        <div className="d-flex justify-content-between mt-5">
          <div/>
          <div className="d-flex justify-content-between gap-2 mt-5">
          <Button type="button" className={style.cancelBtn}>
              Cancel
            </Button>
            <Button  type="submit" className={style.submitBtn}>
             <IoIosSend/> Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
