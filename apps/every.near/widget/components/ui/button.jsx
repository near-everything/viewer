const StyledButton = styled.button`
  /* base style */
  all: unset;
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;

  /* font */
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.16px;

  /* transition */
  transition: all 300ms ease;

  /* variant styles */
  background: ${(props) => {
    if (props.variant === "primary" && props.type === "danger") {
      return "var(--btn-primary-danger-bg, #DC3D43)";
    } else if (props.variant === "primary") {
      return "var(--btn-primary-bg, #171717)";
    } else if (props.variant === "secondary" || props.variant === "tertiary") {
      return "var(--btn-secondary-bg, #fff)";
    }
  }};

  border: ${(props) => {
    if (props.variant === "secondary" && props.type === "danger") {
      return "1px solid var(--btn-secondary-danger-stroke, #F3AEAF)";
    } else if (props.variant === "secondary") {
      return "1px solid var(--btn-secondary-stroke, #DBDBDB)";
    } else {
      return ""; // No border for other cases
    }
  }};

  color: ${(props) => {
    if (props.variant === "primary") {
      return "var(--btn-primary-color, #fff)";
    } else if (
      (props.variant === "secondary" || props.variant === "tertiary") &&
      props.type === "danger"
    ) {
      return "var(--btn-secondary-danger-color, #CD2B31) !important";
    } else if (props.variant === "secondary") {
      return "var(--btn-secondary-color, #171717)";
    } else if (props.variant === "tertiary") {
      return "var(--btn-tertiary-color, #6F6F6F)";
    }
  }};

  /* handle svg */
  svg,
  path {
    stroke: ${(props) => {
      if (props.variant === "primary") {
        return "var(--btn-primary-color, #fff)";
      } else if (
        (props.variant === "secondary" || props.variant === "tertiary") &&
        props.type === "danger"
      ) {
        return "var(--btn-secondary-danger-color, #CD2B31) !important";
      } else if (props.variant === "secondary") {
        return "var(--btn-secondary-color, #171717)";
      } else if (props.variant === "tertiary") {
        return "var(--btn-tertiary-color, #6F6F6F)";
      }
    }};
  }

  font-size: ${(props) => {
    if (props.size === "large") {
      return "16px";
    }
  }};

  height: ${(props) => {
    if (props.size === "large") {
      return "32px";
    } else if (props.size === "medium") {
      return "24px";
    } else if (props.size === "small") {
      return "16px";
    }
  }};

  width: ${(props) => {
    if (props.icon) {
      if (props.size === "large") {
        return "32px";
      } else if (props.size === "medium") {
        return "24px";
      } else if (props.size === "small") {
        return "16px";
      }
    }
  }};

  padding: ${(props) => {
    if (props.icon) {
      return "8px";
    }
  }};

  &:hover {
    cursor: pointer;
    background: ${(props) => {
      if (props.variant === "primary" && props.type === "danger") {
        return "#CD2B31";
      } else if (props.variant === "primary") {
        return "var(--btn-primary-hover-bg, #6F6F6F)";
      } else if (props.variant === "secondary") {
        return "var(btn-secondary-hover-bg, #FCFCFC)";
      } else if (props.variant === "tertiary" && props.type === "danger") {
        return "var(--btn-tertiary-danger-hover-bg,#FF050508)";
      } else if (props.variant === "tertiary") {
        return "var(--btn-tertiary-hover-bg, #F8F8F8)";
      }
    }};

    border: ${(props) => {
      if (props.variant === "secondary") {
        return "1px solid var(--btn-secondary-hover-stroke, #C7C7C7)";
      }
    }};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => {
      if (props.variant === "primary") {
        return "var(--btn-primary-disabled-bg, #C7C7C7)";
      }
    }};
    border: ${(props) => {
      if (props.variant === "secondary") {
        return "1px solid var(--btn-secondary-disabled-stroke, #DBDBDB)";
      }
    }};
    color: ${(props) => {
      if (props.variant === "primary") {
        return "rgba(255, 255, 255, 0.59)";
      } else if (props.variant === "secondary" || props.variant === "tertiary") {
        return "var(--btn-primary-disabled-bg, #C7C7C7)";
      }
    }};

    svg,
    path {
      stroke: ${(props) => {
        if (props.variant === "primary") {
          return "rgba(255, 255, 255, 0.59)";
        } else if (props.variant === "secondary" || props.variant === "tertiary") {
          return "var(--btn-primary-disabled-bg, #C7C7C7)";
        }
      }};
    }
  }
`;

const StyledLink = styled.button`
  all: unset;

  display: inline-flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;

  color: #006adc;

  svg,
  path {
    stroke: #006adc;
  }

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;

  font-size: ${(props) => {
    if (props.size === "large") {
      return "16px";
    }
  }};

  transition: all 300ms ease;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: #f5faff;
    color: #006adc;

    svg,
    path {
      stroke: #006adc;
    }
  }

  &:active {
    color: #006adc;

    svg,
    path {
      stroke: #006adc;
    }
  }

  &:disabled {
    color: #c7c7c7;
    svg,
    path {
      stroke: #c7c7c7;
    }
  }
`;

const Button = ({
  children,
  onClick,
  variant,
  size,
  href,
  type,
  icon,
  linkClassName,
  ...restProps
}) => {
  if (href) {
    return (
      <Link href={href} className={linkClassName}>
        <StyledLink
          onClick={onClick}
          variant={variant ?? "primary"}
          size={size ?? "medium"}
          icon={icon}
          type={type}
          {...restProps}
        >
          {children}
        </StyledLink>
      </Link>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      variant={variant ?? "primary"}
      size={size ?? "medium"}
      icon={icon}
      type={type}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

return { Button };
