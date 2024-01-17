import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { removeFromWishlist } from '../Redux/slices/WishlistSlice';
import { addToCart } from '../Redux/slices/CartSlice';
import Header from '../components/Header';


function Wishlist() {
    const wishlist = useSelector(state => state.wishlistReducer)
    const dispatch=useDispatch()
    // console.log(wishlist);

const handleCart=(product)=>{
    dispatch(removeFromWishlist(product.id))
dispatch(addToCart(product))
}

    return (
        <>
<Header></Header>
        <div style={{ marginTop: '150px' }}>
            <div className='container'>
                <Row >
                   {wishlist?.length>0?wishlist?.map((product,index)=>(
                    <Col key={index} className='mb-5 me-5' sm={12} md={6} lg={4} xl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top"height={'200px'} src={product?.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                                <div className="d-flex justify-content-between ">
                                <button onClick={()=>dispatch(removeFromWishlist(product?.id))} className='btn btn-link'><i className="fa-solid fa-heart-circle-minus text-danger"></i></button>
                            <button onClick={()=>handleCart(product)} className='btn btn-link'><i className="fa-solid fa-cart-plus text-success"></i> </button>
                           </div>
                            </Card.Body>
                        </Card>
                    </Col>
                   )) :
                    <div style={{height:'60vh'}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
                       <img className='img-fluid'height={'300px'} src="https://i.postimg.cc/N0Gmh1rs/png-transparent-empty-cart-illustration-thumbnail-removebg-preview.png" alt="empty cart" />
                        <h2 className='text-dark'>your wishlist is empty!!!</h2>
                    </div>
                    }
                </Row>
            </div>

        </div>
        </>
    )
}

export default Wishlist