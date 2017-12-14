import React from 'react';
import styled from 'styled-components';

import CheckboxList from '../CheckboxList';

class Filter extends React.Component {
  state = {
    checkboxes: [
      {
        name: 'all',
        checked: true,
        filter: 'all',
        text: 'Все'
      },
      {
        name: 'without-stop',
        checked: false,
        filter: 0,
        text: 'Без пересадок'
      },
      {
        name: '1-stop',
        checked: false,
        filter: 1,
        text: '1 пересадка'
      },
      {
        name: '2-stop',
        checked: false,
        filter: 2,
        text: '2 пересадка'
      },
      {
        name: '3-stop',
        checked: false,
        filter: 3,
        text: '3 пересадка'
      }
    ]
  };

  componentWillMount() {
    this.filter();
  }

  filter = () => {
    let checkboxes = [ ...this.state.checkboxes ];

    let filters = checkboxes.filter((checkbox) => {
      return checkbox.checked;
    }).map((checkbox) => {
      return checkbox.filter;
    });

    this.props.filter(filters);
  };

  toggleCheckbox = (checkboxName) => {
    let checkboxes = [ ...this.state.checkboxes ];
    let toggleCheckboxIndex = checkboxes.findIndex((checkbox) => {
      return checkbox.name === checkboxName;
    });


    if (checkboxes[ toggleCheckboxIndex ].filter === 'all' && !checkboxes[ toggleCheckboxIndex ].checked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = checkbox.filter === 'all';
        return checkbox;
      });
    } else {
      let checkboxAllIndex = checkboxes.findIndex((checkbox) => {
        return checkbox.filter === 'all';
      });
      
      checkboxes[ checkboxAllIndex ].checked = false;
      checkboxes[ toggleCheckboxIndex ].checked = !checkboxes[ toggleCheckboxIndex ].checked;
    }

    this.setState({
      checkboxes: checkboxes
    });

    this.filter();
  };

  uncheckAllCheckboxes = () => {
    let checkboxes = [ ...this.state.checkboxes ];
    let newCheckboxes = checkboxes.map((checkbox) => {
      checkbox.checked = false;

      return checkbox;
    });

    this.setState({
      checkboxes: newCheckboxes
    });
  };

  render() {
    return (
      <div className={ this.props.className }>
        <h2>Количество пересадок</h2>
        <CheckboxList
          checkboxes={ this.state.checkboxes }
          toggle={ this.toggleCheckbox }
          uncheckAll={ this.uncheckAllCheckboxes }
          filter={ this.props.filter }
        />
      </div>
    );
  }
}

export default styled(Filter)`
  flex: 1 1 1px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 #5b89a4;
  padding: 15px 0;
  margin-right: 20px;

  h2 {
    font-size: 12px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
  }
`;