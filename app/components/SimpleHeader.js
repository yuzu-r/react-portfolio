var React = require('react');
require('../main.css');

var SimpleHeader = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top speshul">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#about"><button type="button" className="btn speshul navbar-btn navbar-left">TRACY KANESHIRO</button></a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#contact" data-toggle="collapse" data-target=".navbar-collapse.in">
                <button type="button" className="btn speshul navbar-btn">CONTACT</button></a>
              </li>
              <li><a href="#portfolio" data-toggle="collapse" data-target=".navbar-collapse.in">
                <button type="button" className="btn speshul navbar-btn">PROJECTS</button></a>
              </li>
              <li><a href="#about" data-toggle="collapse" data-target=".navbar-collapse.in">
                <button type="button" className="btn speshul navbar-btn">ABOUT</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = SimpleHeader;