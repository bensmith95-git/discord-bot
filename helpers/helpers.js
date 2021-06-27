export const randomIndex = (array) => {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
};

export const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};
