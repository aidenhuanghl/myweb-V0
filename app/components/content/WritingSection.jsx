import React from 'react';

const WritingSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to create your first component.',
      date: 'June 15, 2023',
    },
    {
      id: 2,
      title: 'Understanding Next.js',
      excerpt: 'Explore the benefits of Next.js for building modern web applications.',
      date: 'July 22, 2023',
    },
    {
      id: 3,
      title: 'CSS Best Practices',
      excerpt: 'Tips and tricks for writing clean and maintainable CSS code.',
      date: 'August 10, 2023',
    },
  ];

  return (
    <section className="writing-section" id="writing">
      <h2>My Writing</h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p className="article-date">{article.date}</p>
            <p className="article-excerpt">{article.excerpt}</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        ))}
      </div>
      <div className="view-all">
        <a href="#" className="view-all-link">View All Articles</a>
      </div>
    </section>
  );
};

export default WritingSection; 