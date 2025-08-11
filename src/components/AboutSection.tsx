const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Want to understand <span className="gradient-text">Data-Centric AI</span> better?
          </h2>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              <span className="font-bold text-foreground">Data-Centric AI</span> is the process of building and testing AI systems by focusing on data-centric operations (i.e. cleaning, cleansing, pre-processing, balancing, augmentation) rather than model-centric operations (i.e. hyper-parameters selection, architectural changes).
            </p>
            
            <div className="text-sm md:text-base text-muted-foreground">
              <p className="mb-2">
                The term is coined by <span className="font-semibold text-primary">Andrew Ng</span>.
              </p>
              <p>
                The definition is provided by <span className="font-semibold text-secondary">Marco Postiglione</span> and chosen by the community itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;