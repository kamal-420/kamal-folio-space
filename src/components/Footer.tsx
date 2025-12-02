export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kamalesh S. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/70 mt-2">
            Built with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};
