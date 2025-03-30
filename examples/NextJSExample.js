import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardBody, 
  CardFooter 
} from '../dist/shards-react.next.js';

// This is a "use client" component for Next.js 15
export default function NextJSExample() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8} lg={6} className="mx-auto my-5">
          <Card>
            <CardHeader>Shards React with Next.js 15</CardHeader>
            <CardBody>
              <CardTitle>Bootstrap 5 Compatible</CardTitle>
              <p>This example demonstrates Shards React working with Next.js 15 and Bootstrap 5</p>
              <Button>Click Me</Button>
            </CardBody>
            <CardFooter>Card Footer</CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
} 