import React from 'react';
import backgroundImage from '../img/viaje.jpg'

function Header() {
  return (
    <><div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-fixed" id="fondo_registro" style={{ backgroundImage: `url(${backgroundImage})` }}></div><div className="text-center mt-8 mb-8">
      <h1 className="text-center text-4xl text-lime-700 ">"Bienvenido Abordo!!!"</h1>
    </div></>
  );
}

export default Header;