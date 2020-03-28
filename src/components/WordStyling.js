import React from 'react';

export const WordStyling = ({ txt, mostOccuring, uploaded }) => {
	const styleTheText = (mostOccuring, stringOfWords, uploaded) => {
		if (uploaded === true && mostOccuring[0] !== '') {
			mostOccuring.forEach((word) => {
				const newWord = `FOO${word}BAR`;
				//I hade some issues with words beeing replaced inside other word such as faTHEr, i tried so many things and finally
				//found this solution. This is my first encounter with RegEx and I learned a lot!
				let reg = new RegExp(`\\b${word}\\b`, 'gi');
				stringOfWords = stringOfWords.replace(reg, newWord);
			});
			return stringOfWords;
			//If mostOccuring[] === "" the most occuring word is a blank space meaning that the text file does not contain any acutal words.
		} else if (uploaded === true && mostOccuring[0] === '') {
			return 'You seem to have uploaded an empty text file 😔';
		}
	};

	//This is just silly function that shows which word or words was most popular and adds a &-sign if there is more than one.
	const textFacts = (wordObject) => {
		let popularWord = '';
		wordObject.forEach((word, index) => {
			if (wordObject.length - index === 1) {
				popularWord += `${word}`;
			} else if (wordObject.length - index > 1) {
				popularWord += `${word} & `;
			}
		});
		return popularWord;
	};
	//Writes either "word was" or "words where" depending on how many words there was the most of.
	const grammarCheck = (wordObject) => {
		let oneOrMore;
		if (wordObject.length === 1) {
			oneOrMore = 'word is:';
		} else {
			oneOrMore = 'words are:';
		}
		return oneOrMore;
	};

	return (
		<section className="all-text-container">
			{/* Hiding or showing word-facts depending on if the text file was uploaded and if it was empty or not */}
			<div className={uploaded && mostOccuring[0] !== '' ? 'show-word-facts' : 'hide-word-facts'}>
				The most occuring {grammarCheck(mostOccuring)}{' '}
				<span className="span-word-fact">{textFacts(mostOccuring)}</span>
			</div>
			<div className="text-container">
				<p className="text-for-container">{styleTheText(mostOccuring, txt, uploaded)}</p>
			</div>
		</section>
	);
};
