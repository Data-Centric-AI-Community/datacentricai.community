import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      image: "https://datacentricai.community/assets/blog/06.png",
      title: "Introducing the Data-Centric AI Community",
      description: "A place to discuss data quality for data science.",
      link: "https://venturebeat.com/2022/02/22/ydata-launches-data-centric-ai-community-for-data-scientists/"
    },
    {
      image: "https://datacentricai.community/assets/blog/05.jpeg",
      title: "From model-centric to data-centric",
      description: "A new paradigm for AI development — focused on data quality.",
      link: "https://towardsdatascience.com/from-model-centric-to-data-centric-4beb8ef50475"
    },
    {
      image: "https://datacentricai.community/assets/blog/04.jpeg",
      title: "Pandas Profiling for Quicker Data Understanding",
      description: "Read your data? Pause. Generate the Pandas Profiling report first.",
      link: "https://towardsdatascience.com/pandas-profiling-for-quicker-data-understanding-83bb9fc6719f?sk=157cd19b376ed957bf735b89b3b39132"
    },
    {
      image: "https://datacentricai.community/assets/blog/03.png",
      title: "Synthetic Time-Series Data: A GAN approach",
      description: "Generate synthetic sequential data with TimeGAN.",
      link: "https://towardsdatascience.com/synthetic-time-series-data-a-gan-approach-869a984f2239"
    },
    {
      image: "https://datacentricai.community/assets/blog/02.jpeg",
      title: "How to Validate the Quality of Your Synthetic Data",
      description: "A tutorial on how you can combine ydata-synthetic with great expectations.",
      link: "https://towardsdatascience.com/how-to-validate-the-quality-of-your-synthetic-data-34503eba6da"
    },
    {
      image: "https://datacentricai.community/assets/blog/01.jpeg",
      title: "Versioning and Labeling — Better Together",
      description: "Data labeling and data versioning provide a rock solid bedrock to build your machine learning models on now and in the future.",
      link: "https://towardsdatascience.com/versioning-and-labeling-better-together-2dd7d4fe8bd9"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Want to <span className="gradient-text">learn more?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elegant transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                  onClick={() => window.open(post.link, '_blank')}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;