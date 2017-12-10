import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';
import tickets from './tickets.json';

import TicketList from '../../components/TicketList';

class App extends React.Component {
  state = {
    tickets: tickets.tickets
  };

  render() {
    return (
      <div className={ this.props.className }>
        <div className="header">
          <img src={ logo } alt="Aviasales"/>
        </div>
        <div className="content">
          <TicketList tickets={ this.state.tickets }/>
        </div>
      </div>
    );
  }
}

export default styled(App)`
  max-width: 800px;
  margin: 100px auto;
  
  .header {
    text-align: center;
    margin-bottom: 60px;
    
    img {
      vertical-align: top;
    }
  }
  
  .content {
    display: flex;
    justify-content: center;
  }
`;