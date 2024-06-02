import React from 'react';
import Article from './Article';
import horse from '../assets/horse.png';

import '../styles/blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={horse} date="Jun 2, 2024" text="Milk is the future. Let us exlore how it is?" />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={horse} date="Jun 2, 2024" text="Milk is the future. Let us exlore how it is?" />
        <Article imgUrl={horse} date="Jun 2, 2024" text="Milk is the future. Let us exlore how it is?" />
        <Article imgUrl={horse} date="Jun 2, 2024" text="Milk is the future. Let us exlore how it is?" />
        <Article imgUrl={horse} date="Jun 2, 2024" text="Milk is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
