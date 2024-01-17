import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProduct } from '../Redux/slices/ProductSlice';

function Header({ insideHome }) {
    const wishlist = useSelector(state => state.wishlistReducer)
    const cart = useSelector(state => state.cartReducer)
    const dispatch=useDispatch()

    return (

        <Navbar style={{ zIndex: 2 }} expand="lg" className="bg-info w-100 position-fixed top-0">
            <Container>
                <Navbar.Brand> <Link to='/' style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder'><i className="fa-solid me-2 fa-truck"></i>Daily Cart</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {insideHome && <Nav.Link > <input onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))} type="text" className='rounded p-1' style={{ width: '300px' }} placeholder='search products here!' /></Nav.Link>
                       
                       }
                        <Nav.Link ><Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}><i className='fa-solid fa-heart text-danger'></i> Wishlist <Badge className='bg-light text-dark'> {wishlist?.length} </Badge></Link></Nav.Link>
                        <Nav.Link ><Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}><i className='fa-solid fa-cart-plus text-success'></i>Cart  <Badge className='bg-light text-dark'>{cart?.length}</Badge></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header