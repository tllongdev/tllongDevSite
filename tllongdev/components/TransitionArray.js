import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

export default () => {
	const [toggle, set] = useState(true);
	const transitions = useTransition(toggle, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
	return transitions.map(({ item, key, props }) =>
		item ? (
			<animated.div key={key} style={props}>
				😄
			</animated.div>
		) : (
			<animated.div key={key} style={props}>
				🤪
			</animated.div>
		)
	);
};
