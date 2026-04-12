export default function Footer() {
  
  return (
    <footer className="w-full py-12 bg-surface-container-low border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold font-headline text-on-surface">Som-Dev</span>
          <p className="font-body text-xs text-on-surface-variant font-medium tracking-wide">
            © 2024 Som-Dev. Crafted with Atmospheric Perspective.
          </p>
        </div>
        {/* <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Twitter"].map(social => (
            <a 
              key={social}
              href="#" 
              className="font-body text-xs text-on-surface-variant font-medium tracking-wide hover:text-primary transition-all opacity-70 hover:opacity-100"
            >
              {social}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
}
