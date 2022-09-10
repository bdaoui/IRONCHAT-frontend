import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";

function Feed() {
    const user = useSelector((state) => state.user);
    return (
    <div>
        {user && 
          <Container>
          <Row>
              <Col md={4}>
                <img src="https://picsum.photos/200/300"/>
                <img src="https://picsum.photos/200/300"/>
                <img src="https://picsum.photos/200/300"/>
                <img src="https://picsum.photos/200/300"/>
                <img src="https://picsum.photos/200/300"/>
              </Col>
              <Col md={8}>
              <img src="https://picsum.photos/200/300"/>
              <img src="https://picsum.photos/200/300"/>
              <img src="https://picsum.photos/200/300"/>
              <img src="https://picsum.photos/200/300"/>
              </Col>
          </Row>
      </Container>}
       


    </div>
  )
}

export default Feed