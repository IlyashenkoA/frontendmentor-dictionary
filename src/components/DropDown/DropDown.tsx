import { useRef, useState } from "react";
import './DropDown.css';

export const DropDown = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuTop, setMenuTop] = useState<string>('');
  const [fontFamily, setFontFamily] = useState<string>('Sans Serif');

  const handleClick = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();

    if (buttonRect && isOpen) {
      setMenuTop('0');
    } else {
      setMenuTop("2.5rem");
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button
        ref={buttonRef}
        onClick={handleClick}
      >
        <span>{fontFamily}</span>
        <svg
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1L7 7L13 1"
            stroke="#A445ED"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}
        style={{ top: menuTop }}>
        <button
          style={{
            fontFamily: 'Inter',
          }}
          onClick={
            () => {
              document.documentElement.style.fontFamily = 'Inter';
              setFontFamily('Sans Serif');
            }
          }>
          Sans Serif
        </button>
        <button
          style={{
            fontFamily: 'Lora'
          }}
          onClick={
            () => {
              document.documentElement.style.fontFamily = 'Lora';
              setFontFamily('Serif');

            }
          }>
          Serif
        </button>
        <button
          style={{
            fontFamily: 'Inconsolata'
          }}
          onClick={
            () => {
              document.documentElement.style.fontFamily = 'Inconsolata';
              setFontFamily('Mono');
            }
          }>
          Mono
        </button>
      </div>
    </div>
  );
};