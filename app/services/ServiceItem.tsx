import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode; 
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {


  return (
    <div className="flex flex-col w-fit border lg:w-[600px] border-yellow-400 rounded-md p-6 shadow-md hover:shadow-lg transition ml-28">

      <div className="flex items-center mb-4">
       
        <div className="p-2 border border-gray-400 rounded-md mr-4 ">{icon}</div>
        <div className="ml-10">
     
          <h3 className="text-2xl font-bold text-blue-950">{title}.</h3>
         
        </div>
      </div>
      
      <p className="text-left text-gray-600 ml-3 text-2xl lg:w-5/6 leading-loose font-family">{description}</p>
    </div>
  );
}; 

export default ServiceItem;
