import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";

function App() {
  var product = [
    {
      name: "Apple iPhone 14 Plus",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31laW9Ex46L._SY445_SX342_QL70_FMwebp_.jpg",
      price: 89900,
      rating: 4.6,
    },
    {
      name: "Sumsung Galaxy S22 Ultra 5G",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpg",
      price: 109999,
      rating: 4,
    },
    {
      name: "OnePlus 11R 5G",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613SAOPmLeL._SX679_.jpg",
      price: 43000,
      rating: 3.5,
    },
    {
      name: "Google Pixel 7 Pro",
      image:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70",
      price: 80990,
      rating: 4.5,
    },
    {
      name: "IQOO 9 5G",
      image:
        "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/mobile/a/v/9/9-5g-i2017-iqoo-original-imagg8b982jyznyz.jpeg?q=70",
      price: 36990,
      rating: 4.0,
    },
    {
      name: "REDMI Note 12 Pro 5G",
      image:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70",
      price: 24999,
      rating: 3.8,
    },
    {
      name: "Infinix Zero 5G 2023",
      image:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/t/7/j/-original-imagmhszyfsbqfth.jpeg?q=70",
      price: 16999,
      rating: 3.2,
    },
    {
      name: "Nothing Phone",
      image:
        "https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/4/7/l/-original-imagg4y3grhaxckf.jpeg?q=70",
      price: 29499,
      rating: 3.5,
    }
  ];

  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <NavBar counter={counter} />
      <Header />
      <div className="container text-center">
        <div className="row justify-content-center">
            {product.map((data, idx) => (
              <Cards
                data={data}
                idx={idx}
                counter={counter}
                setCounter={setCounter}
              />
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

function NavBar(props) {
  return (
    <Navbar bg="light" className="sticky-top"  expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Mobile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mobile Brand</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mobile Accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Badge bg="warning" text="dark">
          🛒{props.counter} Card 
        </Badge>
      </Container>
    </Navbar>
  );
}

function Header() {
  return (
    <div key="8" className="header">
      <h1>Online Shopping</h1>
      <h5></h5>
    </div>
  );
}

function Cards({ data, idx, counter, setCounter }) {
  const [show, setShow] = useState(true);
  function addToCard() {
    setShow(!show);
    setCounter(counter + 1);
  }

  function removeFromCard() {
    setShow(!show);
    setCounter(counter - 1);
  }

  return (
    <div className="col-xs-5 col-sm-5 col-md-4 col-lg-3 cards">
      <Card  key={idx} style={{ width: "18rem" }}>
      <Card.Img variant="top" className="img-fluid" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>Rs {data.price}</Card.Text>
        <Card.Text>Rating: {data.rating}</Card.Text>
        {show ? (
          <Button onClick={addToCard} variant="primary">
            Add Card
          </Button>
        ) : (
          ""
        )}

        {!show ? (
          <Button onClick={removeFromCard} variant="danger">
            Remove Card
          </Button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
    </div>
  );
}


function Footer() {
  return (
    <div className="footer">
      <p>Copyright © Your Website 2022</p>
    </div>
  );
}