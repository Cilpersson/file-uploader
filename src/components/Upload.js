import React, { useState } from 'react';
import { WordSorting } from './WordSorting.js';

export const Upload = () => {
	const [ uploaded, setUploaded ] = useState(false);
	const [ file, setFile ] = useState('');

	const handleFileRead = (fileReader) => {
		const { result } = fileReader;
		setFile(result);

		//setUploaded makes sure that the functions in the wordstyling component won't runt until a file is acutally succsefulyy uploaded.
		setUploaded(true);
	};

	const handleFileChoosen = (file) => {
		const fileReader = new FileReader();
		fileReader.onloadend = handleFileRead;
		fileReader.onloadend = () => handleFileRead(fileReader);
		//Added this if-statement to prevent the site from crashing when clicking on Select text file a second time and then pressing cancel.
		if (file instanceof Blob) {
			fileReader.readAsText(file);
		}
	};

	return (
		<div>
			<label htmlFor="file" className="select-file-btn">
				Select text file
			</label>
			<input
				type="file"
				id="file"
				style={{ display: 'none' }}
				accept=".txt, .md, .rtf, .doc, .docx"
				onChange={(event) => handleFileChoosen(event.target.files[0])}
			/>
			{uploaded && <WordSorting file={file} />}
		</div>
	);
};
