import {Line} from "../modules/GCEngine";

export const gizmoLines = (): Line[][] => {
	return [
		[
			{start: {x:0, y:0, z:0}, end: {x:100, y:0, z:0}},
			{start: {x:80, y:0, z:3}, end: {x:100, y:0, z:0}},
			{start: {x:80, y:0, z:-3}, end: {x:100, y:0, z:0}},
			{start: {x:80, y:3, z:0}, end: {x:100, y:0, z:0}},
			{start: {x:80, y:-3, z:0}, end: {x:100, y:0, z:0}}
		],
		[
            {start: {x:0, y:0, z:0}, end: {x:0, y:100, z:0}},
            {start: {x:3, y:80, z:0}, end: {x:0, y:100, z:0}},
            {start: {x:-3, y:80, z:0}, end: {x:0, y:100, z:0}},
            {start: {x:0, y:80, z:3}, end: {x:0, y:100, z:0}},
            {start: {x:0, y:80, z:-3}, end: {x:0, y:100, z:0}}
		],
		[
            {start: {x:0, y:0, z:0}, end: {x:0, y:0, z:100}},
            {start: {x:3, y:0, z:80}, end: {x:0, y:0, z:100}},
            {start: {x:-3, y:0, z:80}, end: {x:0, y:0, z:100}},
            {start: {x:0, y:3, z:80}, end: {x:0, y:0, z:100}},
            {start: {x:0, y:-3, z:80}, end: {x:0, y:0, z:100}}
        ]
	];
}