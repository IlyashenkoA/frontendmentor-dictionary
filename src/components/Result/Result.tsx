import React from "react";
import { DictionaryObject } from "../../types/dictionary";
import { PlayButton } from "../PlayButton/PlayButton";
import './Result.css';

const Result: React.FC<{ data: DictionaryObject; }> = ({ data }) => {
  let audio = '';
  let phonetic = '';

  data.phonetics.forEach((item) => {
    if (item.text && item.audio.length > 0) {
      audio = item.audio;
      phonetic = item.text;
    }
  });

  return (
    <div className="results__details">
      <div className="results__details-word">
        <div className="word-details">
          <h1>{data.word}</h1>
          <h2>{data.phonetic ? data.phonetic : phonetic}</h2>
        </div>
        {audio && <PlayButton audio={audio} />}
      </div>
      <div className="results__details-meanings">
        {data.meanings.map((item, index) => {
          return (
            <div className="meanings-container" key={index}>
              <div className="meaning-details">
                <div className="meaning-title">
                  <h1>{item.partOfSpeech}</h1>
                  <span></span>
                </div>
                <h2>Meaning</h2>
                <ul>
                  {item.definitions.map((item, index) => {
                    return (
                      <li key={index}>{item.definition}</li>
                    );
                  })}
                </ul>
              </div>
              {item.synonyms.length > 0 && <div className="meaning-synonyms">
                <h2>Synonyms</h2>
                <p>{item.synonyms.map((item, index, array) => {
                  if (array.length === 1) return item;
                  if (index + 1 === array.length) return item;

                  return (item + ', ');
                })}</p>
              </div>}
              <br />
              {item.antonyms.length > 0 && <div className="meaning-antonyms">
                <h2>Antonyms</h2>
                <p>{item.antonyms.map((item, index, array) => {
                  if (array.length === 1) return item;
                  if (index + 1 === array.length) return item;

                  return (item + ', ');
                })}</p>
              </div>}
            </div>
          );
        })}
      </div>
      {data.sourceUrls &&
        <div className="results__details-source">
          <span></span>
          <h2>Source</h2>
          <div className="source-link">
            <a
              href={data.sourceUrls[0]}
              target="_blank"
              rel="noreferrer"
            >
              {data.sourceUrls[0]}
              <img
                src="/assets/images/icon-new-window.svg"
                alt="Open in new window icon"
              />
            </a>
          </div>
        </div>}
    </div>
  );
};

export default React.memo(Result);