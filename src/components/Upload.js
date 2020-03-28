import React, { useState } from 'react';
import { WordSorting } from './WordSorting.js';

export const Upload = () => {
	const [ uploaded, setUploaded ] = useState(false);
	const [ file, setFile ] = useState('');

	let fileReader;
	let content = '';

	const handleFileRead = () => {
		content = fileReader.result;
		setFile(content);
		//setUploaded makes sure that the functions in the wordstyling component won't runt until a file is acutally succsefulyy uploaded.
		setUploaded(true);
	};

	const handleFileChoosen = (file) => {
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead;
		//Added this if-statement to prevent the site from crashing when clicking on Select text file a second time and then pressing on cancel.
		if (file instanceof Blob) {
			fileReader.readAsText(file);
		}
	};

	return (
		<div className="upload">
			<label htmlFor="file" className="select-file-btn">
				Select text file
			</label>
			<input
				text="Drag text file here"
				type="file"
				id="file"
				style={{ display: 'none' }}
				className="inputFile"
				accept=".txt, .md, .rtf"
				onChange={(event) => handleFileChoosen(event.target.files[0])}
			/>
			<WordSorting file={file} uploaded={uploaded} />
		</div>
	);
};
