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
  background: var(--chip-bg, #f3f3f3);

  color: var(--chip-color, #171717);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;

  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    background: var(--chip-hover-bg, #e8e8e8);
  }

  &.selected {
    background: var(--chip-selected-bg, #171717);
    color: var(--chip-selected-color, #fff);

    svg {
      path {
        fill: var(--chip-selected-icon, #dbdbdb);
      }
    }

    &:hover {
      background: var(--chip-selected-hover-bg, #6f6f6f);
    }
  }
`;

const Chip = ({ children, selected, onClick, size, multiple, ...restProps }) => {
  return (
    <StyledChip size={size} className={selected ? "selected" : ""} onClick={onClick} {...restProps}>
      {children} {multiple ? selected ? <X /> : <Plus /> : null}
    </StyledChip>
  );
};

return { Chip };
