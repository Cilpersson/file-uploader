import React from 'react';
import { WordStyling } from './WordStyling';

export const WordSorting = ({ file }) => {
	// const stringText = file;
	// let counter = Object.create(null);
	let counter = {};
	let compare = 0;
	let mostOccurring = [];

	const wordArray = (stringOfWords) => {
		const arrayOfWords = stringOfWords.toLowerCase().split(/\s+/);

		arrayOfWords.forEach((wordInArray) => {
			//I added "wordInArray.includes('_')" because I didn't think that a_ should count as a word (Doughnut file) perhaps I should have made a RegEx for all strange symbols instead.
			if (wordInArray.includes('_')) {
				counter[wordInArray] = 0;
			} else if (counter[wordInArray] === undefined) {
				counter[wordInArray] = 1;
			} else {
				counter[wordInArray] = counter[wordInArray] + 1;
			}

			if (counter[wordInArray] > compare) {
				compare = counter[wordInArray];
				mostOccurring = [];
				mostOccurring.push(wordInArray);

				//This part checks if there is more than one word that occurs most times.
			} else if (counter[wordInArray] === compare) {
				mostOccurring.push(wordInArray);
			}
		});
	};

	return (
		<div>
			{wordArray(file)}
			<WordStyling file={file} mostOccurring={mostOccurring} />
		</div>
	);
};
