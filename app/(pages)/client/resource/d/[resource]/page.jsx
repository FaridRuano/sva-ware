'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from '@node_modules/next-auth/react';


const Resource = ({ params }) => {

  const { data: session } = useSession();

  const { resource } = React.use(params)

  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');


  if (error) return <div>{error}</div>;
  if (!product) return <div>Cargando...</div>;

  return (
    <div className="resource-pack-page">

    </div>
  );
};

export default Resource;