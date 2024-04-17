import React, { useState } from 'react';
import Encabezado from './Encabezado';
import ListaCliente from './ListaCliente';
import AgregarClientes from './AgregarClientes';
import clientes from '../DataBase/datosclients';
import 'tailwindcss/tailwind.css';

function App() {
  const [filteredClientes, setFilteredClientes] = useState(clientes);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setFilteredClientes(
      clientes.filter(
        (cliente) =>
          cliente.nombre.toLowerCase().includes(filterValue) ||
          cliente.destino.toLowerCase().includes(filterValue)
      )
    );
  };

  const handleNuevoClienteSubmit = (agregarClientes) => {
    setFilteredClientes([...filteredClientes, agregarClientes]);
  };

  return (
    <div>
      <Header />
      <h2>Agregar Nuevo Cliente</h2>
      <AgregarClienteForm onSubmit={handleNuevoClienteSubmit} />
      <input type="text" placeholder="Filtrar por nombre o destino" onChange={handleFilterChange} />
      <ClienteList clientes={filteredClientes} />
  
    
    </div>
  );
}

export default App;