import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} Faradyan Labs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
