import React from 'react'
import image11 from './image11.jpg'
import image22 from './image22.jpg'
import image33 from './image33.jpg'
import image44 from './image44.jpg'
import image66 from './image66.jpg'
import image55 from './image55.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {CardDeck,Card} from 'react-bootstrap'
import moment from 'moment'
function Home(props)
{
    return (
        <div>
            <h2 className='pt-2 text-center'>Welcome To Online SPA Reservation Portal</h2>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img
                                src={image11}
                                alt="Third slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'black',fontSize:'24px'}}><b>First slide label</b></h3>
                            <p style={{color:'black',fontSize:'24px'}}><b>"The preservation of health is easier than the cure of the disease."</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="d-block justify-content-center">
                            <img
                                src={image22}
                                alt="Third slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'white',fontSize:'24px'}}><b>Second slide label</b></h3>
                            <p style={{color:'white',fontSize:'24px'}}><b>“Improve your selfies, see your stylist!”</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block justify-content-center">
                            <img
                                src={image33}
                                alt="Third slide"
                                width='100%'
                                height='650'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{color:'white',fontSize:'24px'}}><b>Third slide label</b></h3>
                            <p style={{color:'white',fontSize:'24px'}}><b>“Life is like a restaurant; you can have anything you want as long as you are willing to pay the price."</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='card'>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={image66} width='50px' height='160px'/>
                        <Card.Body>
                            <Card.Title style={{fontFamily:'arial'}}><b>SPA</b></Card.Title>
                            <Card.Text>
                            It’s a good idea always to do something relaxing before making an important decision in your life.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated  {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image55} width='50' height='160' />
                        <Card.Body>
                            <Card.Title><b>SALON</b></Card.Title>
                            <Card.Text>
                            My parents owned a hair salon, so I learned a few tricks there. I can cut people's hair - if they let me.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image44} width='50' height='160'/>
                        <Card.Body>
                            <Card.Title><b>RESTAURANTS</b></Card.Title>
                            <Card.Text>
                            A restaurant is a fantasy-a kind of living fantasy in which diners are the most important members of the cast. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated {moment().startOf('hour').fromNow()}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div className='footer d-inline-block' style={{width:'100%',height:'80px', backgroundColor:'black',color:'white', fontSize:'20px'}} >
                <div className='copyright'>
                    <h5 className="text-center pt-3">© 2020 - 2021, All rights reserved.</h5>
                </div>
            </div>
        </div>
    )
}
export default Home