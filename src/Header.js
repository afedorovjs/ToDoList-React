import React from 'react';

function Header() {
  const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };

  const date = new Date().toLocaleDateString('en-US', options);

  function clear() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="header">
      <span className="date">{date}</span>
      <button type="button" className="clearButton" onClick={() => clear()} />
    </div>
  );
}

export default Header;
