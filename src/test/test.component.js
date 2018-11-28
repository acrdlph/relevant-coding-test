import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import './test.css';

class Test extends Component {
  static propTypes = {
    actions: PropTypes.object,
    testString: PropTypes.string
  }

  componentDidMount() {
    this.props.actions.test('test');
    this.props.actions.getData()
    .then(data => {
      this.data = data;
      this.forceUpdate();
    });
  }

  render() {
    let { testString } = this.props;
    let { data } = this;

    return (
      <div>
        HELLO! This is a {testString}
        <br />
        {data ? `we got some data with ${data.length} items!` : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  testString: state.test.string,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions.test }, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
