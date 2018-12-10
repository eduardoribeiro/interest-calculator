import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoanValue } from 'containers/App/selectors';
import LoanListItem from './LoanListItem';

export default connect(
  createStructuredSelector({
    value: makeSelectLoanValue()
  })
)(LoanListItem);
