import { BaseBoxShapeTool } from '@tldraw/tldraw';

// A tool used to create our custom card shapes. Extending the base
// box shape tool gives us a lot of functionality for free.
export class ThingShapeTool extends BaseBoxShapeTool {
	static id = 'card';
	static initial = 'idle';
	shapeType = 'card';

	onDoubleClick(_info) {
		// you can handle events in handlers like this one;
		// check the BaseBoxShapeTool source as an example
	}
}