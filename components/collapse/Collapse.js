import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Transition } from "react-transition-group";
import pick from "lodash.pick";
import omit from "lodash.omit";

import { TIMEOUT, TRANSITION_KEYS, TRANSITION_CLASS_MAP } from "../constants";
import { reflow, getNodeHeight } from "../utils";

/**
 * The `Collapse` component allows you to easily toggle the visibility of your content.
 */
class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null
    };

    this.nodeRef = React.createRef();
  }

  render() {
    const {
      tag: Tag,
      open,
      className,
      navbar,
      children,
      innerRef,
      ...attributes
    } = this.props;

    const { height } = this.state;
    const transitionProps = pick(attributes, TRANSITION_KEYS);
    const childProps = omit(attributes, TRANSITION_KEYS);

    return (
      <Transition
        nodeRef={this.nodeRef}
        {...transitionProps}
        in={open}
        onEntering={this.onEntering.bind(this)}
        onEntered={this.onEntered.bind(this)}
        onExit={this.onExit.bind(this)}
        onExiting={this.onExiting.bind(this)}
        onExited={this.onExited.bind(this)}
      >
        {state => {
          const collapseClass = {
            'collapse': true,
            'collapsing': state === 'entering' || state === 'exiting',
            'show': state === 'entered' || state === 'entering'
          };
          
          const style = height === null ? null : { height };
          
          const classes = classNames(
            className,
            TRANSITION_CLASS_MAP[state] || "collapse",
            navbar && "navbar-collapse"
          );

          return (
            <Tag
              ref={node => {
                this.nodeRef.current = node;
                if (innerRef) innerRef(node);
              }}
              style={{ ...style, ...childProps.style }}
              className={classNames(classes, collapseClass)}
              {...childProps}
            >
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }

  onEntering(node) {
    this.setState({ height: getNodeHeight(node) });
    this.props.onEntering(node);
  }

  onEntered(node) {
    this.setState({ height: null });
    this.props.onEntered(node);
  }

  onExit(node) {
    this.setState({ height: getNodeHeight(node) });
    this.props.onExit(node);
  }

  onExiting(node) {
    reflow(node);
    this.setState({ height: 0 });
    this.props.onExiting(node);
  }

  onExited(node) {
    this.setState({ height: null });
    this.props.onExited(node);
  }
}

Collapse.propTypes = {
  ...Transition.propTypes,
  /**
   * Whether it is open, or not.
   */
  open: PropTypes.bool,
  /**
   * The children components.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * The element tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * The class name.
   */
  className: PropTypes.node,
  /**
   * Whether it is located inside a navbar, or not.
   */
  navbar: PropTypes.bool,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ])
};

Collapse.defaultProps = {
  ...Transition.defaultProps,
  open: false,
  appear: false,
  enter: true,
  exit: true,
  tag: "div",
  timeout: TIMEOUT.COLLAPSE
};

export default Collapse;
