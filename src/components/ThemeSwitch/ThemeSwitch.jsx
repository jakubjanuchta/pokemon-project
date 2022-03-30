
import './ThemeSwitch.scss';




const ThemeSwitch = ({switchTheme, theme}) =>{
  
  
  return (

    <div className="theme-switch-wrapper main__button">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={switchTheme} />
        <div className="slider round"></div>
      </label>
      <h4>{theme === 'light' ? 'Dark' : 'Light'} mode</h4>
    </div>

  );
}

export default ThemeSwitch;



