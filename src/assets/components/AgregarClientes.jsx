import React, { useState } from 'react';

function AgregarClientes({ onSubmit }) {
  const [nuevo, agregarClientes] = useState({
    nombreCliente: '',
    destino: '',
    TotalPago: '',
    personas: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevoCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(nuevo);
    setNuevo({
      nombreCliente: '',
      destino: '',
      TotalPago: '',
      personas: ''
    });
  };

  return (
    <form  className="p-4 border border-solid border-gray-300 rounded-md" onSubmit={handleSubmit}>
      <label>
        Nombre Cliente:
        <input className="block w-full border border-solid border-gray-300 rounded-md py-2 px-3 mt-1" type="text" name="nombre" value={agregarClientes.nombre} onChange={handleChange} />
      </label>
      <label>
        Destino:
        <input className="block w-full border border-solid border-gray-300 rounded-md py-2 px-3 mt-1" type="text" name="destino" value={agregarClientes.destino} onChange={handleChange} />
      </label>
      <label>
        Total Pagar:
        <input className="block w-full border border-solid border-gray-300 rounded-md py-2 px-3 mt-1" type="number" name="pago" value={agregarClientes.pago} onChange={handleChange} />
      </label>
      <label>
        Personas abordo:
        <input className="block w-full border border-solid border-gray-300 rounded-md py-2 px-3 mt-1" type="number" name="personas" value={agregarClientes.personas} onChange={handleChange} />
      </label>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 border border-solid border-gray-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-purple-600" type="submit">Agregar Nuevo Cliente</button>
    </form>
  );
}

export default AgregarClientes;