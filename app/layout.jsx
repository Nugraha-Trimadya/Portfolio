'use client';
import './globals.css';
import React from 'react';
import Nav from '../components/Nav';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="app-frame">
            <Nav />
            <main style={{ marginTop: 80 }}>{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
