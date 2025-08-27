import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaCog } from 'react-icons/fa';
import './Account.css';

const Account = () => {
  const { user, isAuthenticated, login, register, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    bio: user?.bio || ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(loginData);
    if (result.success) {
      toast.success('Login successful!');
      setShowLogin(false);
      setLoginData({ email: '', password: '' });
    } else {
      toast.error(result.error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const result = await register(registerData);
    if (result.success) {
      toast.success('Registration successful!');
      setShowRegister(false);
      setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
    } else {
      toast.error(result.error);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    // Profile update logic would go here
    toast.success('Profile updated successfully');
    setShowProfile(false);
  };

  if (isAuthenticated) {
    return (
      <div className="account-container">
      <div className="account-dropdown-wrapper">
    {/* Profile trigger button */}
   <div
className="profile-trigger"
onClick={() => setOpen(!open)}
style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
>
<div className="user-avatar1" style={{background:"black"}}>
  {user?.avatar ? (
    <img src={user.avatar} alt={user.name} />
  ) : (
    <FaUser />
  )}
</div>

<div className="user-basic ml-2">
  <span className="user-name">{user?.name}</span>
  <p className="user-email">{user?.email}</p>
</div>
</div>

    {/* Dropdown menu (only visible when open is true) */}
    {open && (
<div className="account-dropdown">
  <div className="account-header">
    <div className="user-info">
      <div className="user-avatar">
        {user?.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
          <FaUser />
        )}
      </div>
      <div className="user-details">
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
        {user?.role === "admin" && (
          <span className="admin-badge">Admin</span>
        )}
      </div>
    </div>

    {/* ✅ Close Button */}
    <button
      className="close-btn"
      onClick={() => setOpen(false)}
    >
      ✕
    </button>
  </div>

  <div className="account-menu">
    {user?.role === "admin" && (
      <button
        className="account-menu-item"
        onClick={() => {
          setOpen(false);
          navigate("/admin");
        }}
      >
        <FaCog />
        <span>Admin Panel</span>
      </button>
    )}

    <button
      className="account-menu-item logout"
      onClick={() => {
        setOpen(false);
        handleLogout();
      }}
    >
      <FaSignOutAlt />
      <span>Logout</span>
    </button>
  </div>
</div>
)}

  </div>
    </div>
    );
  }

  return (
    <div className="account-container pl-20">
      <div className="account-buttons">
        <button 
          className="account-btn login-btn"
          onClick={() => setShowLogin(true)}
        >
          <FaSignInAlt />
          <span>Login</span>
        </button>
        
        <button 
          className="account-btn register-btn"
          onClick={() => setShowRegister(true)}
        >
          <FaUserPlus />
          <span>Register</span>
        </button>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)} style={{marginTop:"20%"}}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Login</h3>
              <button 
                className="modal-close"
                onClick={() => setShowLogin(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="modal-overlay" onClick={() => setShowRegister(false)} style={{marginTop:"20%"}}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Register</h3>
              <button 
                className="modal-close"
                onClick={() => setShowRegister(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleRegister} className="auth-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  required
                  minLength="6"
                />
              </div>
              
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  required
                  minLength="6"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account; 