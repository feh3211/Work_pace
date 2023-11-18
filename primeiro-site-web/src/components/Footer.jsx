import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Seu Nome Sobrenome</p>
      <p>©{currentYear}</p>
    </footer>
  );
};

export default Footer;