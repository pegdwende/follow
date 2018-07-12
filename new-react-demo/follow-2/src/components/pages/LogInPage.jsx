import React from 'react';
import LogInForm from '../forms/LogInForm';
class LogInPage extends React.Component {

    submit = data => {

        console.log(data);
    };

    render() {
        return(
        <div>
            <h1>Log In page</h1>
            <LogInForm submit={this.submit}/>
        </div>
        )
    }
}

export default LogInPage