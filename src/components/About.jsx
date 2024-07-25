import React, { useEffect, useState } from 'react';

const About = () => {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('/README.md')
      .then(response => response.text())
      .then(text => setReadme(text));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <pre className="whitespace-pre-wrap">{readme}</pre>
    </div>
  );
};

export default About;
