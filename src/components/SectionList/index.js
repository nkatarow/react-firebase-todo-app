import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SectionList extends PureComponent {
  render() {
    Object.entries(this.props.sections).forEach((section) => {
      const [key, value] = section;
      console.log(`key: ${key}`);
      console.log(value);
    });

    return (
      <ul>
        {/* Need to output each section here */}
        <li>Test</li>
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
