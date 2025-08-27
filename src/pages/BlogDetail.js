import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Form } from "react-bootstrap";
import { FaClock, FaUser, FaArrowLeft, FaHeart, FaTrash } from "react-icons/fa";
import api, { getFileUrl } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";


const BlogDetail = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    // Scroll to top when a new blog is opened
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);
  
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/blog/${slug}`);
        setBlog(response.data.data);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleLike = async () => {
    if (!blog) return;
    try {
      const response = await api.post(`/blog/${blog._id}/like`);
      setBlog((prev) => ({
        ...prev,
        likes: response.data.data.likes,
        likeCount: response.data.data.likeCount,
        isLiked: response.data.data.isLiked,
      }));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to like blog");
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    try {
      const response = await api.post(`/blog/${blog._id}/comment`, {
        comment: commentText.trim(),
      });
      setBlog((prev) => ({ ...prev, comments: response.data.data }));
      setCommentText("");
      toast.success("Comment posted");
    } catch (_) {
      toast.error("Failed to post comment");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!blog) return;
    const confirmed = window.confirm("Delete this comment?");
    if (!confirmed) return;
    try {
      const response = await api.delete(
        `/blog/${blog._id}/comment/${commentId}`
      );
      setBlog((prev) => ({ ...prev, comments: response.data.data }));
      toast.success("Comment deleted");
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to delete comment";
      console.error("Delete comment error:", err.response || err);
      toast.error(message);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <Container className="py-5 text-center">
        <p className="text-danger fs-5 mb-3">{error || "Blog not found"}</p>
        <Link to="/blog" className="btn btn-outline-dark rounded-pill px-4">
          <FaArrowLeft /> Back to Blog
        </Link>
      </Container>
    );
  }

  return (
    <div className="blog-detail-page py-5 bg-light mt-20">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              {/* Image */}
              {blog.featuredImage && (
                <div className="position-relative">
                  <img
                    src={getFileUrl(blog.featuredImage)}
                    alt={blog.title}
                    className="img-fluid w-100"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <Link
                      to="/blog"
                      className="btn btn-light rounded-pill shadow-sm"
                    >
                      <FaArrowLeft /> Back
                    </Link>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="card-body p-5">
                <h1 className="fw-bold mb-3">{blog.title}</h1>

                <div className="d-flex align-items-center text-muted mb-3">
                  <span className="me-4 d-flex">
                    <FaUser className="me-2 mt-1 text-secondary" />
                    {blog.author?.name}
                  </span>
                  <span className="d-flex">
                    <FaClock className="me-2 mt-1 text-secondary " />
                    {formatDate(blog.createdAt)}
                  </span>
                </div>

                {blog.content && (
  <div
    className="blog-content"
    dangerouslySetInnerHTML={{ __html: blog.content }}
  />
)}

                {blog.excerpt && (
                  <p className="lead text-secondary">{blog.excerpt}</p>
                )}
                <div
                  style={{ whiteSpace: 'pre-wrap' }}
                  className="mb-4 fs-5 lh-lg content"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
                />

                {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                  <div className="mt-4">
                    {blog.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        bg="light"
                        text="dark"
                        className="me-2 px-3 py-2 rounded-pill shadow-sm"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Like */}
                <div className="mt-4">
                  <Button
                    variant={blog.isLiked ? "danger" : "outline-danger"}
                    className="rounded-pill px-4"
                    size="sm"
                    onClick={handleLike}
                  >
                    <FaHeart className="me-2" /> {blog.likeCount || 0} Likes
                  </Button>
                </div>
              </div>

              {/* Comments */}
              <div className="card-body bg-light p-5 border-top">
                <h4 className="fw-semibold mb-4">💬 Comments</h4>
                {Array.isArray(blog.comments) && blog.comments.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {blog.comments.map((c) => {
                      const ownerId =
                        (c.user && (c.user._id || c.user.id)) ||
                        (typeof c.user === "string" ? c.user : null);
                      const blogAuthorId =
                        (blog.author && (blog.author._id || blog.author.id)) ||
                        (typeof blog.author === "string" ? blog.author : null);
                      const canDelete =
                        !!user &&
                        (user.role === "admin" ||
                          ownerId === user.id ||
                          blogAuthorId === user.id);
                      return (
                        <li
                          key={c._id || c.id}
                          className="list-group-item d-flex justify-content-between align-items-start border-0 px-0 py-3 bg-light"
                        >
                          <div>
                            <strong>{c.user?.name || "User"}</strong>
                            <p className="mb-0 text-muted">{c.comment}</p>
                          </div>
                          {canDelete && (
                            <Button
                              variant="outline-danger"
                              size="sm"
                              className="rounded-circle"
                              onClick={() =>
                                handleDeleteComment(c._id || c.id)
                              }
                            >
                              <FaTrash />
                            </Button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-muted">No comments yet.</p>
                )}

                {/* Add comment */}
                <Form onSubmit={handleAddComment} className="mt-4">
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write your comment..."
                      className="rounded-3 shadow-sm"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="primary"
                    className="rounded-pill px-4 comment"
                  >
                    Post Comment
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail;
