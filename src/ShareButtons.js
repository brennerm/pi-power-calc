import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { EmailIcon, EmailShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, TelegramIcon, TelegramShareButton } from 'react-share';
import './ShareButtons.css';

export class ShareButtons extends React.Component {
  render() {
    return <Navbar id="share-buttons">
      <Nav className="mx-auto">
        <TwitterShareButton title={this.props.title} url={this.props.url}>
          <TwitterIcon></TwitterIcon>
        </TwitterShareButton>
        <EmailShareButton title={this.props.title} url={this.props.url}>
          <EmailIcon></EmailIcon>
        </EmailShareButton>
        <RedditShareButton title={this.props.title} url={this.props.url}>
          <RedditIcon></RedditIcon>
        </RedditShareButton>
        <TelegramShareButton title={this.props.title} url={this.props.url}>
          <TelegramIcon></TelegramIcon>
        </TelegramShareButton>
      </Nav>
    </Navbar>
  }
}

export default ShareButtons;
