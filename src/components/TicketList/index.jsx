import React from 'react';
import styled from 'styled-components';

import Ticket from '../Ticket';

function TicketList(props) {
  let tickets = props.tickets.length ? props.tickets.map((ticket) => {
    return <Ticket ticket={ ticket } key={ ticket.id }/>;
  }) : <span>Упс, ничего не найдено :с</span>;

  return (
    <div className={ props.className }>
      { tickets }
    </div>
  );
}

export default styled(TicketList)`
  flex: 0 1 560px;
`;