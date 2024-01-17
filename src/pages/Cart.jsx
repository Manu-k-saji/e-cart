import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/slices/CartSlice'
import Header from '../components/Header'



function Cart() {
    const cart = useSelector(state => state.cartReducer)
    const [totalCartAmount, setTotalCartAmount] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (cart?.length > 0) {
            setTotalCartAmount(cart?.map(item => item.totalPrice)?.reduce((p1, p2) => p1 + p2))
        } else {
            setTotalCartAmount(0)
        }
    }, [cart])

    const handleCheckOut = () => {
        alert("Order placed successfully.... Thank you for shopping with us!!!")
        dispatch(emptyCart())
        navigate('/')


    }
    const handleDecrement=(product)=>{
        if(product.quantity==1){
            dispatch(removeCartItem(product.id))
        }else{
            dispatch(decQuantity(product))
        }
    }
    return (
        <>
        <Header></Header>

        <div style={{ paddingTop: '100px' }}>
            {cart?.length > 0 ? <div className="container pt-5">
                <h1>Cart Summary</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>...</th>
                                </tr>
                            </thead>
                            <tbody>{
                                cart?.map((product, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product?.title}</td>
                                        <td><img width={'60px'} height={'60px'} src={product?.thumbnail} alt="no image" /></td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <span onClick={()=>handleDecrement(product)} className='fw-bolder' style={{cursor:'pointer',width:'20px'}}>-</span>
                                                <input type="text" value={product?.quantity} className=' ms-2 me-2 rounded' style={{ width: '50px' }} readOnly />
                                                <span onClick={()=>dispatch(incQuantity(product))} className='fw-bolder' style={{cursor:'pointer',width:'20px'}}>+</span>

                                                </div>
                                        </td>
                                        <td>${product?.totalPrice}</td>
                                        <td><button onClick={() => dispatch(removeCartItem(product?.id))} className='btn btn-link'><i className="fa-solid fa-trash text-danger"></i></button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>

                        <div className="float-end mt-3 mb-3">
                            <button onClick={() => dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
                            <Link to={'/'} className='btn btn-success'>Show More</Link>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="shadow border rounded p-4">
                            <h5>Total Products: <span className='fw-bolder text-success'>{cart?.length}</span></h5>
                            <h4>Total Amount: <span className='fw-bolder text-success'>$ {totalCartAmount} </span></h4><hr />
                            <div className='d-grid mt-4'>
                                <button onClick={handleCheckOut} className='btn btn-primary'>Check Out</button>

                            </div>

                        </div>


                    </div>
                </div>
            </div> :

                <div style={{ height: '60vh' }} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
                    <img className='img-fluid' height={'300px'} src="https://i.postimg.cc/N0Gmh1rs/png-transparent-empty-cart-illustration-thumbnail-removebg-preview.png" alt="empty cart" />
                    <h2 className='text-dark'>your Cart is empty!!!</h2>
                </div>
            }
        </div>
        </>

    )
}

export default Cart