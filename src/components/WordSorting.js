import React from 'react';
import { WordStyling } from './WordStyling';

export const WordSorting = ({ file, uploaded }) => {
	const stringText = file;
	// let counter = Object.create(null);
	let counter = {};
	let compare = 0;
	let mostOccuring = [];

	console.log(stringText);

	const wordArray = (stringOfWords) => {
		const arrayOfWords = stringOfWords.toLowerCase().split(/\s+/);

		arrayOfWords.forEach((wordInArray) => {
			//"wordInArray.includes('_')"" is not a clean solution but it's a solution at least.
			if (wordInArray.includes('_')) {
				counter[wordInArray] = 0;
			} else if (counter[wordInArray] === undefined) {
				counter[wordInArray] = 1;
			} else {
				counter[wordInArray] = counter[wordInArray] + 1;
			}

			if (counter[wordInArray] > compare) {
				compare = counter[wordInArray];
				mostOccuring = [];
				mostOccuring.push(wordInArray);

				//This part checks if there is more than one word that occurs most times.
			} else if (counter[wordInArray] === compare) {
				mostOccuring.push(wordInArray);
			}
		});
	};

	return (
		<div>
			{wordArray(file)}
			<WordStyling txt={stringText} mostOccuring={mostOccuring} uploaded={uploaded} />
		</div>
	);
};
