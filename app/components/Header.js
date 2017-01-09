var React = require('react');
var {Navbar, Nav, NavItem, Button} = require('react-bootstrap/lib');
require('../main.css');

var Header = React.createClass({
  render: function(){
    return (
      <Navbar fixedTop collapseOnSelect className='speshul'>
        <Navbar.Header >
          <a className='btn speshul' href="#">MY NAME HERE</a>
          <Navbar.Toggle />
        </Navbar.Header >
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className='btn speshul'>ABOUT</NavItem>
            <NavItem eventKey={2} href="#" className='btn btn-default speshul'>PROJECTS</NavItem>
            <NavItem eventKey={3} href="#" className='btn btn-default speshul'>CONTACT</NavItem>
          </Nav>
        </Navbar.Collapse >
      </Navbar>
    )
  }
})

module.exports = Header;