var React = require('react');
require('../main.css');

var ContactSection = React.createClass({
    render: function(){
    return (
      <div className='section contact'>
        <span className='anchor-pad' id='contact'></span>
        <div className='container'>
          <h3 className='text-center'>CONTACT ME</h3>
          <br/>
          <p className="text-center">This page was created by me, with a little 
            <a target='_blank' href="http://stackoverflow.com/"> help</a> 
            <a target='_blank' href="http://freecodecamp.com"> from</a>
            <a target='_blank' href="http://tympanus.net/codrops/category/tutorials"> my</a>
            <a target='_blank' href="http://getbootstrap.com"> internet</a>
            <a target='_blank' href="http://coolors.co"> friends</a>.
          </p>
          <br/><br/>
          <div className="row display-table">
            <div className="col-md-3 display-cell">
              <a className="btn speshul spacer" href="http://github.com/yuzu-r" target="_blank">
                <i className="fa fa-github fa-3x" aria-hidden="true"></i></a>
              <a className="btn speshul" href="https://www.linkedin.com/in/tracy-kaneshiro-a967235" target="_blank">
                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
            </div>
            <div className="col-md-9 display-cell">
              <p>Have a comment or question?&nbsp;
                <a href="https://yuzur.wufoo.com/forms/m1fnqxyy0x1w9pz/" target="_blank"> 
                I'd love to hear from you!
                </a>
              </p> 
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ContactSection;