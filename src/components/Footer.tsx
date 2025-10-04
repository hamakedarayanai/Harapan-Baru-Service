

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 py-6 text-center text-slate-400">
        <p>
          © {currentYear} 
          <a 
            href="https://hamakedarayanai.my.id/" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="Visit Hamake D. Arayanai's website"
            className="font-medium text-slate-300 hover:text-blue-400 transition-colors"
          >
             Hamake D. Arayanai
          </a> 
          {' | '}All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
