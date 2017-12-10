import React from 'react';

import Ticket from '../Ticket';

function TicketList(props) {
  return (
    <div>
      { props.tickets.map((ticket) => {
        return <Ticket ticket={ ticket } key={ ticket.id }/>;
      }) }
    </div>
  );
}

export default TicketList;