import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return <button className={ props.className }>{ props.children }</button>;
}

export default styled(Button)`
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  background: #ff6d00;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: 0.2s;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background: #ff8124;
  }
`;