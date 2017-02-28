import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

import ChatComponent from './chat';

withRouter
class Application1Sidebar extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
           
          </Row>
        </Grid>
      </div>
    );
  }
}

withRouter
export default class SidebarContainer extends React.Component {
  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={12} id='avatar-col'>
                <div style={{top: 23, fontSize: 32, lineHeight: 1, position: 'relative'}}>2017-2-28</div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div id='sidebar-container'>
          <Sidebar sidebar={0}>
              <ChatComponent />
          </Sidebar>
          <Sidebar sidebar={1}>
              <Application1Sidebar /> 
          </Sidebar>
        </div>
      </div>
    );
  }
}
