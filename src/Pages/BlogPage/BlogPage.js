import React, { useState } from 'react';
import './BlogPage.css';
import resumefile from '../../assets/resume.pdf'; // Path to your resume PDF

const blogPosts = [
  {
    id: 1,
    title: 'Introduction to Cryptographic Hashing',
    date: 'December 2024',
    excerpt: 'Dive deep into the world of cryptographic hashing and understand how it secures data integrity.',
    content: `Cryptographic hashing is a fundamental concept in cybersecurity that transforms input data into a fixed-size string of characters. Unlike encryption, hashing is a one-way process: you cannot reverse a hash to obtain the original data.`,
    tags: ['Cryptography', 'Cybersecurity', 'Hashing'],
    files: [
      { name: 'Hashing Algorithms Guide', url: '/assets/hash_guide.pdf' }  // Path to the assets folder
    ],
    links: [
      { name: 'Learn more about SHA-256', url: 'https://example.com/sha256' }
    ]
  },
  {
    id: 2,
    title: 'Understanding Public Key Cryptography',
    date: 'November 2024',
    excerpt: 'Explore the mechanics of asymmetric encryption and its critical role in secure communications.',
    content: `Public key cryptography, or asymmetric encryption, is a revolutionary security mechanism that allows secure communication without a pre-shared secret key.`,
    tags: ['Cryptography', 'Security Protocols', 'Encryption'],
    files: [
      { name: 'Public Key Cryptography Whitepaper', url: '/assets/public_key_whitepaper.pdf' }
    ],
    links: [
      { name: 'Public Key Infrastructure Overview', url: 'https://example.com/pki' }
    ]
  },
  {
    id: 3,
    title: 'Understanding Lightweight Cryptography',
    date: 'December 2024',
    excerpt: 'The principles of lightweight cryptography focus on simplicity, efficiency, and resource optimization.',
    content: `Lightweight cryptography finds applications across diverse fields, including sensor networks, wearable devices, automotive systems, and smart homes. For instance, lightweight encryption secures real-time data in healthcare IoT devices like pacemakers and insulin pumps by balancing security and efficiency.`,
    tags: ['Cryptography', 'Security Protocols', 'Lightweight Encryption'],
    files: [
      { name: 'Lightweight Cryptography Whitepaper', url: {resumefile} },
      { name: 'Security in IoT Devices', url: '/assets/iot_security_guide.pdf' }
    ],
    links: [
      { name: 'Lightweight Cryptography Standards', url: 'https://example.com/lightweight-standards' },
      { name: 'Secure IoT Communication', url: 'https://example.com/iot-communication' }
    ]
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Cyber Insights & Cryptographic Explorations</h1>
        <p>Unraveling the complex world of cybersecurity and cryptography</p>
      </div>
      
      <div className="blog-content">
        <div className="blog-posts-list">
          {blogPosts.map(post => (
            <div 
              key={post.id} 
              className="blog-post-preview"
              onClick={() => setSelectedPost(post)}
            >
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="blog-post-detail">
            <h2>{selectedPost.title}</h2>
            <p className="post-date">{selectedPost.date}</p>
            <div className="post-content">
              {selectedPost.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="post-references">
              {selectedPost.files.length > 0 && (
                <div className="files">
                  <h3>Related Files:</h3>
                  <ul>
                    {selectedPost.files.map((file, index) => (
                      <li key={index}>
                        {/* Open files in new tab */}
                        <a href={file} target="_blank" rel="noopener noreferrer">{file.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedPost.links.length > 0 && (
                <div className="links">
                  <h3>Further Reading:</h3>
                  <ul>
                    {selectedPost.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button onClick={() => setSelectedPost(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
