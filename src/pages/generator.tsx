import React from 'react';
import dynamic from 'next/dynamic';

const generator = () => {
  const Generator = dynamic(() => import('components/generator/Generator'), {
    ssr: false,
  });

  return (
    <div>
      <Generator />
    </div>
  );
};

export default generator;
