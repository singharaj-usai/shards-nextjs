'use client';

// Main entrypoint for Next.js App Router
import React from 'react';

// Import all components from the library
import * as Components from './components';

// Re-export all components but make sure they're marked as client components
export const {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader, 
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Collapse,
  Container,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormCheckbox,
  FormFeedback,
  FormGroup,
  FormInput,
  FormRadio,
  FormSelect,
  FormTextarea,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Popover,
  PopoverBody,
  PopoverHeader,
  Progress,
  Row,
  Slider,
  Tooltip
} = Components; 