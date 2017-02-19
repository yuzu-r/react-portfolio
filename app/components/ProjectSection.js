var React = require('react');
require('../main.css');
var ProjectGrid = require('./ProjectGrid');
var ProjectOverlay = require('./ProjectOverlay');

var ProjectSection = React.createClass({
  getInitialState: function(){
    return {
      currentProjectName: 'hro',
      overlayStyleClass: 'overlay overlay-hidden',
      imgStyleClass: null,
      figcaptionStyleClass: null,
    }
  },
  getDefaultProps: function(){
    return {
      projects: [ {name: 'hro', 
                    shortDesc: 'hroils.com, an e-commerce website',
                    longDesc: 'Starting with a domain name and logo, built out an online store on the Shopify platform with customized templates and the look and feel the owner was looking for.',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hro-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hro_mobile_view_mini.png',
                    desktopImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hro_desktop_320x282.png',
                    liveLink: 'https://www.hroils.com',
                    githubLink: null
                  }, 
                  {name: 'kaizen', 
                    shortDesc: 'kaizen chess, play chess online',
                    longDesc: 'Play chess against your friends. If both players are online at the same time, the boards update automatically as each player moves; otherwise, a user dashboard keeps track of all games and whose turn it is. Built with Rails, jQuery, and Firebase to keep the players in sync.',
                    isDesktopOnly: true,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/kaizen-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/kaizen-chess-b.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/kaizen-chess-a.png',
                    liveLink: 'http://kaizen-chess.herokuapp.com',
                    githubLink: 'https://github.com/yuzu-r/kaizen-chess'
                  },
                  {name: 'poke-trader', 
                    shortDesc: 'poké trader, trade with your friends',
                    longDesc: 'Are you missing Pokémon from your deck? Have duplicate cards that need a new home? Use Poké Trader to trade with other Pokémon TCG collectors. Built with Rails and React.',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/poke_square.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/poke_mobile.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/poke_desktop.png',
                    liveLink: 'https://poke-trader-fcc.herokuapp.com/',
                    githubLink: 'https://github.com/yuzu-r/poke-trade'
                  },                  
                  {name: 'react-hack', 
                    shortDesc: 'react-hack, a dungeon crawler game',
                    longDesc: 'This is a retro desktop-style homage to NetHack with a little Zork thrown in for good measure. Built with React.',
                    isDesktopOnly: true,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/hack-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/react-hack-b.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/react-hack-a.png',
                    liveLink: 'https://codepen.io/yuzu-r/debug/rWvPXG',
                    githubLink: 'https://codepen.io/yuzu-r/pen/rWvPXG'
                  },
                  {name: 'dogs', 
                    shortDesc: 'dogs with friends, a social coordination app',
                    longDesc: 'Dogs with Friends uses the Yelp API to look for dog parks in a specified area. Dog owners can then indicate which nearby parks they plan to visit. Built with Rails, React, and the Yelp API.',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/dwf_title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/dwf_mobile.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/dwf_desktop.png',
                    liveLink: 'https://dogs-with-friends.herokuapp.com',
                    githubLink: 'https://github.com/yuzu-r/dogs-with-friends'
                  },                  
                  {name: 'pomodoro', 
                    shortDesc: 'pomodoro, a responsive timer',
                    longDesc: 'A pomodoro timer with configurable work and break intervals and a sound option. Uses a jQuery mobile slider for friendly interval configuration on touch devices and canvas for graphics.',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/pomodoro-title.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/pomodoro_p.png',
                    desktopImage:'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/pomodoro_l.png',
                    liveLink: 'https://codepen.io/yuzu-r/debug/ZpNZOJ',
                    githubLink: 'https://codepen.io/yuzu-r/pen/ZpNZOJ'
                  },

                ]
    }
  },
  closeOverlay: function(){
    this.setState({
      overlayStyleClass: 'overlay overlay-hidden'
    })
  },
  openOverlay: function(me){
    this.setState({
      currentProjectName: me.name,
      currentProjectDescription: me.shortDesc,
      overlayStyleClass: 'overlay overlay-visible'
    });      
  },
  openFigCaption: function(me){
    if (this.state.imgStyleClass === 'show-figcaption' && me.name === this.state.currentProjectName) {
      this.setState({
        imgStyleClass: null,
        figcaptionStyleClass: null
      })
    }
    else {
      this.setState({
        currentProjectName: me.name,
        imgStyleClass: 'show-figcaption',
        figcaptionStyleClass: 'show-figcaption'
      })      
    }
  },
  openMe: function(me) {
    // this is the click event from each project
    // it does different things depending on touchevent or not touchevent
    if (Modernizr.touchevents) {
      this.openFigCaption(me);
    }
    else {
      this.openOverlay(me);
    }
  },
  render: function(){
    return (
      <div className='section project'>
        <span className='anchor-pad' id='portfolio'></span>
        <div className='container'>
          <h3 className='text-center'>MY PROJECTS</h3>
          <ProjectGrid 
            projects={this.props.projects}
            openMe={this.openMe}
            openOverlay={this.openOverlay}
            figcaptionStyleClass={this.state.figcaptionStyleClass}
            imgStyleClass={this.state.imgStyleClass}
            currentProjectName={this.state.currentProjectName} />
          <ProjectOverlay 
            styleClass={this.state.overlayStyleClass}
            currentProject={this.state.currentProjectName}
            projects={this.props.projects}
            closeMe={this.closeOverlay} />
        </div>
      </div>
    )
  }
})

module.exports = ProjectSection;