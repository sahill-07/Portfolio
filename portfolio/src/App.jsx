import { useState , useEffect } from 'react'
import Navbar from './Components/Navbar'
import { ThemeProvider } from './context/ThemeContext';
import Home from './Components/Home';
import About from './Components/About';
import TechStack from './Components/TechStack';
import ProjectPage from './Components/ProjectPage';
import Coding from './Components/Coding';
import GetInTouch from './Components/GetInTouch';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () =>{ 
    setThemeMode("light");
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>  
      <div className='min-w-fit bg-white to-transparent dark:bg-gradient-to-br dark:from-[#060417] dark:via-[#0a0a0d] dark:to-[#1a1a1d] dark:text-white'>
        <Navbar/>
        <Home/>
        <About/>
        <TechStack/>
        <ProjectPage/>
        <Coding/>
        <GetInTouch/>
      </div>
    </ThemeProvider>
  )
}

export default App
