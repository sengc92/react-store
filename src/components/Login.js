import React from "react";
import '../css/app.scss'
import '../css/style.scss'

//組件
//JSX uses className instead of class
class Login extends React.Component{
    // State
    state = {
        isLike: false,
        count: 0,
        email: '',
        password: ''
    };
    // through updating the state of components, we do not have to render to whole page again, similar to angular


    // Refs
    emailRef;
    passwordRef;

    constructor() {
        super();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    // Arrow function does not have its own binding to this or super
    handleSumbit = event => {
        // 1. prevent default action
        event.preventDefault();
        // 2. get forum data
        // console.log(this.emailRef.current.value);
        const formData = {
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value
        };
        console.log(formData);
        // 3. handles login logic
        // 4. jump to front page
        // this.props.history.push('/');
    }

    // setState 是異步操作
    handleClick = () => {
        this.setState({
            isLike: !this.state.isLike
        });
        // 異步結果會被取代
        // this.setState({
        //     count:this.state.count+1
        // });
        this.setState(prevState =>{
            return {count:prevState.count+1};
        })
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return <div className="login-wrapper">
            <form action="" className="box login-box" onSubmit={this.handleSumbit}>
                <div className="field">
                    <label className="label" htmlFor="">Email:</label>
                    <div className="control">
                        <input className="input"
                               type="text"
                               placeholder="Email"
                               ref={this.emailRef}
                               value={this.state.email}
                               onChange={this.handleChange}
                               name="email" />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="" ref={this.passwordRef} >Password:</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Password"/>
                    </div>
                </div>
                <div className="control">
                    <button className="button is-fullwidth is-primary" type={"submit"}>Login</button>
                </div>

                <button className="button" onClick={this.handleClick}>
                    {this.state.isLike ? 'No' : '讚'}
                </button>
            </form>
        </div>

    }
}

export default Login;