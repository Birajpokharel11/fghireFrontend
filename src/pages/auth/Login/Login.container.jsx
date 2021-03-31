import { connect } from 'react-redux';

import { signinStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSigninStart: (formData, history) => dispatch(signinStart(formData, history))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
