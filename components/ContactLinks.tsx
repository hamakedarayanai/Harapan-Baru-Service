
import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { MapPinIcon } from './icons/MapPinIcon';

interface ContactLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  textColor: string;
}

const contactLinks: ContactLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/harapanbaruservice/',
    icon: FacebookIcon,
    bgColor: 'bg-blue-600 hover:bg-blue-700',
    textColor: 'text-white'
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=6281313689696',
    icon: WhatsAppIcon,
    bgColor: 'bg-green-500 hover:bg-green-600',
    textColor: 'text-white'
  },
  {
    name: 'Maps',
    url: 'https://maps.app.goo.gl/SLWD34bxdcTXi7gz8',
    icon: MapPinIcon,
    bgColor: 'bg-red-500 hover:bg-red-600',
    textColor: 'text-white'
  },
];

const ContactLinks: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12" aria-label="Contact options">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Get In Touch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contactLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Contact us on ${link.name}`}
            className={`
              flex items-center justify-center p-6 rounded-lg shadow-lg
              font-semibold transition-all duration-300 transform hover:-translate-y-1
              ${link.bgColor} ${link.textColor}
            `}
            style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.1 + 0.3}s forwards`, opacity: 0 }}
          >
            <link.icon className="w-6 h-6 mr-3" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactLinks;
