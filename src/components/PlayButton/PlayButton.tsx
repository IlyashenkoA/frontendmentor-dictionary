import './PlayButton.css';

export const PlayButton: React.FC<{ audio: string | undefined; }> = ({ audio }) => {
  return (
    <button className="play-btn" onClick={() => {
      new Audio(audio).play();
    }}></button>
  );
};