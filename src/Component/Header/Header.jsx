import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "@/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
function Header() {
  const social = [
    {
      icon: <FaFacebook />,
      pathName: "#",
      color: "#4267B2",
    },
    {
      icon: <FaTwitter />,
      color: "#1DA1F2",
      pathName: "#",
    },
    {
      icon: <IoLogoLinkedin />,
      pathName: "#",
      color: " #0e76a8",
    },
  ];
  return (
    <Navbar style={{ padding: "0px 20px" }} expand="lg" className="transparent headerBox">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo.src} className="headerlogo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav

            className= " justify-content-center me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" , marginLeft:"auto" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>

            <Nav.Link href="#">
              Contact Us
            </Nav.Link>
          </Nav>

          <div
            style={{
              //   border: "1px solid red",
              display: "flex",
              gap: "20px",
            }}
          >
            {social.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{
                    color: `${item.color} !important`,
                    fontSize: "30px",
                  }}
                >
                  <Link
                    style={{
                      color: `${item.color} !important`,
                    }}
                    href={item.pathName}
                  >
                    {item.icon}
                  </Link>
                </div>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
