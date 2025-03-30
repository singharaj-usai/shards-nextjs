 'use client';

import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Button 
} from '../../nextjs-compat';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

export default function ExamplePage() {
  return (
    <Container>
      <Row>
        <Col md={8} className="mx-auto my-5">
          <Card>
            <CardHeader>Shards React with Next.js 15</CardHeader>
            <CardBody>
              <h2>Bootstrap 5 Example</h2>
              <p>This demonstrates Shards React working with Next.js 15 App Router and Bootstrap 5</p>
              <Button theme="primary" className="me-2">Primary Button</Button>
              <Button theme="secondary">Secondary Button</Button>
            </CardBody>
            <CardFooter>Updated for Next.js 15 compatibility</CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}