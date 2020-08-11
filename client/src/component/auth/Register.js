import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'
import img from './img.jpeg'
class Register extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props)) 
    }
    render()
    {
        return(
            <div className="fluid-container" style={{height:"600px", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#FFC300,#9596F3,#F095F3)" }}>
                <div className="row pt-5" style={{height: "400px", width:"100%"}}>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" style={{backgroundColor: "red",backgroundImage:`linear-gradient(#FFC300,#9596F3,#F095F3)`}}>
                        <div className="container">
                            <img src={img} alt="img" height="200px" width="200px" className="mx-auto d-block rounded-circle"></img>
                            <h1 className="text-center pt-1">REGISTER</h1><br/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="container form-group">
                                    <input type="text" name="username" placeholder="Enter Username" className="form-control" onChange={this.handleChange} value={this.state.username} />
                                </div>
                                <div className="container form-group">
                                    <input type="text" name="email" placeholder="Enter Email" className="form-control" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="container form-group">
                                    <input type="password" name="password" placeholder="Enter Password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className="container form-group">
                                    <input type="submit" value="Register" className="form-control btn btn-primary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Register)