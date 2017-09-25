import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({posts}) => {
  console.log(posts)
  return (
    <div>
      <h2>Posts</h2>
      {posts.map(({id, title, description}) => (
        <article key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
      <div>View More</div>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array
};

export default Posts;

