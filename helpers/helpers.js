export const randomIndex = (array) => {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
};
