import React from 'react';
import SessionCard from './ui/card';
import { data } from './data';

const Events = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Upcoming Events
      </h1>
      <div className="w-full max-w-screen-xl grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center px-4">
        {data.map((element, index) => (
          <SessionCard
            key={index}
            image={element.image}
            title={element.title}
            description={element.description}
            instagramLink={element.instagramLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
