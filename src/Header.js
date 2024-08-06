import React from 'react';

const Header = () => {
  return (
    <header
      className="header"
    >
      <link rel="stylesheet" href="css/index.css" />
      <div className="header-container">
        <nav>
          <div>
            <h3 className='heading' style={{ opacity: "1" }}>SANJAYA RH</h3>
            <h3 className='sub-heading'>Fullstack Developer</h3>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
