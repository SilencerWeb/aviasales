import React from 'react';
import styled from 'styled-components';

function Checkbox(props) {
  let only = props.filter !== 'all' ? <span onClick={ props.uncheckAll }>Только</span> : null;

  return (
    <div className={ props.className } onClick={ () => props.toggle(props.name) }>
      <input type="checkbox" checked={ props.checked }/>
      { props.text }
      { only }
    </div>
  );
}

export default styled(Checkbox)`
  position: relative;
  display: block;
  font-size: 13px;
  padding: 8px 15px 8px 45px;
  transition: 0.3s;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 15px;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 1px solid #d2d5d6;
    border-radius: 3px;
    transform: translateY(-50%);
    transition: 0.3s;
    
    ${props => props.checked && `
      background: #f2fcff no-repeat center / 60%;
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5cHgiIGhlaWdodD0iN3B4IiB2aWV3Qm94PSIwIDAgOSA3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPlJlY3RhbmdsZSAzMjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSIxMDI0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIzLjAwMDAwMCwgLTI1NS4wMDAwMDApIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPiAgICAgICAgPGcgaWQ9IkZpbHRlci3igJMtU3RvcC1RdWFudGl0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAzLjAwMDAwMCwgMTY0LjAwMDAwMCkiIHN0cm9rZT0iIzNFOUNFOCIgc3Ryb2tlLXdpZHRoPSIyIj4gICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlJlY3RhbmdsZS0zMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuNTAwMDAwLCA5NC41MDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuNTAwMDAwLCAtOTQuNTAwMDAwKSAiIHBvaW50cz0iMjQuNSA5MS41IDI2LjUgOTMuNSAyMi41IDk3LjUiPjwvcG9seWxpbmU+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);
      border-color: #3e9ce8;
    `}
  }
  
  &:hover {
    background: #f1fcff;
    
    span {
      visibility: visible;
      opacity: 1;
    }
  }
    
  span {
    position: absolute;
    top: 50%;
    right: 15px;
    font-size: 11px;
    color: #3e9ce8;
    text-transform: uppercase;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-50%);
    transition: 0.3s;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  input {
    display: none;
  }
`;