import React from 'react';

export const WordStyling = ({ file, mostOccuring }) => {
	const foobarTheText = (mostOccuring, stringOfWords) => {
		//I hade some issues with words beeing replaced inside other word such as faTHEr, i tried so many things and finally
		//found this (let reg = new RegExp(`\\b${word}\\b`, 'gi')) solution. This is my first encounter with RegEx and I learned a lot!

		if (mostOccuring[0] === '') {
			return 'You seem to have uploaded an empty text file 😔';
		} else {
			mostOccuring.forEach((word) => {
				const newWord = `FOO${word}BAR`;
				let reg = new RegExp(`\\b${word}\\b`, 'gi');
				stringOfWords = stringOfWords.replace(reg, newWord);
			});
			return stringOfWords;
		}
	};

	//This is just silly function that shows which word or words was most popular and adds a comma or a &-sign if there are several words.
	const textFact = (wordOrWords) => {
		let popularWord = '';
		wordOrWords.forEach((word, index) => {
			if (wordOrWords.length - index === 1) {
				popularWord += `${word}`;
			} else if (wordOrWords.length - index > 2) {
				popularWord += `${word}, `;
			} else {
				popularWord += `${word} & `;
			}
		});
		return popularWord;
	};

	return (
		<section className="all-text-container">
			{/* Hiding or showing word-facts depending on if the text file was uploaded and if it was empty or not */}
			<div className={mostOccuring[0] !== '' ? 'show-word-facts' : 'hide-word-facts'}>
				{/* Writes either "word was" or "words where" depending on how many words there was the most of. */}
				The most occuring {mostOccuring.length === 1 ? 'word is ' : 'words are '}{' '}
				<span className="span-word-fact">{textFact(mostOccuring)}</span>
			</div>
			<div className="text-container">
				<p className="text-for-container">{foobarTheText(mostOccuring, file)}</p>
			</div>
		</section>
	);
};
