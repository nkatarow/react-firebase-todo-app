import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SectionList extends PureComponent {
  render() {
    return (
      <ul>
        { Object.keys(this.props.sections).map(key => (
          <li key={key}>
            {this.props.sections[key].name}
          </li>
        ))}
      </ul>
    );
  }
}

SectionList.defaultProps = {
  sections: {},
};

SectionList.propTypes = {
  sections: PropTypes.shape(),
};

export default SectionList;
