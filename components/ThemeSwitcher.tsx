'use client';
import { useState, useEffect } from 'react';

export const themes = {
  navyBlue: { primary: '#0A2540', accent: '#0A2540', hover: '#1a3a5a' },
  fourColor: { primary: '#218410', accent: '#841042', hover: '#104248' },
  cyan: { primary: '#0A2540', accent: '#00D4FF', hover: '#00B8E6' },
  purple: { primary: '#6366F1', accent: '#3B82F6', hover: '#2563EB' },
  teal: { primary: '#0D9488', accent: '#F97316', hover: '#EA580C' },
  green: { primary: '#1E3A8A', accent: '#10B981', hover: '#059669' },
  violet: { primary: '#475569', accent: '#8B5CF6', hover: '#7C3AED' },
  stylus: { primary: '#1a1a1a', accent: '#b2dd4c', hover: '#81d742' }
};

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      const theme = themes[savedTheme as keyof typeof themes];
      document.documentElement.style.setProperty('--primary', theme.primary);
      document.documentElement.style.setProperty('--accent', theme.accent);
      document.documentElement.style.setProperty('--hover', theme.hover);
    } else {
      const theme = themes.navyBlue;
      document.documentElement.style.setProperty('--primary', theme.primary);
      document.documentElement.style.setProperty('--accent', theme.accent);
      document.documentElement.style.setProperty('--hover', theme.hover);
      localStorage.setItem('selectedTheme', 'navyBlue');
    }
  }, []);

  const changeTheme = (theme: keyof typeof themes) => {
    document.documentElement.style.setProperty('--primary', themes[theme].primary);
    document.documentElement.style.setProperty('--accent', themes[theme].accent);
    document.documentElement.style.setProperty('--hover', themes[theme].hover);
    localStorage.setItem('selectedTheme', theme);
    setIsOpen(false);
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Welcome to Saitech Studio!</h2>
            <p className="text-gray-600 mb-6">Choose your preferred theme to get started:</p>
            <div className="flex gap-3 justify-center mb-6">
              <button onClick={() => changeTheme('navyBlue')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: '#0A2540'}} title="Navy Blue" />
              <button onClick={() => changeTheme('fourColor')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #218410 50%, #841042 50%)'}} title="4-Color Theme" />
              <button onClick={() => changeTheme('cyan')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #0A2540 50%, #00D4FF 50%)'}} title="Deep Blue + Cyan" />
              <button onClick={() => changeTheme('purple')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #6366F1 50%, #3B82F6 50%)'}} title="Purple + Blue" />
              <button onClick={() => changeTheme('teal')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #0D9488 50%, #F97316 50%)'}} title="Teal + Orange" />
              <button onClick={() => changeTheme('green')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #1E3A8A 50%, #10B981 50%)'}} title="Navy + Green" />
              <button onClick={() => changeTheme('violet')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #475569 50%, #8B5CF6 50%)'}} title="Slate + Violet" />
              <button onClick={() => changeTheme('stylus')} className="w-12 h-12 rounded-full hover:scale-110 transition" style={{background: 'linear-gradient(135deg, #1a1a1a 50%, #b2dd4c 50%)'}} title="Stylus Networks" />
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-2 bg-white rounded-lg shadow-lg p-4">
          <p className="text-sm font-bold mb-3 text-gray-700">Choose Theme</p>
          <div className="flex gap-2">
            <button onClick={() => changeTheme('navyBlue')} className="w-8 h-8 rounded-full" style={{background: '#0A2540'}} title="Navy Blue" />
            <button onClick={() => changeTheme('fourColor')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #218410 50%, #841042 50%)'}} title="4-Color Theme" />
            <button onClick={() => changeTheme('cyan')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #0A2540 50%, #00D4FF 50%)'}} title="Deep Blue + Cyan" />
            <button onClick={() => changeTheme('purple')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #6366F1 50%, #3B82F6 50%)'}} title="Purple + Blue" />
            <button onClick={() => changeTheme('teal')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #0D9488 50%, #F97316 50%)'}} title="Teal + Orange" />
            <button onClick={() => changeTheme('green')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #1E3A8A 50%, #10B981 50%)'}} title="Navy + Green" />
            <button onClick={() => changeTheme('violet')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #475569 50%, #8B5CF6 50%)'}} title="Slate + Violet" />
            <button onClick={() => changeTheme('stylus')} className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #1a1a1a 50%, #b2dd4c 50%)'}} title="Stylus Networks" />
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>
      </div>
    </>
  );
}
