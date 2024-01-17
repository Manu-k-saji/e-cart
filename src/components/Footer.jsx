import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    
         <div className='bg-info'> 
       <div className='container pt-4 mb-5 '>
                <div className='row'>
                    <div className="col-lg-3">
                        <i class="fa-solid fa-cart-shopping fa-2x me-2" style={{color:'white'}}></i>
             <b className=' text-white ' style={{fontSize:'30px'}}>Daily Cart</b> 
             <p style={{color:'white'}}>Designed and built with all the love in the world by the bootstrap team possimus recusandae consequatur<br />
             Code licensed Luminar,docs CC BY 3.0. <br />
             Currently v1.0.0</p>
             </div>
             <div className="col-lg-3">
        <h5 style={{color:'white'}} className='fw-bolder mx-2'>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link><br />
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link><br />
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        </div>
        <div className="col-lg-3">
        <h5 style={{color:'white'}}className='fw-bolder mx-2'>Guides</h5>
        <p style={{color:'white'}}>React</p>
        <p style={{color:'white'}}>React bootstrap</p>
        <p style={{color:'white'}}>Routing</p>
       </div>
        <div className="col-lg-3">
        <Form>
      <Form.Group  controlId="formBasicEmail" >
        <Form.Label  style={{color:'white',fontSize:'25px'}} >Contact Us</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{color:'white',fontSize:'23px'}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone.
        </Form.Text>
        <Button className='w-50 '  type="submit"><i class="fa-solid fa-arrow-right"></i>
        Send
      </Button>
      </Form.Group>
      </Form>
      <a href=""><i class="fa-brands fa-instagram fa-1x p-3" style={{color:'white'}}></i></a>
      <a href=""><i class="fa-brands fa-facebook fa-1x p-3"style={{color:'white'}}></i></a>
      <a href=""><i class="fa-brands fa-github fa-1x p-3"style={{color:'white'}}></i></a>
      <a href=""><i class="fa-brands fa-linkedin fa-1x p-3"style={{color:'white'}}></i></a>
      <a href=""><i class="fa-solid fa-envelope fa-1x p-3"style={{color:'white'}}></i></a>
      </div>
        <div>
        <p style={{color:'white',textAlign:'center'}} className='mb-5'>Copyright @ 2024 Daily Cart.Built with react</p>
</div></div>
        </div>
    </div>  
  )
}

export default Footer