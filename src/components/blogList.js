import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogList() {
  const [blogData, setBlogData] = useState([]);
  const url = "http://localhost:3001/posts";
  const blogList = blogData.map((list) => {
    return (

        <Card style={{ width: '30rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{list.title}</Card.Title>
        <Card.Subtitle>{list.catagory}</Card.Subtitle>
        <Card.Text>
        {list.blog}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
    //   <div key={list.id}>
    //     <h3>{list.title}</h3>
    //     <h5>{list.catagory}</h5>
    //     <p>{list.blog}</p>
    //     <a></a>
    //   </div>
    );
//   });

  useEffect(() => {
    _fetchPosts();
  }, []);

  const _fetchPosts = () => {
    axios
      .get(url)
      .then((response) => {
        const allPosts = response.data;
        setBlogData(allPosts);
      })
      .catch((error) => console.error(error));
  };

  return <div>{blogList}</div>;
}

export default BlogList;
