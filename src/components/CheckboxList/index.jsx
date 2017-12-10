import React from 'react';

import Checkbox from '../Checkbox';

function CheckboxList(props) {
  return (
    <div>
      { props.checkboxes.map((checkbox) => {
        return (
          <Checkbox
            name={ checkbox.name }
            checked={ checkbox.checked }
            text={ checkbox.text }
            toggle={ props.toggle }
            uncheckAll={ props.uncheckAll }
            filter={ checkbox.filter }
            key={ checkbox.name }
          />
        );
      }) }
    </div>
  );
}

export default CheckboxList;