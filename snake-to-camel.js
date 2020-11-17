function uppercase(word) {
  return word[0].toUpperCase() + word.slice(1);
}


function snakeToCamel(letter) {

	const words = letter.split("_");
	for(let i=1;i<words.length;i++){
		words[i] = uppercase(words[i])
	}
    
    return words.join("");
}

