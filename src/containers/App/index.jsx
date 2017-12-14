import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';
import tickets from './tickets.json';

import Filter from '../../components/Filter';
import TicketList from '../../components/TicketList';

class App extends React.Component {
  constructor() {
    super();

    tickets.tickets.reduce((prevId, ticket) => {
      ticket.id = prevId;
      return prevId + 1;
    }, 0);

    this.state = {
      tickets: tickets.tickets,
      filteredTickets: tickets.tickets
    };
  }

  filterTickets = (filters) => {
    let tickets = [ ...this.state.tickets ];

    let filteredTickets = tickets.filter((ticket) => {
      return filters.some((filter) => {
        return ticket.stops === filter || filter === 'all';
      });
    });

    this.setState({
      filteredTickets: filteredTickets
    });
  };

  render() {
    return (
      <div className={ this.props.className }>
        <div className="header">
          <a href="#">
            <img src={ logo } alt="Aviasales"/>
          </a>
        </div>
        <div className="search">
          <Filter filter={ this.filterTickets }/>
          <TicketList tickets={ this.state.filteredTickets }/>
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
  
  .search {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;