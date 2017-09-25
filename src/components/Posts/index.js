import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({posts}) => {
  return (
    <div id="Posts" className="mw8 ph4 ph0-l center cb pt6">
      <h2 className="f1 secondary" >Posts</h2>
      {posts.map(({id, title, description}) => (
        <article key={id} className="pt3 pb3">
          <h3 className="f2 fw1 color2">{title}</h3>
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

