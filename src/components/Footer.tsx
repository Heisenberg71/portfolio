const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kallol Naha. All rights reserved.</p>
          <p className="mt-2">
            Ph.D. Candidate at University of Idaho | SmartDB Lab
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
