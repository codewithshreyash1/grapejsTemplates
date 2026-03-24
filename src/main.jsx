import React from 'react';
import { createRoot } from 'react-dom/client';
import TemplatesGallery from './TemplatesGallery';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemplatesGallery />
  </React.StrictMode>
);
