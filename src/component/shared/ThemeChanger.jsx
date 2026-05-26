'use client'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className=''> 
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="btn rounded bg-gray-200 text-primary-dark dark:bg-gray-700 dark:text-white transition-all "
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
    </div>
  )
}

export default ThemeChanger;