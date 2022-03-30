import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useLocalStorage from 'use-local-storage'
import {loadPokemons} from "./reducers/appReducer";

import List from './components/List/List';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch'
import './App.scss';




const App = () =>{

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  
  const switchTheme = () => {
    const newTheme = (theme === 'light' ? 'dark' : 'light')
    setTheme(newTheme)
  }

  

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadPokemons());
    
  }, []);


  return (
    
      <div data-theme={theme}>        
        <ThemeSwitch switchTheme={switchTheme} theme={theme}/>
        <List/>
      </div>
  );
}

export default App;