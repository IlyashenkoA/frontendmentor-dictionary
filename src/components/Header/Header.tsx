import { DropDown } from '../DropDown/DropDown';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <img src='/assets/images/logo.svg' className='header__logo' alt="Logo" />
      <div className='header__settings'>
        <DropDown />
        <span className='header__settings-line'></span>
        <ThemeSwitcher />
      </div>
    </header>
  );
};