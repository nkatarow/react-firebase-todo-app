import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadSections, createSection } from '../../_redux/actions/todo';
import SectionList from '../SectionList';

class BaseApp extends PureComponent {
  componentDidMount() {
    this.props.loadSections();
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createSection(this.sectionName.value);
    this.sectionName.value = null;
  }

  render() {
    return (
      <div>
        <SectionList sections={this.props.sections} />
        <form onSubmit={this.onSubmit}>
          <input ref={(input) => { this.sectionName = input; }} />
          <button>Add new section</button>
        </form>
      </div>
    );
  }
}

BaseApp.propTypes = {
  createSection: PropTypes.func.isRequired,
  loadSections: PropTypes.func.isRequired,
  sections: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    timestamp: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  sections: state.todo.sections,
});

export default connect(mapStateToProps, { loadSections, createSection })(BaseApp);
