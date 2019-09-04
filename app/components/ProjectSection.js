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
      isOverlayShowing: false
    }
  },
  getDefaultProps: function(){
    return {
      projects: [ 
                  {name: 'sgt', 
                    shortDesc: "sandigtextiles.com, an artist's portfolio",
                    longDesc: 'Guided a textile artist through the process of picking a webhosting platform; designed and implemented her portfolio on Squarespace.',
                    isDesktopOnly: false,
                    titleImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/sandig-square.png',
                    mobileImage: 'https://s3-us-west-1.amazonaws.com/yuzu-r-codepen/portfolio/sandig-mob.png',
                    desktopImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/sandig-desktop.jpg',
                    liveLink: 'https://www.sandigtextiles.com',
                    githubLink: null
                  }, 
                  {name: 'hro', 
                    shortDesc: 'hroils.com, an e-commerce website',
                    longDesc: 'Starting with a domain name and logo, built out an online store on the Shopify platform with customized templates and the look and feel the owner was looking for.',
                    isDesktopOnly: false,
                    titleImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/hro_title.jpg',
                    mobileImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/hro_mobile_view2.jpg',
                    desktopImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/hro_desktop_view2.jpg',
                    liveLink: 'https://www.hroils.com',
                    githubLink: null
                  }, 
                  {name: 'kaizen', 
                    shortDesc: 'kaizen chess, play chess online',
                    longDesc: 'Play chess against your friends. If both players are online at the same time, the boards update automatically as each player moves; otherwise, a user dashboard keeps track of all games and whose turn it is. Built with Rails, jQuery, and Firebase to keep the players in sync.',
                    isDesktopOnly: true,
                    titleImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/kaizen-title.jpg',
                    mobileImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/kaizen-desktop-b.jpg',
                    desktopImage:'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/kaizen-desktop.jpg',
                    liveLink: 'http://kaizen-chess.herokuapp.com',
                    githubLink: 'https://github.com/yuzu-r/kaizen-chess'
                  },
                  {name: 'poke-trader', 
                    shortDesc: 'poké trader, trade with your friends',
                    longDesc: 'Are you missing Pokémon from your deck? Have duplicate cards that need a new home? Use Poké Trader to trade with other Pokémon TCG collectors. Built with Rails and React.',
                    isDesktopOnly: false,
                    titleImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/poke-trade_title_square.jpg',
                    mobileImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/poke-trade-desktop2.jpg',
                    desktopImage:'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/poke-trade-desktop.jpg',
                    liveLink: 'https://poke-trader-fcc.herokuapp.com/',
                    githubLink: 'https://github.com/yuzu-r/poke-trade'
                  },                  
                  {name: 'react-hack', 
                    shortDesc: 'react-hack, a dungeon crawler game',
                    longDesc: 'This is a retro desktop-style homage to NetHack with a little Zork thrown in for good measure. Built with React.',
                    isDesktopOnly: true,
                    titleImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/react-hack_title.jpg',
                    mobileImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/hack_desktop2.jpg',
                    desktopImage:'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/react-desktop.jpg',
                    liveLink: 'https://codepen.io/yuzu-r/debug/rWvPXG',
                    githubLink: 'https://codepen.io/yuzu-r/pen/rWvPXG'
                  },
                  {name: 'dogs', 
                    shortDesc: 'dogs with friends, a social coordination app',
                    longDesc: 'Dogs with Friends uses the Yelp API to look for dog parks in a specified area. Dog owners can then indicate which nearby parks they plan to visit. Built with Rails, React, and the Yelp API.',
                    isDesktopOnly: false,
                    titleImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/dwf_title_square.jpg',
                    mobileImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/dwf_mobile.jpg',
                    desktopImage:'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/dwf_desktop.jpg',
                    liveLink: 'https://dogs-with-friends.herokuapp.com',
                    githubLink: 'https://github.com/yuzu-r/dogs-with-friends'
                  },                  
                  {name: 'pomodoro', 
                    shortDesc: 'pomodoro, a responsive timer',
                    longDesc: 'A pomodoro timer with configurable work and break intervals and a sound option. Uses a jQuery mobile slider for friendly interval configuration on touch devices and canvas for graphics.',
                    isDesktopOnly: false,
                    titleImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/pomodoro_title_square.jpg',
                    mobileImage: 'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/pomodoro_mobile.jpg',
                    desktopImage:'https://yuzu-r-codepen.s3-us-west-1.amazonaws.com/portfolio/pomodoro_horizontal.jpg',
                    liveLink: 'https://codepen.io/yuzu-r/debug/ZpNZOJ',
                    githubLink: 'https://codepen.io/yuzu-r/pen/ZpNZOJ'
                  },

                ]
    }
  },
  closeOverlay: function(){
    this.setState({
      overlayStyleClass: 'overlay overlay-hidden',
      isOverlayShowing: false
    })
  },
  openOverlay: function(me){
    this.setState({
      currentProjectName: me.name,
      currentProjectDescription: me.shortDesc,
      overlayStyleClass: 'overlay overlay-visible',
      isOverlayShowing: true
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
            closeMe={this.closeOverlay}
            isOverlayShowing={this.state.isOverlayShowing} />
        </div>
      </div>
    )
  }
})

module.exports = ProjectSection;