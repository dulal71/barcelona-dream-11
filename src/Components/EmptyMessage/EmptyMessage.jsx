import React from 'react';

const EmptyMessage = () => {
    return (
        <div className='text-center py-15 border-1 border-gray-400 rounded-2xl mx-2 md:mx-0'>
          <h3 className='font-bold text-2xl'>No Players selected yet</h3> 
          <p>Go to available tab to select players</p> 
        </div>
    );
};

export default EmptyMessage;