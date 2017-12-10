import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return <button className={ props.className }>{ props.children }</button>;
}

export default styled(Button)`
  
`;