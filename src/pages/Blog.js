import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Pagination, Button } from 'react-bootstrap';
import { FaSearch, FaEye, FaHeart, FaClock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api, { getFileUrl } from '../services/api';
import './Blog.css';
import { FaChevronDown } from "react-icons/fa6";
import "react-quill/dist/quill.snow.css";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const categories = [
    'Design',
    'Development',
    'NFT',
    'Metaverse',
    'AI/ML',
    'Mobile',
    'Web',
    'Gaming',
    'AR/VR',
    'Other'
  ];

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, searchTerm, selectedCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        limit: 9,
        ...(searchTerm && { search: searchTerm }),
        ...(selectedCategory && { category: selectedCategory })
      };

      const response = await api.get('/blog', { params });
      setBlogs(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
      setTotalBlogs(response.data.pagination.total);
    } catch (err) {
      setError('Failed to fetch blogs');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="blog-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-error">
        <h3>Error</h3>
        <p>{error}</p>
        <button onClick={fetchBlogs} className="btn btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div >
      {/* Hero Section */}
      {/* <section className=" mil-dark-gradient pt-40 pb-40">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <h1 className="blog-hero-title">Our <span className='mil-thin'>Blog</span></h1>
              <p className="blog-hero-subtitle pb-10">
                Discover insights, trends, and stories from the world of technology and innovation
              </p>
            <a className="mil-button mil-quick-enquiry mil-arrow-place"
                    onClick={() => {
                      document.getElementById("blogs").scrollIntoView({
                        behavior: "smooth"
                      });
                    }}>
                    <span>Discover Our Blogs</span>
                    <div className="mil-button-arrow">
                      <svg viewBox="0 0 24 24">
                  <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                    </div>
                  </a>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Search and Filter Section */}
      <section className="blog-filters">
        <Container>
          <Row className="justify-content-center">
            <div className='h1 mb-10 pt-10' style={{textAlign:"center"}}>
              Our Blog
            </div>
            <Col lg={8}>
              <Form onSubmit={handleSearch} className="search-form">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit" variant="primary">
                    <FaSearch />
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>

          {/* Category Filters */}
          <Row className="mt-4">
            <Col>
              <div className="category-filters">
                <button
                  className={`category-btn ${selectedCategory === '' ? 'active' : ''}`}
                  onClick={() => handleCategoryChange('')}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid" id='blogs'>
        <Container>
          {blogs.length === 0 ? (
            <div className="no-blogs">
              <h3>No blogs found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <Row>
                {blogs.map((blog) => (
                  <Col key={blog._id} lg={4} md={6} className="mb-4">
                    <Card className="blog-card h-100">
                      <div className="blog-image-container">
                        <Card.Img
                          variant="top"
                          src={getFileUrl(blog.featuredImage)}
                          alt={blog.title}
                          className="blog-image"
                        />
                        <div className="blog-category">
                          <Badge bg="primary">{blog.category}</Badge>
                        </div>
                      </div>
                      
                      <Card.Body className="d-flex flex-column">
                        <div className="blog-meta">
                          <span className="blog-author">
                            <FaUser /> {blog.author.name}
                          </span>
                          <span className="blog-date">
                            <FaClock /> {formatDate(blog.createdAt)}
                          </span>
                        </div>
                        
                        <Card.Title className="blog-title">
                          <Link to={`/blog/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </Card.Title>
                        
                        <Card.Text className="blog-excerpt">
                          {blog.excerpt}
                        </Card.Text>
                        
                        <div className="blog-stats">
                          <span className="blog-views">
                            <FaEye /> {blog.views}
                          </span>
                          <span className="blog-likes">
                            <FaHeart /> {blog.likeCount || 0}
                          </span>
                          <span className="blog-read-time">
                            {blog.readTime} min read
                          </span>
                        </div>
                        <div className='space'>
                        <div className="blog-tags ">
                          {blog.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} bg="light" text="dark" className="me-1">
                              {tag}
                            </Badge>
                          ))}
                          </div>
                          <div>
                          <button className='blogbtn blog-tags'><Link to={`/blog/${blog.slug}`}>
                          Read more
                          </Link></button>
                        </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Pagination */}
              {totalPages > 1 && (
                <Row className="justify-content-center mt-5">
                  <Col>
                    <Pagination className="justify-content-center">
                      <Pagination.First
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                      />
                      <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      />
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }
                        
                        return (
                          <Pagination.Item
                            key={pageNum}
                            active={pageNum === currentPage}
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </Pagination.Item>
                        );
                      })}
                      
                      <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      />
                      <Pagination.Last
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                      />
                    </Pagination>
                  </Col>
                </Row>
              )}

              {/* Results Info */}
              <Row className="justify-content-center mt-3">
                <Col className="text-center">
                  <p className="text-muted">
                    Showing  {Math.min(currentPage * 9, totalBlogs)} of {totalBlogs} blogs
                  </p>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Blog; 