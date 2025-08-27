# We3Vision Frontend

A modern React-based frontend for the We3Vision website with blog functionality and user authentication.

## Features

### 🔐 Authentication System
- **User Registration & Login**: Secure JWT-based authentication
- **Account Management**: User profile editing and password changes
- **Role-Based Access**: Admin and user roles with different permissions
- **Protected Routes**: Secure access to admin panel and user-specific features

### 📝 Blog System
- **Public Blog List**: Browse and search published blogs
- **Blog Categories**: Filter blogs by technology, design, development, etc.
- **Search Functionality**: Find blogs by title, content, or tags
- **Pagination**: Efficient loading of large blog collections
- **Responsive Design**: Mobile-friendly blog layout

### 👨‍💼 Admin Panel
- **Dashboard**: Overview of blog and user statistics
- **Blog Management**: Create, edit, delete, and manage blog posts
- **User Management**: View and manage user accounts
- **File Upload**: Image upload for blog featured images
- **Rich Text Editor**: Advanced content editing capabilities

### 🎨 Modern UI/UX
- **Responsive Design**: Works on all devices and screen sizes
- **Modern Styling**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, loading states, and user feedback
- **Accessibility**: WCAG compliant design patterns

## Tech Stack

- **React 19**: Latest React with hooks and functional components
- **React Router**: Client-side routing
- **Bootstrap 5**: UI framework for responsive design
- **Axios**: HTTP client for API communication
- **React Toastify**: User notification system
- **React Icons**: Icon library
- **Context API**: State management for authentication

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running (see backend README)

### Installation

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Account.js      # Authentication component
│   ├── Account.css     # Account component styles
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── context/            # React context providers
│   └── AuthContext.js  # Authentication context
├── pages/              # Page components
│   ├── Blog.js         # Blog list page
│   ├── Blog.css        # Blog page styles
│   ├── Admin.js        # Admin panel
│   ├── Admin.css       # Admin panel styles
│   └── ...             # Other existing pages
├── services/           # API services
│   └── api.js          # Axios configuration
└── App.js              # Main application component
```

## Authentication Flow

### User Registration
1. User clicks "Register" in the account section
2. Fills out registration form (name, email, password)
3. Form validation and API call to `/api/auth/register`
4. JWT token stored in localStorage
5. User automatically logged in

### User Login
1. User clicks "Login" in the account section
2. Enters email and password
3. API call to `/api/auth/login`
4. JWT token stored and user authenticated
5. Account dropdown shows user info and options

### Admin Access
1. Admin users see "Admin Panel" option in account dropdown
2. Clicking redirects to `/admin` route
3. Admin panel shows dashboard, blog management, and user management
4. Protected routes ensure only admins can access

## Blog Features

### Public Blog List (`/blog`)
- **Search**: Real-time search through blog titles and content
- **Categories**: Filter by predefined categories
- **Pagination**: Load blogs in pages of 9 items
- **Responsive Grid**: Cards layout that adapts to screen size
- **Blog Cards**: Show featured image, title, excerpt, author, and stats

### Blog Management (Admin)
- **Create Blog**: Form with title, content, excerpt, category, tags, status
- **Edit Blog**: Pre-populated form for existing blogs
- **Delete Blog**: Confirmation dialog before deletion
- **Status Management**: Draft, published, archived states
- **Image Upload**: Featured image upload with preview

## API Integration

The frontend communicates with the backend through the `api.js` service:

```javascript
// Example API calls
import api from '../services/api';

// Get blogs
const response = await api.get('/blog');

// Create blog (admin only)
const formData = new FormData();
formData.append('title', 'Blog Title');
formData.append('content', 'Blog content...');
await api.post('/blog', formData);

// User authentication
await api.post('/auth/login', { email, password });
```

## Styling

The application uses a combination of:
- **Bootstrap 5**: For layout and basic components
- **Custom CSS**: For specific styling and animations
- **CSS Modules**: For component-specific styles
- **Responsive Design**: Mobile-first approach

### Color Scheme
- **Primary**: `#667eea` (Blue gradient)
- **Secondary**: `#764ba2` (Purple gradient)
- **Success**: `#28a745` (Green)
- **Warning**: `#ffc107` (Yellow)
- **Danger**: `#dc3545` (Red)

## Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
- `REACT_APP_API_URL`: Backend API URL
- `REACT_APP_ENV`: Environment (development/production)

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Role-based access control
- **Input Validation**: Client-side form validation
- **XSS Protection**: Sanitized content rendering
- **CSRF Protection**: Token-based request validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the We3Vision Private Limited website.

## Support

For support and questions, please contact the development team.
