import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Modal, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaEye, FaUsers, FaNewspaper, FaChartLine } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate,Link } from 'react-router-dom';
import api, { getFileUrl } from '../services/api';
import { toast } from 'react-toastify';
import './Admin.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { FaEllipsis } from 'react-icons/fa6';


const Admin = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({ role: 'user', isActive: true });
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    status: 'draft',
    featuredImage: null
  });
  const totalBlogViews = blogs.reduce((sum, blog) => sum + (blog.views || 0), 0);


  // Jobs state
  const [jobs, setJobs] = useState([]);
  const [showJobModal, setShowJobModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    requirements: '',
    responsibilities: '',
    benefits: '',
    experience: 'Entry Level',
    location: 'Surat',
    department: 'Engineering',
    employmentType: 'Full-time',
    isRemote: false,
    isActive: true,
    priority: 0,
    salary: {
      min: '',
      max: '',
      currency: 'INR',
      period: 'monthly'
    },
    applicationDeadline: '',
    applyLink: '',
    applyEmail: '',
    tags: ''
  });


  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchData();
  }, [isAuthenticated, user, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [blogsRes, usersRes, statsRes, jobsRes] = await Promise.all([
        api.get('/blog/admin/all'),
        api.get('/user'),
        api.get('/user/stats/overview'),
        api.get('/job/admin/all')
      ]);

      setBlogs(blogsRes.data.data);
      setUsers(usersRes.data.data);
      setStats(statsRes.data.data);
      setJobs(jobsRes.data.data);

    } catch (error) {
      toast.error('Failed to fetch data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(blogForm).forEach(key => {
        if (blogForm[key] !== null) {
          if (key === 'tags') {
            formData.append(key, JSON.stringify(blogForm[key].split(',').map(tag => tag.trim())));
          } else {
            // Backend multer expects file field name 'image'
            if (key === 'featuredImage' && blogForm[key]) {
              formData.append('image', blogForm[key]);
            } else {
              formData.append(key, blogForm[key]);
            }
          }
        }
      });

      if (editingBlog) {
        await api.put(`/blog/${editingBlog._id}`, formData);
        toast.success('Blog updated successfully');
      } else {
        await api.post('/blog', formData);
        toast.success('Blog created successfully');
      }

      setShowBlogModal(false);
      setEditingBlog(null);
      resetBlogForm();
      fetchData();
    } catch (error) {
      const serverMessage = error.response?.data?.message
        || error.response?.data?.errors?.[0]?.msg
        || 'Failed to save blog';
      toast.error(serverMessage);
      console.error('Error saving blog:', error);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await api.delete(`/blog/${blogId}`);
        toast.success('Blog deleted successfully');
        fetchData();
      } catch (error) {
        toast.error('Failed to delete blog');
        console.error('Error deleting blog:', error);
      }
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      category: blog.category,
      tags: blog.tags.join(', '),
      status: blog.status,
      featuredImage: null
    });
    setShowBlogModal(true);
  };

  const resetBlogForm = () => {
    setBlogForm({
      title: '',
      content: '',
      excerpt: '',
      category: '',
      tags: '',
      status: 'draft',
      featuredImage: null
    });
  };

  const handleFileChange = (e) => {
    setBlogForm({ ...blogForm, featuredImage: e.target.files[0] });
  };

  // Job management functions
  const resetJobForm = () => {
    setJobForm({
      title: '',
      shortDescription: '',
      fullDescription: '',
      requirements: '',
      responsibilities: '',
      benefits: '',
      experience: 'Entry Level',
      location: 'Surat',
      department: 'Engineering',
      employmentType: 'Full-time',
      isRemote: false,
      isActive: true,
      priority: 0,
      salary: {
        min: '',
        max: '',
        currency: 'INR',
        period: 'monthly'
      },
      applicationDeadline: '',
      applyLink: '',
      applyEmail: '',
      tags: ''
    });
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...jobForm };

      // Convert string arrays to arrays
      if (typeof payload.requirements === 'string') {
        payload.requirements = payload.requirements.split(',').map(r => r.trim()).filter(Boolean);
      }
      if (typeof payload.responsibilities === 'string') {
        payload.responsibilities = payload.responsibilities.split(',').map(r => r.trim()).filter(Boolean);
      }
      if (typeof payload.benefits === 'string') {
        payload.benefits = payload.benefits.split(',').map(b => b.trim()).filter(Boolean);
      }
      if (typeof payload.tags === 'string') {
        payload.tags = payload.tags.split(',').map(t => t.trim()).filter(Boolean);
      }

      // Handle salary fields
      if (payload.salary.min === '') delete payload.salary.min;
      if (payload.salary.max === '') delete payload.salary.max;
      if (payload.salary.min === '' && payload.salary.max === '') delete payload.salary;

      // Handle deadline
      if (payload.applicationDeadline === '') delete payload.applicationDeadline;

      if (editingJob) {
        await api.put(`/job/${editingJob._id}`, payload);
        toast.success('Job updated successfully');
      } else {
        await api.post('/job', payload);
        toast.success('Job created successfully');
      }

      setShowJobModal(false);
      setEditingJob(null);
      resetJobForm();
      fetchData();
    } catch (error) {
      const serverMessage = error.response?.data?.message
        || error.response?.data?.errors?.[0]?.msg
        || 'Failed to save job';
      toast.error(serverMessage);
      console.error('Error saving job:', error);
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      shortDescription: job.shortDescription,
      fullDescription: job.fullDescription,
      requirements: Array.isArray(job.requirements) ? job.requirements.join(', ') : '',
      responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join(', ') : '',
      benefits: Array.isArray(job.benefits) ? job.benefits.join(', ') : '',
      experience: job.experience,
      location: job.location,
      department: job.department,
      employmentType: job.employmentType,
      isRemote: job.isRemote,
      isActive: job.isActive,
      priority: job.priority,
      salary: job.salary || { min: '', max: '', currency: 'INR', period: 'monthly' },
      applicationDeadline: job.applicationDeadline ? new Date(job.applicationDeadline).toISOString().split('T')[0] : '',
      applyLink: job.applyLink || '',
      applyEmail: job.applyEmail || '',
      tags: Array.isArray(job.tags) ? job.tags.join(', ') : ''
    });
    setShowJobModal(true);
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      await api.delete(`/job/${id}`);
      toast.success('Job deleted successfully');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete job');
      console.error('Error deleting job:', error);
    }
  };

  const handleToggleJobStatus = async (id) => {
    try {
      await api.put(`/job/${id}/toggle-status`);
      toast.success('Job status updated');
      fetchData();
    } catch (error) {
      toast.error('Failed to update job status');
      console.error('Error updating job status:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setUserForm({ role: user.role, isActive: !!user.isActive });
    setShowUserModal(true);
  };

  const handleToggleUserStatus = async (userId) => {
    try {
      await api.put(`/user/${userId}/status`);
      toast.success('User status updated');
      fetchData();
    } catch (error) {
      const serverMessage = error.response?.data?.message || 'Failed to update status';
      toast.error(serverMessage);
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (!editingUser) return;
    try {
      // Update role if changed
      if (editingUser.role !== userForm.role) {
        await api.put(`/user/${editingUser._id}/role`, { role: userForm.role });
      }
      // Toggle status if changed
      if (Boolean(editingUser.isActive) !== Boolean(userForm.isActive)) {
        await api.put(`/user/${editingUser._id}/status`);
      }
      toast.success('User updated successfully');
      setShowUserModal(false);
      setEditingUser(null);
      fetchData();
    } catch (error) {
      const serverMessage = error.response?.data?.message
        || error.response?.data?.errors?.[0]?.msg
        || 'Failed to update user';
      toast.error(serverMessage);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }



  return (
    <div className="admin-page">
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} lg={2} className="admin-sidebar">
            <div className="sidebar-header">
              <h4>Admin Panel</h4>
              <p>Welcome, {user?.name}</p>
            </div>

            <nav className="sidebar-nav">
              <button
                className={`nav-item1 ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <FaChartLine /> Dashboard
              </button>
              <button
                className={`nav-item1 ${activeTab === 'blogs' ? 'active' : ''}`}
                onClick={() => setActiveTab('blogs')}
              >
                <FaNewspaper /> Blogs
              </button>

              <button
                className={`nav-item1 ${activeTab === 'jobs' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobs')}
              >
                <FaNewspaper /> Jobs
              </button>

              <button
                className={`nav-item1 ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                <FaUsers /> Users
              </button>
            </nav>
          </Col>

          {/* Main Content */}
          <Col md={9} lg={10} className="admin-content">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="dashboard">
                <h2>Dashboard</h2>

                <Row className="stats-row">
                  <Col md={3}>
                    <Card className="stat-card">
                      <Card.Body>
                        <div className="stat-icon">
                          <FaNewspaper />
                        </div>
                        <h3>{blogs.length}</h3>
                        <p>Total Blogs</p>

                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="stat-card">
                      <Card.Body>
                        <div className="stat-icon">
                          <FaUsers />
                        </div>
                        <h3>{stats.totalUsers || 0}</h3>
                        <p>Total Users</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="stat-card">
                      <Card.Body>
                        <div className="stat-icon">
                          <FaEye />
                        </div>
                        <h3>{totalBlogViews}</h3>   {/* 👈 sum of blog.views */}
                        <p>Total Blog Views</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="stat-card">
                      <Card.Body>
                        <div className="stat-icon">
                          <FaChartLine />
                        </div>
                        <h3>{stats.recentUsers || 0}</h3>
                        <p>New Users (30d)</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                {/* Jobs Section */}
                <div className="mt-5" style={{ margin: "10px", padding: "40px", borderRadius: "15px", background: "white", boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
    <h3
      className="mil-dark-bg p-2"
      style={{
        borderRadius: "10px",
        textAlign: "center",
        margin: 0,
      }}
    >
      Ongoing Jobs
    </h3>
    <div className="d-flex gap-2">
      <Button onClick={() => setActiveTab('jobs')}
      variant="light" className="rounded-circle shadow-sm p-2">
        <FaPlus size={16} />
      </Button>

    </div>
  </div>


                  <Row className="g-4">
                    {jobs.slice(0, 6).map((job, index) => {
                      // Pick a background color for each card
                      const colors = ["#fff9c4", "#bbdefb", "#ffcdd2", "#c8e6c9", "#ffe0b2"];
                      const bgColor = colors[index % colors.length];

                      return (
                        <Col md={3} key={job._id}>
                          <Card
                            className="shadow-sm border-0 rounded-4"
                            style={{ backgroundColor: bgColor}}
                          >
                            <Card.Body>
                              {/* Job Date */}
                              <div className="d-flex justify-content-between align-items-start mb-2">
                                <div className="text-muted small">
                                  {new Date(job.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </div>
                                <Button
                  variant="light"
                  size="sm"
                  className="rounded-circle p-2 shadow-sm"
                  onClick={() => handleEditJob(job)}
                >
                  <FaEllipsis size={14} />
                </Button>
                              </div>

                              {/* Job Title */}
                              <h5 className="fw-bold">{job.title}</h5>
                              <p className="mb-3">{job.department || job.shortDescription}</p>

                              {/* Apply Button */}
                              {job.applyLink ? (
                                <a
                                  className="btn btn-light rounded-pill"
                                  href={job.applyLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Apply
                                </a>
                              ) : job.applyEmail ? (
                                <a
                                  className="btn btn-light rounded-pill"
                                  href={`mailto:${job.applyEmail}?subject=Application%20for%20${encodeURIComponent(
                                    job.title
                                  )}`}
                                >
                                  Apply via Email
                                </a>
                              ) : (
                                <Button variant="secondary" disabled className="rounded-pill">
                                  Apply Not Available
                                </Button>
                              )}
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            )}


            {/* Blogs Tab */}
            {activeTab === 'blogs' && (
              <div className="blogs-management">
                <div className="section-header">
                  <h2>Blog Management</h2>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditingBlog(null);
                      resetBlogForm();
                      setShowBlogModal(true);
                    }}
                    className='comment'
                  >
                    <div className='d-flex '><div className='m-1'><FaPlus /></div>  Add New Blog</div>
                  </Button>
                </div>

                <Table responsive className="blogs-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Author</th>
                      <th>Views</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog) => (
                      <tr key={blog._id}>
                        <td>
                          <div className="blog-title-cell">
                            <img
                              src={getFileUrl(blog.featuredImage)}
                              alt={blog.title}
                              className="blog-thumbnail"
                            />
                            <span>{blog.title}</span>
                          </div>
                        </td>
                        <td>
                          <Badge bg="secondary">{blog.category}</Badge>
                        </td>
                        <td>
                          <Badge
                            bg={blog.status === 'published' ? 'success' :
                              blog.status === 'draft' ? 'warning' : 'secondary'}
                          >
                            {blog.status}
                          </Badge>
                        </td>
                        <td>{blog.author?.name}</td>
                        <td>{blog.views}</td>
                        <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                        <td>
                          <div className="action-buttons">
                            <Button
                              size="sm"
                              variant="outline-primary"
                              onClick={() => handleEditBlog(blog)}
                            >
                              <FaEdit />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={() => handleDeleteBlog(blog._id)}
                            >
                              <FaTrash />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}

            {/* Jobs Tab */}
            {activeTab === 'jobs' && (
              <div className="jobs-management">
                <div className="section-header">
                  <h2>Job Management</h2>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditingJob(null);
                      resetJobForm();
                      setShowJobModal(true);
                    }}
                    className='comment'
                  >
                    <div className='d-flex '><div className='m-1'><FaPlus /></div> Add New Job</div>
                  </Button>
                </div>

                <Table responsive className="jobs-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Department</th>
                      <th>Type</th>
                      <th>Location</th>
                      <th>Experience</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Views</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job._id}>
                        <td>
                          <div className="job-title-cell">
                            <div className="fw-semibold">{job.title}</div>
                            <small className="text-muted">{job.shortDescription}</small>
                          </div>
                        </td>
                        <td>
                          <Badge bg="secondary">{job.department}</Badge>
                        </td>
                        <td>{job.employmentType}</td>
                        <td>
                          {job.location}
                          {job.isRemote && <Badge bg="info" className="ms-1">Remote</Badge>}
                        </td>
                        <td>{job.experience}</td>
                        <td>
                          <Badge bg={job.isActive ? 'success' : 'secondary'}>
                            {job.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </td>
                        <td>{job.priority}</td>
                        <td>{job.views || 0}</td>
                        <td>
                          <div className="action-buttons">
                            <Button
                              size="sm"
                              variant="outline-primary"
                              onClick={() => handleEditJob(job)}
                            >
                              <FaEdit />
                            </Button>
                            <Button
                              size="sm"
                              variant={job.isActive ? 'outline-warning' : 'outline-success'}
                              onClick={() => handleToggleJobStatus(job._id)}
                              className="ms-1"
                              style={{ borderColor: "blue", color: "blue" }}
                            >
                              {job.isActive ? 'Deactivate' : 'Activate'}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline-danger"
                              onClick={() => handleDeleteJob(job._id)}
                              className="ms-1"
                            >
                              <FaTrash />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="users-management">
                <h2>User Management</h2>

                <Table responsive className="users-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Joined</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <div className="user-info">
                            <div className="user-avatar">
                              {user.avatar ? (
                                <img src={user.avatar} alt={user.name} />
                              ) : (
                                <div className="avatar-placeholder">{user.name[0]}</div>
                              )}
                            </div>
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td>{user.email}</td>
                        <td>
                          <Badge bg={user.role === 'admin' ? 'danger' : 'info'}>
                            {user.role}
                          </Badge>
                        </td>
                        <td>
                          <Badge bg={user.isActive ? 'success' : 'secondary'}>
                            {user.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </td>
                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                        <td>
                          <div className="action-buttons">
                            <Button
                              size="sm"
                              variant="outline-primary"
                              onClick={() => handleEditUser(user)}
                            >
                              <FaEdit />
                            </Button>
                            <Button
                              size="sm"
                              variant={user.isActive ? 'outline-warning' : 'outline-success'}
                              onClick={() => handleToggleUserStatus(user._id)}
                              className="ms-2"
                              style={{ borderColor: "blue", color: "blue" }}
                            >
                              {user.isActive ? 'Deactivate' : 'Activate'}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      {/* Blog Modal */}
      <Modal show={showBlogModal} onHide={() => setShowBlogModal(false)} >
        <Modal.Header closeButton style={{ width: "40vw", background: "white", marginBottom: "0" }}>
          <Modal.Title>
            {editingBlog ? 'Edit Blog' : 'Create New Blog'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleBlogSubmit} style={{ width: "40vw", background: "white" }}>
          <Modal.Body>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Content</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={blogForm.content}
                    onChange={(value) => setBlogForm({ ...blogForm, content: value })}
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }], // ✅ both supported
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                    formats={[
                      'header',
                      'bold', 'italic', 'underline', 'strike',
                      'list',    // ✅ one "list" handles both ordered + bullet
                      'link', 'image',
                    ]}
                    style={{ height: "200px", borderRadius: "6px" }}
                  />
                </Form.Group>

              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Expert</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={blogForm.excerpt}
                    onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="NFT">NFT</option>
                    <option value="Metaverse">Metaverse</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Web">Web</option>
                    <option value="Gaming">Gaming</option>
                    <option value="AR/VR">AR/VR</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tags (comma-separated)</Form.Label>
                  <Form.Control
                    type="text"
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                    placeholder="tag1, tag2, tag3"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={blogForm.status}
                    onChange={(e) => setBlogForm({ ...blogForm, status: e.target.value })}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Featured Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowBlogModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editingBlog ? 'Update Blog' : 'Create Blog'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>






      {/* User Modal */}
      <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUserSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={editingUser?.name || ''} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={editingUser?.email || ''} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={userForm.role}
                onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="switch"
                id="user-active-switch"
                label={userForm.isActive ? 'Active' : 'Inactive'}
                checked={userForm.isActive}
                onChange={(e) => setUserForm({ ...userForm, isActive: e.target.checked })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUserModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Job Modal */}
      <Modal show={showJobModal} onHide={() => setShowJobModal(false)}>
        <Modal.Header closeButton style={{ width: "45vw", background: "white", marginBottom: "0" }}>
          <Modal.Title>{editingJob ? 'Edit Job' : 'Create New Job'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleJobSubmit}>
          <Modal.Body style={{ width: "45vw", background: "white" }}>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title *</Form.Label>
                  <Form.Control
                    type="text"
                    value={jobForm.title}
                    onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Short Description *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    maxLength={250}
                    value={jobForm.shortDescription}
                    onChange={(e) => setJobForm({ ...jobForm, shortDescription: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Full Description *</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={jobForm.fullDescription}
                    onChange={(value) => setJobForm({ ...jobForm, fullDescription: value })}
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link'],
                        ['clean']
                      ]
                    }}
                    style={{ height: '200px' }}
                  />
                </Form.Group>

                <Form.Group className="mb-3 mt-5">
                  <Form.Label className='mt-3'>Requirements (comma-separated)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={jobForm.requirements}
                    onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                    placeholder="e.g., React, Node.js, MongoDB"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Responsibilities (comma-separated)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={jobForm.responsibilities}
                    onChange={(e) => setJobForm({ ...jobForm, responsibilities: e.target.value })}
                    placeholder="e.g., Develop features, Code review, Team collaboration"
                  />
                </Form.Group>

              </Col>

              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Department *</Form.Label>
                  <Form.Select
                    value={jobForm.department}
                    onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                    required
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Operations">Operations</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Employment Type *</Form.Label>
                  <Form.Select
                    value={jobForm.employmentType}
                    onChange={(e) => setJobForm({ ...jobForm, employmentType: e.target.value })}
                    required
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance">Freelance</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Experience Level *</Form.Label>
                  <Form.Select
                    value={jobForm.experience}
                    onChange={(e) => setJobForm({ ...jobForm, experience: e.target.value })}
                    required
                  >
                    <option value="Entry Level">Entry Level</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                    <option value="Senior Level">Senior Level</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location *</Form.Label>
                  <Form.Control
                    type="text"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={jobForm.priority}
                    onChange={(e) => setJobForm({ ...jobForm, priority: parseInt(e.target.value) || 0 })}
                  />
                </Form.Group>

                {/*<Form.Group className="mb-3">
                  <Form.Label>Application Deadline</Form.Label>
                  <Form.Control
                    type="date"
                    value={jobForm.applicationDeadline}
                    onChange={(e) => setJobForm({ ...jobForm, applicationDeadline: e.target.value })}
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center gap-3">
                  <Form.Check
                    type="switch"
                    id="isActive"
                    label="Active"
                    checked={jobForm.isActive}
                    onChange={(e) => setJobForm({ ...jobForm, isActive: e.target.checked })}
                  />
                  <Form.Check
                    type="switch"
                    id="isRemote"
                    label="Remote"
                    checked={jobForm.isRemote}
                    onChange={(e) => setJobForm({ ...jobForm, isRemote: e.target.checked })}
                  />
                </Form.Group>*/}

                <Form.Group className="mb-3">
                  <Form.Label>Salary Range</Form.Label>
                  <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={jobForm.salary.min}
                        onChange={(e) => setJobForm({
                          ...jobForm,
                          salary: { ...jobForm.salary, min: e.target.value }
                        })}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={jobForm.salary.max}
                        onChange={(e) => setJobForm({
                          ...jobForm,
                          salary: { ...jobForm.salary, max: e.target.value }
                        })}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                      <Form.Select
                        value={jobForm.salary.currency}
                        onChange={(e) => setJobForm({
                          ...jobForm,
                          salary: { ...jobForm.salary, currency: e.target.value }
                        })}
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        value={jobForm.salary.period}
                        onChange={(e) => setJobForm({
                          ...jobForm,
                          salary: { ...jobForm.salary, period: e.target.value }
                        })}
                      >
                        <option value="hourly">Hourly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apply Link (optional)</Form.Label>
                  <Form.Control
                    type="url"
                    value={jobForm.applyLink}
                    onChange={(e) => setJobForm({ ...jobForm, applyLink: e.target.value })}
                    placeholder="https://..."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apply Email (optional)</Form.Label>
                  <Form.Control
                    type="email"
                    value={jobForm.applyEmail}
                    onChange={(e) => setJobForm({ ...jobForm, applyEmail: e.target.value })}
                    placeholder="hr@company.com"
                  />
                </Form.Group>

              </Col>
              <Form.Group className="mb-3">
                <Form.Label>Tags (comma-separated)</Form.Label>
                <Form.Control
                  type="text"
                  value={jobForm.tags}
                  onChange={(e) => setJobForm({ ...jobForm, tags: e.target.value })}
                  placeholder="React, Node.js, UI/UX"
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer style={{ width: "45vw", background: "white" }}>
            <Button variant="secondary" onClick={() => setShowJobModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editingJob ? 'Update Job' : 'Create Job'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Admin; 