import React from "react";
import "../components/Nav.css";
import "../components/Animation.css";
import "../components/Media.css";
import { Navbar, Nav, Container, SplitButton, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
      borderBottom: '1px solid red',
      borderRadius: '5px',
    },
  },
}));

export default function Navbars() {
    const classes = useStyles();
    return (
        <div className="Nav">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/main" className="logos">React-Bootstrap</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/main" href="#"><Button className="btn-hover-navs color-1" variant="outline-dark">Головна</Button></Link></Nav.Link>
                            <Nav.Link href="#someinfo"><Link to="/info" href="#"><Button className="btn-hover-navs color-2" variant="outline-dark">Страви</Button></Link></Nav.Link>
                            <Nav.Link href="#contacts"><Link to="/contact" href="#"><Button className="btn-hover-navs color-3" variant="outline-dark">Контакти</Button></Link></Nav.Link>
                            <Nav.Link href="#">
                                {['Також'].map(
                                    (variant) => (
                                        <SplitButton
                                            key={variant}
                                            id={`dropdown-split-variants-${variant}`}
                                            variant={variant.toLowerCase()}
                                            className="btn-hover-navs color-8"
                                            variant="outline-danger"
                                            title={variant}
                                        >
                                        <Dropdown.Item eventKey="1"><Link className="item_button" to="/fotogalery" href="#">Фотогалерея</Link></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><Link className="item_button" to="/booking" href="#">Бронювання</Link></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><Link className="item_button" to="/contact" href="#">Active Item</Link></Dropdown.Item>
                                        <Dropdown.Item eventKey="4"><Link className="item_button" to="/contact" href="#">Separated link</Link></Dropdown.Item>
                                        </SplitButton>
                                    )
                                )}
                            </Nav.Link>
                        </Nav>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Пошук" variant="outlined" color="secondary" />  
                        </form>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
        </div>
    );
}