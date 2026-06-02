'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted on client
  if (!mounted) return <div className="w-8 h-8" /> // placeholder to avoid layout shift

  return (
    <button
      className="btn rounded-full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <AiOutlineMoon size={30} /> : <AiOutlineSun size={30} />}
    </button>
  )
}

export default ThemeChanger