import React, { useEffect, useState } from "react";

const UseDebounce = (value, delay) => {
	// Setea el estado del debounce
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Set debouncedValue to value (passed in) after the specified delay
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};

export default UseDebounce;
