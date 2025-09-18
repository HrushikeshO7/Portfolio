import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import nft from './Files/nft.png';
import mayavi from './Files/mayavi.png';
import zudio from './Files/zudio-logo.webp';
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Zudio App Design | UX Case Study",
      category: "Mobile Design",
      description: "Designing a seamless mobile shopping experience for busy users, enabling them to easily browse Zudio’s affordable, wide-ranging products and checkout quickly.",
      image: zudio,
      url: "https://www.figma.com/proto/6MWWyGUs8o6tjINWGmrr87/Zudio?node-id=237-206&t=nA8WboFtvELYclyy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A72",
      tags: ["UX Research", "Mobile Design", "Prototyping"]
    },
    {
      id: 2,
      title: "Mayavi Club Website",
      category: "Web Design",
      description: "Designed a user-friendly website for the Mayavi college club, showcasing events, projects, and updates while ensuring easy navigation and an engaging experience for students.",
      image: mayavi,
      url: "http://klefmayavi.com/",
      tags: ["Web Design", "User Journey"]
    },
    {
      id: 3,
      title: "NFTVault",
      category: "Mobile Design",
      description: "NFTVault: A sleek, multi-wallet app to manage, track, and showcase your NFT collections effortlessly.",
      image: nft,
      url: "https://www.figma.com/proto/OERpF5N5UcKm3zdXNu3WL9/NFTVault?node-id=83-65&t=WS4PvOZz2IoH8vLf-0&scaling=contain&content-scaling=responsive&page-id=0%3A1",
      tags: ["UX Research", "Mobile Design", "Prototyping"]
    },
  ];

  const handleViewProject = (project) => {
    if (project.url) {
      window.open(project.url, "_blank");
    }
  };

  return (
    <section id="work" className="py-20 bg-cream/20 relative">
      {/* Paper texture background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.05) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.02) 2px,
              rgba(0,0,0,0.02) 4px
            )
          `,
          backgroundSize: '300px 300px, 400px 400px, 4px 4px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-6 text-black tracking-tight">Selected Work</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A collection of case studies that showcase my approach to solving complex design challenges 
            through user-centered thinking and creative problem-solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer h-full"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
                                    transition-all duration-500 border border-gray-100 h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-700 
                                   group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full 
                                          text-xs tracking-wide text-gray-700">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl mb-3 text-black group-hover:text-gray-600 
                                        transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 
                                       group-hover:bg-gray-200 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <motion.button
                          onClick={() => handleViewProject(project)}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center text-black group-hover:text-gray-600 
                                     transition-colors duration-300 mt-auto text-sm tracking-wide"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-black transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:border-black transition-all duration-300" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
