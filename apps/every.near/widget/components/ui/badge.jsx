const StyledBadge = styled.div`
  display: inline-flex;
  height: 28px;
  min-width: 28px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  border-radius: 100px;

  background: rgba(0, 0, 0, 0.05);
  color: #171717;
  background: ${(props) => {
    if (props.color === "black") {
      return props.variant === "alpha" ? "rgba(0, 0, 0, 0.05)" : "#171717";
    } else if (props.color === "blue") {
      return props.variant === "alpha" ? "rgba(2, 128, 255, 0.07)" : "#0081F1";
    } else if (props.color === "green") {
      return props.variant === "alpha" ? "rgba(2, 186, 60, 0.09)" : "#299764";
    } else if (props.color === "yellow") {
      return props.variant === "alpha" ? "rgba(255, 234, 1, 0.18)" : "#F7CE00";
    } else if (props.color === "red") {
      return props.variant === "alpha" ? "rgba(255, 1, 1, 0.06)" : "#DC3D43";
    }
  }};

  color: ${(props) => {
    if (props.color === "black") {
      return props.variant === "alpha" ? "var(--badge-alpha-black-color, #171717)" : "#fff";
    } else if (props.color === "blue") {
      return props.variant === "alpha" ? "#006ADC" : "#fff";
    } else if (props.color === "green") {
      return props.variant === "alpha" ? "#18794E" : "#fff";
    } else if (props.color === "yellow") {
      return props.variant === "alpha" ? "#35290F" : "#fff";
    } else if (props.color === "red") {
      return props.variant === "alpha" ? "#CD2B31" : "#fff";
    }
  }};

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;

  ${(props) => {
    if (props.size === "small") {
      return {
        height: "24px",
        minWidth: "24px",
        fontSize: "12px",
      };
    } else if (props.size === "x-small") {
      return {
        height: "20px",
        minWidth: "20px",
        fontSize: "12px",
        padding: "4px",
      };
    } else if (props.size === "xx-small") {
      return {
        height: "16px",
        minWidth: "16px",
        padding: "4px",
      };
    }
  }}
`;

const Badge = ({ children, size, variant, color, ...restProps }) => {
  return (
    <StyledBadge size={size} variant={variant ?? "solid"} color={color ?? "black"} {...restProps}>
      {children}
    </StyledBadge>
  );
};

return { Badge };
