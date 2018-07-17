import React from 'react';
import LogInForm from '../forms/LogInForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

class LogInPage extends React.Component {

    submit = data =>this.props.login(data).then(

        ()=>this.props.history.push("/")
    );

    render() {
        return(
        <div>
            <h1>Log In page</h1>
            <LogInForm submit={this.submit}/>
        </div>
        )
    }
}

LogInPage.propTypes = {
  history:PropTypes.shape({
      push:PropTypes.func.isRequired
  }).isRequired,
    login:PropTypes.func.isRequired
};

export default connect(null, {login}) (LogInPage);