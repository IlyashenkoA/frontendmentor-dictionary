export interface DictionaryObject {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
	license?: License;
	sourceUrls?: string[];
}

interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms: string[];
	antonyms: any[];
}

interface Definition {
	definition: string;
	synonyms: string[][];
	antonyms: any[];
	example?: string;
}

interface Phonetic {
	text: string;
	audio: string;
	sourceUrl: string;
	license: License;
}

interface License {
	name: string;
	url: string;
}
