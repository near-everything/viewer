import { BaseBoxShapeUtil, HTMLContainer } from "@tldraw/tldraw";

export class ThingShapeUtil extends BaseBoxShapeUtil {
  // Id — the shape util's id
  static type = "card";

  // Flags — there are a LOT of other flags!
  isAspectRatioLocked(_shape) {
    return false;
  }

  canResize(_shape) {
    return true;
  }

  canBind(_shape) {
    return true;
  }

  // Default props — used for shapes created with the tool
  defaultProps() {
    return {
      w: 300,
      h: 300,
    };
  }

  // Render method — the React component that will be rendered for the shape
  render(shape) {
    const bounds = this.bounds(shape);

    return (
      <HTMLContainer
        id={shape.id}
        style={{
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "all",
        }}
      >
        {bounds.w.toFixed()}x{bounds.h.toFixed()}
      </HTMLContainer>
    );
  }

  // Indicator — used when hovering over a shape or when it's selected; must return only SVG elements here
  indicator(shape) {
    return (
      <svg width={shape.props.w} height={shape.props.h}>
        <rect
          width={shape.props.w}
          height={shape.props.h}
          fill="currentColor"
        />
      </svg>
    );
  }
}
