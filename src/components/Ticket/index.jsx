import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/turkish-airlines-logo.png';
import airplane from '../../assets/images/airplane.svg';

import Button from '../Button';

function Ticket(props) {
  let localStringSettings = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  };

  let stops = props.ticket.stops ?
    <span>
      { props.ticket.stops } пересадки
    </span> : null;

  return (
    <div className={ props.className }>
      <div className="actions">
        <a href="#">
          <img src={ logo } alt="Turkish Airlines"/>
        </a>
        <Button>Купить за { props.ticket.price }р.</Button>
      </div>
      <div className="info">
        <div className="departure">
          <span className="time">{ props.ticket.departure_time }</span>
          <span className="place">{ props.ticket.origin }, { props.ticket.origin_name }</span>
          <span className="date">
            { new Date(props.ticket.departure_date).toLocaleString('ru', localStringSettings) }
            </span>
        </div>
        <div className="stops">
          { stops }
          <img src={ airplane } alt=""/>
        </div>
        <div className="arrival">
          <span className="time">{ props.ticket.arrival_time }</span>
          <span className="place">{ props.ticket.destination }, { props.ticket.destination_name }</span>
          <span className="date">
            { new Date(props.ticket.arrival_date).toLocaleString('ru', localStringSettings) }
            </span>
        </div>
      </div>
    </div>
  );
}

export default styled(Ticket)`
  display: flex;
  max-width: 560px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 #5b89a4;
  margin-bottom: 20px;
  transition: 0.3s;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    box-shadow: 0 5px 25px 0 #5b89a4;
    transform: scale(1.005);
  }
  
  .actions {
    flex: 0 1 30%;
    font-size: 0;
    text-align: center;
    border-right: 1px solid #eceff1;
    padding: 25px 20px;
    
    img {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }
  
  .info {
    flex: 0 1 70%;
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }
  
  .departure,
  .arrival {
    flex: 0 1 35%;
    display: flex;
    flex-direction: column;
  }
  
  .arrival {
    text-align: right;
  }
  
  .stops {
    position: relative;
    flex: 0 1 30%;
    text-align: center;
    
    img {
      position: absolute;
      top: 15px;
      left: 0;
      max-width: 100%;
    }
  }
  
  .time {
    font-size: 32px;
    margin-bottom: 10px;
  }
  
  .place {
    font-size: 12px;
  }
  
  .date {
    font-size: 12px;
    color: #8b9497;
  }
  
  .stops {
    font-size: 10px;
    text-transform: uppercase;
    color: #8b9497;
  }
`;