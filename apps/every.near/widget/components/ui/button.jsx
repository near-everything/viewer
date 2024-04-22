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
      return "#DC3D43";
    } else if (props.variant === "primary") {
      return "#171717";
    } else if (props.variant === "secondary" || props.variant === "tetriary") {
      return "#fff";
    }
  }};

  border: ${(props) => {
    if (props.variant === "secondary" && props.type === "danger") {
      return "1px solid #F3AEAF";
    } else if (props.variant === "secondary") {
      return "1px solid #DBDBDB";
    } else {
      return ""; // No border for other cases
    }
  }};

  color: ${(props) => {
    if (props.variant === "primary") {
      return "#fff";
    } else if (props.variant === "secondary" && props.type === "danger") {
      return "#CD2B31";
    } else if (props.variant === "secondary") {
      return "#171717";
    } else if (props.variant === "tetriary" && props.type === "danger") {
      return "#CD2B31";
    } else if (props.variant === "tetriary") {
      return "#6F6F6F";
    }
  }};

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
        return "#6F6F6F";
      } else if (props.variant === "secondary") {
        return "#FCFCFC";
      } else if (props.variant === "tetriary" && props.type === "danger") {
        return "#FF050508";
      } else if (props.variant === "tetriary") {
        return "#F8F8F8";
      }
    }};

    border: ${(props) => {
      if (props.variant === "secondary") {
        return "1px solid #C7C7C7";
      }
    }};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => {
      if (props.variant === "primary") {
        return "#C7C7C7";
      }
    }};
    border: ${(props) => {
      if (props.variant === "secondary") {
        return "1px solid #DBDBDB";
      }
    }};
    color: ${(props) => {
      if (props.variant === "primary") {
        return "rgba(255, 255, 255, 0.59)";
      } else if (props.variant === "secondary" || props.variant === "tetriary") {
        return "#C7C7C7";
      }
    }};
  }
`;

const StyledLink = styled.a`
  all: unset;

  display: inline-flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;

  color: #006adc;
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
  }

  &:disabled {
    color: #c7c7c7;
  }
`;

const Button = ({ children, onClick, variant, size, href, type, icon, ...restProps }) => {
  if (href) {
    return (
      <StyledLink href={href} size={size} {...restProps}>
        {children}
      </StyledLink>
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
