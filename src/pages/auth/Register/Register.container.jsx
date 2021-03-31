import { connect } from 'react-redux';

import { signupStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSignupStart: (formData, history) => dispatch(signupStart(formData, history))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
