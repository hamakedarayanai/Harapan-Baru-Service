
import type { ComponentType } from 'react';
import { TelevisionIcon } from './icons/TelevisionIcon';
import { WashingMachineIcon } from './icons/WashingMachineIcon';
import { RefrigeratorIcon } from './icons/RefrigeratorIcon';
import { AirConditionerIcon } from './icons/AirConditionerIcon';
import { SpeakerIcon } from './icons/SpeakerIcon';
import { ToolsIcon } from './icons/ToolsIcon';

interface Service {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

const services: Service[] = [
  { name: 'Televisions', icon: TelevisionIcon },
  { name: 'Washing Machines', icon: WashingMachineIcon },
  { name: 'Refrigerators', icon: RefrigeratorIcon },
  { name: 'Air Conditioners', icon: AirConditionerIcon },
  { name: 'Audio Systems', icon: SpeakerIcon },
  { name: 'Other Electronics', icon: ToolsIcon },
];

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-12" aria-labelledby="services-title">
      <h2 id="services-title" className="text-3xl font-bold text-center text-white mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-700"
            style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.1 + 0.5}s forwards`, opacity: 0 }}
          >
            <service.icon className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="font-semibold text-lg text-slate-200">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
