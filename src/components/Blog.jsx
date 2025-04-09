import React from 'react';
import '../styles/Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
      date: 'April 5, 2025',
      category: 'React',
      image: '/images/blog/react-hooks.jpg',
      url: '/blog/getting-started-with-react-hooks'
    },
    {
      id: 2,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to creating robust and scalable APIs using Node.js and Express.',
      date: 'March 22, 2025',
      category: 'Backend',
      image: '/images/blog/node-express.jpg',
      url: '/blog/building-restful-apis-with-nodejs-and-express'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use Each',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox and knowing when to use each layout system.',
      date: 'March 10, 2025',
      category: 'CSS',
      image: '/images/blog/css-layouts.jpg',
      url: '/blog/css-grid-vs-flexbox'
    },
    {
      id: 4,
      title: 'Introduction to TypeScript for JavaScript Developers',
      excerpt: 'Why you should consider adding TypeScript to your JavaScript projects and how to get started.',
      date: 'February 28, 2025',
      category: 'TypeScript',
      image: '/images/blog/typescript.jpg',
      url: '/blog/introduction-to-typescript'
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="section-title">Blog</h2>
        <p className="section-description">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.url} className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="/blog" className="btn primary-btn">View All Posts</a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
