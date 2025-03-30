import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

/**
 * Shards React provides support for all native Bootstrap 5 layout elements including **containers**, **rows**, **columns** and **form rows** so you can use its full power while building your project's responsive layout powered by flexbox.
 */
const Container = React.forwardRef((props, ref) => {
  const { className, fluid, tag: Tag = "div", ...attrs } = props;
  
  // Update for Bootstrap 5 - fluid can now be boolean or string like 'md', 'lg', etc.
  const classes = classNames(
    className,
    fluid 
      ? typeof fluid === 'string'
        ? `container-${fluid}`
        : "container-fluid" 
      : "container"
  );

  return <Tag {...attrs} ref={ref} className={classes} />;
});

Container.displayName = 'Container';

Container.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  
  /**
   * Whether the container is fluid or not, or the breakpoint at which the container becomes non-fluid.
   */
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Container.defaultProps = {
  tag: "div",
  fluid: false
};

export default Container;
