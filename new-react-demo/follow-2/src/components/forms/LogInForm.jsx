import React from 'react';
import {Form, Button,Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import Validator from "validator";
import InlineError from "../messages/InlineError";
class LogInForm extends React.Component{

    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };



    onChange = e =>this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});

    onSubmit = () =>{
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if(Object.keys(errors).length===0){
          this.setState({loading:true});
          this.props.submit(this.state.data);
              // .catch(err=>this.setState({errors:err.response.data.errors, loading:false}));
      }
    };


    validate = (data)=>{
      const errors = {};
      if(!Validator.isEmail(data.email))  errors.email = "Invalid Email";
      if(!data.password) errors.password = "can't be blank";

      console.log(errors);

    return errors;
    };
    render(){
        const {data,errors, loading} = this.state;
        return(
     <Form onSubmit={this.onSubmit} loading={loading}>
         {errors && errors.global && <Message negative>
             <Message.Header>
                 Something went wrong
                 <p>{errors.global}</p>
             </Message.Header>
         </Message>
             }
         <Form.Field error={errors && !!errors.email}>
             <label htmlFor="email">Email</label>
             <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Enter Email"
                 value={data.email}
                 onChange={this.onChange}
             />
             {errors && errors.email && <InlineError text={errors.email}/>}
         </Form.Field>
         <Form.Field error={errors && typeof errors.password!='undefined' &&!!errors.password}>
             <label htmlFor="password">Password</label>
             <input
                 type="password"
                 id="password"
                 name="password"
                 placeholder="Enter Password"
                 value={data.password}
                 onChange={this.onChange}
             />
             {errors && errors.password && <InlineError text={errors.password}/>}
         </Form.Field>
         <Button primary>Log In </Button>
     </Form>
        )
    }
}

LogInForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default LogInForm;