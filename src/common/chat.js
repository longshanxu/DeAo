import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';


import {
  Row,
  Col,
  Icon,
  Grid,
  Label,
  Badge,
  Panel,
  Button,
  PanelLeft,
  PanelBody,
  ListGroup,
  LoremIpsum,
  ButtonGroup,
  ButtonToolbar,
  ListGroupItem,
  PanelContainer,
} from '@sketchpixy/rubix';

class ChatNav extends React.Component {
  render() {
    return (
      <ul className='sidebar-nav' {...this.props}>
        {this.props.children}
      </ul>
    );
  }
}

class ChatItem extends React.Component {
  render() {
    var isOffline = true;
    var status = 'border-darkgray';
    if(this.props.idle) status = 'border-yellow';
    if(this.props.busy) status = 'border-red';
    if(this.props.online) status = 'border-green';
    if(status !== 'border-darkgray') isOffline = false;

    let props = {
      ...this.props,
    };

    delete props.idle;
    delete props.busy;
    delete props.online;
    delete props.name;
    delete props.avatar;

    return (
      <li tabIndex='-1' {...props}>
        <a href='#' tabIndex='-1'>
          <img src={`/imgs/app/avatars/${this.props.avatar}.png`} width='30' height='30' className={status} style={{borderWidth: 2, borderStyle: 'solid', borderRadius: 100, padding: 2, position: 'relative', top: -7, opacity: isOffline ? 0.4 : 1}} />
          <span className='name' style={{position: 'relative', top: -2, opacity: isOffline ? 0.4 : 1}}>{this.props.name}</span>
        </a>
      </li>
    );
  }
}

withRouter
class InboxItem extends React.Component {
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.router.push('/ltr/mailbox/mail');
  }
  render() {
    var classes = classNames({
      'inbox-item': true,
      'unread': this.props.unread
    });

    var linkProps = {
      href: '/ltr/mailbox/mail',
      onClick: ::this.handleClick,
      className: classes,
    };

    return (
      <a {...linkProps}>
        <div className='inbox-avatar'>
          <img src={this.props.src} width='40' height='40' className={this.props.imgClass + ' hidden-xs'} />
          <div className='inbox-avatar-name'>
            <div><small><span>{this.props.date}</span></small></div>
            <div className='fg-darkgrayishblue75'>{this.props.name}</div>
            <div><small><span>{this.props.description}</span></small></div>
          </div>
        </div>
      </a>
    );
  }
}

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
                <InboxItem itemId={1} unread src='/imgs/app/avatars/1.png' name='临床医学' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>张老师: </strong><span></span></span>} date='10：00-11：00'/>
                <InboxItem itemId={2} src='/imgs/app/avatars/1.png'  name='设计几何学' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>张老师: </strong><span></span></span>} date='11：00-12：00'/>
                <InboxItem itemId={3} src='/imgs/app/avatars/1.png'  name='户外实习' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>张老师: </strong><span></span></span>} date='13：00-14：00'/>
                <InboxItem itemId={4} src='/imgs/app/avatars/1.png' name='英语口语' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>王老师: </strong><span></span></span>} date='15：00-16：00'/>
                <InboxItem itemId={5} src='/imgs/app/avatars/1.png'  name='应急科学' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>王老师: </strong><span></span></span>} date='17：00-18：00'/>
                <InboxItem itemId={6}  src='/imgs/app/avatars/1.png' name='户外实习' labelValue='SOME LABEL' labelClass='bg-green fg-white' description={<span><strong>王老师: </strong><span></span></span>} date='19：00-20：00'/>                                                             
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
