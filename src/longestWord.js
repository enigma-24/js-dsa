const longestWord = (sentence) => {
	const arrWords = sentence.split(' ');
	let wordLongest = '';
	for (let i = 0; i < arrWords.length; i++) {
		if (arrWords[i].length >= wordLongest.length) wordLongest = arrWords[i];
	}

	return wordLongest;
};

module.exports = longestWord;
