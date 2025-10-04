
import { CogWheelIcon } from './icons/CogWheelIcon';

const Hero = () => {
  return (
    <section className="py-20 sm:py-32 text-center" aria-labelledby="service-title">
      <div className="container mx-auto px-6">
        <div className="inline-block p-5 bg-slate-800 rounded-full mb-8 border-4 border-slate-700 shadow-lg animate-fade-in-down">
          <CogWheelIcon className="w-20 h-20 sm:w-24 sm:h-24 text-blue-400" />
        </div>
        <h1 id="service-title" className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up">
          Harapan Baru Service
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Expert repair and maintenance services for electronic and electrical devices.
        </p>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
