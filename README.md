# Personal Website for Full-Stack Developer

A modern, responsive personal website for a full-stack developer, built with React for the frontend and Express.js for the backend. This website includes sections for Home, About, Projects, Blog, and Contact.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Full-Stack Implementation**: React frontend with Express.js backend
- **Contact Form**: Functional contact form that sends emails
- **Project Showcase**: Display your portfolio projects with descriptions and links
- **Blog Section**: Share your knowledge and insights

## Tech Stack

### Frontend
- React
- React Router
- CSS (with modern features)
- Responsive design principles

### Backend
- Node.js
- Express.js
- Nodemailer for email functionality

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure the backend
   - Open `server/server.js`
   - Update the email configuration with your email service details

### Running the Application

#### Development Mode

To run both frontend and backend concurrently:
```bash
npm run dev:all
```

Or run them separately:

- Frontend only:
  ```bash
  npm run dev
  ```

- Backend only:
  ```bash
  npm run dev:server
  ```

#### Production Mode

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run server
   ```

## Customization

### Personal Information
- Update your name, bio, and skills in the `About.jsx` component
- Add your projects in the `Projects.jsx` component
- Update your blog posts in the `Blog.jsx` component
- Configure your contact information in the `Contact.jsx` component

### Styling
- Main styles are in the CSS files in the `src/styles` directory
- Global styles are in `App.css`

## Deployment

This application can be deployed to various platforms:

### Netlify/Vercel (Frontend)
1. Connect your GitHub repository
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`

### Heroku/Railway (Full-Stack)
1. Create a new application
2. Connect your GitHub repository
3. Set the build command in the Procfile: `npm run build && npm run server`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
