import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, Row, Col, Card, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaInstagram, FaFacebook, FaTimes } from "react-icons/fa";

const StarbucksClone = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://www.starbucks.in/assets/icon/logo.png"
              alt="Starbucks Logo"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="me-5 text-success fw-bold border-bottom border-success">Home</Nav.Link>
              <Nav.Link href="#gift" className="me-5">Gift</Nav.Link>
              <Nav.Link href="#order"className="me-5">Order</Nav.Link>
              <Nav.Link href="#pay" className="me-5">Pay</Nav.Link>
              <Nav.Link href="#store" className="me-10">Store</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <InputGroup className="ms-5 rounded-pill shadow-sm overflow-hidden" style={{ maxWidth: "300px" }}>
                <InputGroup.Text className="bg-white border-0">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Looking for something specific?"
                  className="border-0"
                  style={{ padding: "10px 15px", fontSize: "16px" }}
                />
              </InputGroup>
            </Form>
            <img className="ms-5"
              src="https://www.starbucks.in/assets/icon/account_thin.svg"
              alt="Starbucks Logo"
              height="40"
            />
            {/* <FaUserCircle className="ms-3 text-dark bg-light fs-4" /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Banner */}
      <div className="bg-teal-950 text-white text-end py-4 mt-10 px-10">
        <Button variant="outline-light" className="mt-5 me-5 rounded-pill">Know More</Button>
      </div>

      {/* Promotional Banner */}
      <Container className="my-5">
        <Card className="bg-success text-white p-4">
          <Row className="align-items-center">
            <Col md={2}>
              <img
                src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png"
                alt="Beverage Subscription"
                style={{width:"100px"}}
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={8}>
              <h5>Starbucks</h5>
              <h3 className="fw-bold">Beverage Subscription</h3>
              <p>Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply.</p>
            </Col>
            <Col md={2} className="text-end">
              <Button variant="light" className="text-success rounded-pill ps-5 pe-5 p-2">Know More</Button>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Handcrafted Curations */}
      <Container className=" my-5">
        <h3 className="fw-bold">Handcrafted Curations</h3>
        <Row className="mt-5 ms-5 ps-5 justify-content-center">
          <Col xs={6} md={3} className="mb-3">
            <img
              src="https://www.starbucks.in/assets/icon/Bestseller.webp"
              alt="Curated Item 1"
              className="img-fluid rounded-circle shadow"
              width="100"
            />
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <img
              src="https://www.starbucks.in/assets/icon/Drinks.webp"
              alt="Curated Item 2"
              className="img-fluid rounded-circle shadow"
              width="100"
            />
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <img
              src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Food.jpg"
              alt="Curated Item 3"
              className="img-fluid rounded-circle shadow"
              width="100"
            />
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <img
              src="https://starbucksstatic.cognizantorderserv.com/Category/Small/ReadyToEat.jpg"
              alt="Curated Item 4"
              className="img-fluid rounded-circle shadow"
              width="100"
            />
          </Col>
          
        </Row>
      </Container>

            {/* Barista Recommends Section */}
            <section className="bg-[#f3f1ee] py-5">
        <Container>
          <h3 className="fw-bold text-[#1e3932]">Barista Recommends</h3>
          <a href="#" className="text-success fw-bold float-end">View Menu</a>
          <Row className="mt-4">
            <Col md={4} sm={6} xs={12}>
              <Card className="shadow-sm rounded p-3 border-0">
                <Row className="align-items-center">
                  <Col xs={4}>
                    <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp" alt="Java Chip Frappuccino" className="img-fluid rounded" />
                  </Col>
                  <Col xs={8}>
                    <h5 className="fw-bold">Java Chip Frappuccino</h5>
                    <p className="text-muted">TALL (354 mL), 392 kcal</p>
                    <h6 className="fw-bold">₹ 420.00</h6>
                    <Button variant="success" className="fw-bold rounded-pill">Add Item</Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

       {/* Hero Section */}
       <section className="bg-[#f3f1ee] py-5 text-center">
        <Container>
          <div className="d-flex justify-content-between">
          <h3 className="fw-bold text-[#1e3932]">Learn more about the world of coffee!</h3>
          <a href="#" className="text-success fw-bold float-end">Discover More</a>
          </div>
          <div className="position-relative overflow-hidden mt-4 rounded" style={{ maxWidth: "100%", height: "400px" }}>
            <img
              src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg"
              alt="Coffee Brewing"
              className="w-100 h-100 object-fit-cover"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-start p-4 text-white">
              <span className="badge bg-success mb-2">Coffee Culture</span>
              <h3 className="fw-bold">Art & Science Of Coffee Brewing</h3>
              <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
              <Button variant="light" className="fw-bold rounded-pill">Learn More</Button>
            </div>
          </div>
        </Container>
      </section>


      {/*  */}

      
    <section className="py-10 px-5 md:px-20">
      <h2 className="text-2xl font-bold">Bestseller</h2>
      <p className="text-gray-600 mb-6">
        Everyone's favorite Starbucks put together in a specially curated collection.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-lg border flex flex-col items-center">
          <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/116569.png" alt="Pink Drink" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h3 className="font-bold text-lg text-center">Pink Drink</h3>
          <p className="text-gray-500 text-sm text-center">127 kcal</p>
          <p className="text-gray-600 text-sm text-center mt-2">A vibrant mix of strawberry açaí and coconut flavors, bursti...</p>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-lg font-bold">₹ 367.50</span>
            <button className="bg-success text-light px-4 py-2 mt-2 rounded-full cursor-pointer rounded-pill">Add Item</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg border flex flex-col items-center">
          <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/100501.jpg" alt="Java Chip Frappuccino" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h3 className="font-bold text-lg text-center">Java Chip Frappuccino</h3>
          <p className="text-gray-500 text-sm text-center">TALL (345 ml) - 392 kcal</p>
          <p className="text-gray-600 text-sm text-center mt-2">Mocha sauce and Frappuccino® chips blended with with Frappu...</p>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-lg font-bold">₹ 420.00</span>
            <button className="bg-success text-light px-4 py-2 mt-2 rounded-full cursor-pointer rounded-pill">Add Item</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg border flex flex-col items-center">
          <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/103515.jpg" alt="Double Chocolate Chip Frappuccino" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h3 className="font-bold text-lg text-center">Double Chocolate Chip Frappuccino</h3>
          <p className="text-gray-500 text-sm text-center">TALL (345 ml) - 415 kcal</p>
          <p className="text-gray-600 text-sm text-center mt-2">Rich mocha-flavored sauce meets up with chocolaty chips, mil...</p>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-lg font-bold">₹ 441.00</span>
            <button className="bg-success text-light px-4 py-2 mt-2 rounded-full cursor-pointer rounded-pill">Add Item</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg border flex flex-col items-center">
          <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/100433.jpg" alt="Caffe Americano" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h3 className="font-bold text-lg text-center">Caffe Americano</h3>
          <p className="text-gray-500 text-sm text-center">SHORT (237 ml) - 0 kcal</p>
          <p className="text-gray-600 text-sm text-center mt-2">Rich in flavour, full-bodied espresso with hot water in true...</p>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-lg font-bold">₹ 299.25</span>
            <button className="bg-success text-light px-4 py-2 mt-2 rounded-full cursor-pointer rounded-pill">Add Item</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg border flex flex-col items-center">
          <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/100419.jpg" alt="Cappuccino" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h3 className="font-bold text-lg text-center">Cappuccino</h3>
          <p className="text-gray-500 text-sm text-center">SHORT (237 ml) - 104 kcal</p>
          <p className="text-gray-600 text-sm text-center mt-2">Dark, Rich in flavour espresso lies in wait under a smoothed...</p>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-lg font-bold">₹ 315.00</span>
            <button className="bg-success text-light px-4 py-2 mt-2 rounded-full cursor-pointer rounded-pill">Add Item</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg border flex flex-col items-center">
          <img src="https://starbucksstatic.cognizantorderserv.com/Items/Small/105468.jpg" alt="Cold Coffee" className="w-24 h-24 rounded-full object-cover mb-4" />
          <h3 className="font-bold text-lg text-center">Cold Coffee</h3>
          <p className="text-gray-500 text-sm text-center">TALL (345 ml) - 354 kcal</p>
          <p className="text-gray-600 text-sm text-center mt-2">Our signature rich in flavour espresso blended with delicate...</p>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-lg font-bold">₹ 388.50</span>
            <button className="bg-success text-light px-4 py-2 mt-2 rounded-full cursor-pointer rounded-pill">Add Item</button>
          </div>
        </div>
      </div>
    </section>

     {/* Footer */}
     <footer className="bg-[#0e382c] text-white py-10 px-5 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <img
              src="https://www.starbucks.in/assets/icon/logo.png"
              alt="Starbucks Logo"
              className="w-16 h-16"
            />
          </div>

          <div>
            <h4 className="font-bold">About Us</h4>
            <ul className="mt-3 space-y-2">
              <li>Our Heritage</li>
              <li>Coffeehouse</li>
              <li>Our Company</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Responsibility</h4>
            <ul className="mt-3 space-y-2">
              <li>Diversity</li>
              <li>Community</li>
              <li>Ethical Sourcing</li>
              <li>Environmental Stewardship</li>
              <li>Learn More</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Starbucks India Mobile App Terms of Use</li>
              <li>Customer Service</li>
              <li>Delivery</li>
              <li>Loyalty Program Terms and Conditions</li>
              <li>Beverage Subscription</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="flex space-x-4">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaTimes size={24} />
          </div>

          <div className="flex space-x-4 mt-5 md:mt-0">
            <img
              src="https://www.starbucks.in/assets/images/appstoreiOS.png"
              alt="App Store"
              className="w-36"
            />
            <img
              src="https://www.starbucks.in/assets/images/appstoreAndroid.png"
              alt="Google Play"
              className="w-36"
            />
          </div>
        </div>

        <div className="border-t border-gray-600 mt-5 pt-5 text-center text-sm">
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6">
            <span>Web Accessibility</span>
            <span>Privacy Statement</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
          </div>
          <p className="mt-3">&copy; 2025 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default StarbucksClone;
