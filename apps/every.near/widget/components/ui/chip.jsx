const { Plus, X } = VM.require("every.near/widget/icons") || {
  Plus: () => <></>,
  X: () => <></>,
};

const StyledChip = styled.div`
  display: inline-flex;
  height: 32px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  ${(props) => {
    if (props.size === "small") {
      return {
        height: "24px",
        padding: "8px 12px",
      };
    }
  }}

  border-radius: 12px;
  background: #f3f3f3;

  color: #171717;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;

  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    background: #e8e8e8;
  }

  &.selected {
    background: #171717;
    color: #fff;

    svg {
      path {
        fill: #dbdbdb;
      }
    }

    &:hover {
      background: #6f6f6f;
    }
  }
`;

const Chip = ({ children, selected, onClick, size, ...restProps }) => {
  return (
    <StyledChip size={size} className={selected ? "selected" : ""} onClick={onClick} {...restProps}>
      {children} {selected ? <X /> : <Plus />}
    </StyledChip>
  );
};

return { Chip };
