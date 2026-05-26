'use client'
import { ThemeProvider } from 'next-themes';

import React, { useEffect } from 'react';

const ProvideTheme = ({ children }) => {

  return (
    <ThemeProvider
      attribute="class"  // Tells next-themes to add/remove 'dark' class
      defaultTheme="system"
      enableSystem
      suppressHydrationWarning
    >
      {children}
    </ThemeProvider>
  );
};

export default ProvideTheme;