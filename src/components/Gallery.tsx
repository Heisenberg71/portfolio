const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="text-center text-muted-foreground py-12">
          <p className="text-lg">Gallery content coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
