import React from 'react';

const resumeUrl = '/resume.pdf';

export function ResumeButton() {
  const handleClick = async () => {
    try {
      const res = await fetch(resumeUrl, { method: 'HEAD' });
      if (res.ok) {
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      } else {
        alert('Resume not found.');
      }
    } catch (err) {
      console.error('Error checking resume file:', err);
      alert('Error verifying resume availability.');
    }
  };

  return (
    <button onClick={handleClick}>
      Resume
    </button>
  );
}
