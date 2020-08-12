import React from 'react'
import {connect} from 'react-redux'
import {Container, Form} from 'react-bootstrap'
import axios from 'axios'

class ReservationForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.reservation ? props.reservation.name:'',
            gender:props.reservation ? props.reservation.gender:'',
            address:props.reservation ? props.reservation.address:'',
            email:props.reservation ? props.reservation.email:'',
            mobile:props.reservation ? props.reservation.mobile:'',
            date:props.reservation ? props.reservation.date:'',
            time:props.reservation ? props.reservation.time:'',
            noOfCustomer:props.reservation ? props.reservation.noOfCustomer:'',
            number:[1,2,3,4]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name:this.state.name,
            gender:this.state.gender,
            address:this.state.address,
            email:this.state.email,
            mobile:this.state.mobile,
            date:this.state.date,
            time:this.state.time,
            noOfCustomer:this.state.noOfCustomer
        }
        this.props.reservation && (formData.id = this.props.reservation._id)
        this.props.handleEditSubmit(formData)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name === 'course'){
            this.setState({
                departmentnew:this.state.dept.filter(department=>department.courseId === e.target.value ),
            })
            console.log('departmentnew', this.state.departmentnew)
        }
    }

    handleChangeName=(e)=>{
        const name=e.target.value
        this.setState({
            name
        })
    }

    handleChangeEmail=(e)=>{
        axios.get('https://api.genderize.io/?name='+this.state.name)
        .then(response=>{
            const user=response.data
            this.setState({gender:user.gender})
        })
    }

    handleRadioChange=(gender)=>{
        this.setState({gender})
    }

    render(){
        return(
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container >
                    <h1 className='pt-5 pb-2'>Add Reservation</h1>
                    <Form onSubmit={this.handleSubmit}>                            
                        <div className="container form-group">
                            <Form.Label htmlFor="name">Name:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                onBlur={this.handleChangeName}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="email">Email:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onFocus={this.handleChangeEmail}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label>Gender:-</Form.Label>
                            <Form.Check inline label='Male'
                                type="radio"
                                id="male"
                                name="gender"
                                checked={this.state.gender==='male'}
                                onChange={()=>{this.handleRadioChange('male')}}
                            />
                            <Form.Check inline label='Female'
                                type="radio"
                                id="female"
                                name="gender"
                                checked={this.state.gender==='female'}
                                onChange={()=>{this.handleRadioChange('female')}}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="address">Address:-</Form.Label>
                            <Form.Control as='textarea' rows='3'
                                type="text"
                                id="address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">
                            <Form.Label htmlFor="mobile">Mobile:-</Form.Label>
                            <Form.Control
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div className="container form-group">        
                            <Form.Label htmlFor="date">Appointment Date:-</Form.Label>
                            <Form.Control 
                                type="Date"
                                id="date"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>

                        <div className="container form-group">
                            <Form.Label htmlFor="time">Appointment Time:-</Form.Label>
                            <Form.Control
                                type="time"
                                id="time"
                                name="time"
                                value={this.state.time}
                                onChange={this.handleChange}
                            /> <br/><br/>
                        </div>
                        <div>
                            <Form.Label htmlFor="noOfCustomer">NUMBER OF CUSTOMERS:-</Form.Label>
                            <Form.Control as="select" name='noOfCustomer' id='noOfCustomer' value={this.state.noOfCustomer} onChange={this.handleChange}>
                            <option value=''>----select----</option>
                            {
                                this.state.number.map((num,i)=>{
                                return <option value={num} key={i}>{num}</option>
                                })
                            }
                        </Form.Control><br/><br/>

                        </div>
                        <div className="container form-group">
                            <input type="submit" value="Submit" className='btn btn-secondary'/>
                        </div>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default connect()(ReservationForm)