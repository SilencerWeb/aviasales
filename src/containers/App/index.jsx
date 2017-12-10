import React from 'react';

import TicketList from '../../components/TicketList';

import tickets from './tickets.json';

class App extends React.Component {
  state = {
    tickets: tickets.tickets
  };

  render() {
    return (
      <div>
        <TicketList tickets={ this.state.tickets }/>
      </div>
    );
  }
}

export default App;