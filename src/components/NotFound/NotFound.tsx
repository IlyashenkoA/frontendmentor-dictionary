import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <img src="/assets/images/emoji.svg" alt='Emoji'></img>
      <h2>No Definitions found</h2>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.
      </p>
    </div>
  );
};