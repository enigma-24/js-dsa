const longestWord = (sentence) => {
	const arrWords = sentence.split(' ');
	let longestWord = '';
	for (let i = 0; i < arrWords.length; i++) {
		if (arrWords[i].length >= longestWord.length) longestWord = arrWords[i];
	}

	return longestWord;
};

module.exports = longestWord;
