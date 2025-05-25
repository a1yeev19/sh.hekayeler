import { useState } from 'react';

export default function HomePage() {
  const [language, setLanguage] = useState('');

  if (!language) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Dil seçin / Choose language</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-white text-black rounded-xl" onClick={() => setLanguage('az')}>Azərbaycan dili</button>
            <button className="px-4 py-2 bg-white text-black rounded-xl" onClick={() => setLanguage('en')}>English</button>
          </div>
        </div>
      </div>
    );
  }

  return language === 'az' ? <AzerbaijaniVersion /> : <EnglishVersion />;
}

function AzerbaijaniVersion() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Şəhriyar Əliyev – sh.hekayələr</h1>
      <p className="text-lg">Ruhani, simvolik və fərdi hekayələrin toplusu.</p>
    </div>
  );
}

function EnglishVersion() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Shahriyar Aliyev – sh.stories</h1>
      <p className="text-lg">A collection of spiritual, symbolic, and personal stories.</p>
    </div>
  );
}
