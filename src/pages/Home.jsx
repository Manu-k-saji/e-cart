import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, navigateToNextPage, navigateToPrevPage } from '../Redux/slices/ProductSlice';
import { Card, Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


function Home() {
    const dispatch = useDispatch()
    const { allProducts, loading, error, productsPerPage, currentPage } = useSelector(state => state.productReducer)
    const totalPages = Math.ceil(allProducts?.length / productsPerPage)
    const lastProductIndex = currentPage * productsPerPage
    const FirstProductIndex = lastProductIndex - productsPerPage
    const visibleProductsCard = allProducts?.slice(FirstProductIndex, lastProductIndex)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const handlePrevPage=()=>{
        if(currentPage!=1){
            dispatch(navigateToPrevPage())
        }
    }
    const handleNextPage=()=>{
        if(currentPage!=totalPages){
            dispatch(navigateToNextPage())
        }
    }

    return (
        <>
            <Header insideHome></Header>
            <div style={{ paddingTop: '100px' }}>
                {
                    loading ? <div className='mt-5 text-center'> <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></div> :
                        <Row className='m-5'>
                            {allProducts?.length > 0 ? visibleProductsCard?.map((product, index) => (

                                <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={product?.thumbnail} height={'200px'} />
                                        <Card.Body>
                                            <Card.Title>{product?.title.slice(0, 20)}...</Card.Title>
                                            <div className='text-center'>
                                                <Link to={`/view/${product?.id}`} id='l1' className=' btn btn-outline-dark'>View More</Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )) : <div className='fw-bolder text-danger text-center mt-5 mb-5 fs-4'> product not found!!! </div>
                            }

                        </Row>

                }
                <div className="d-flex justify-content-center mt-5 mb-3">
                    <span onClick={handlePrevPage}  className='btn'><i className="fa-solid fa-backward me-2"></i></span>
                    <span className='fw-bolder mt-3 me-3 ms-3'>{currentPage} of {totalPages}</span>
                    <span onClick={handleNextPage}  className='btn'><i className="fa-solid fa-forward ms-2"></i></span>

                </div>
            </div>
        </>
    )
}

export default Home