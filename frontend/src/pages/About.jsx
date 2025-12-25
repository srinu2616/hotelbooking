import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Add entrance animation
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000);

    // Add scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-16 animate-on-scroll">
          <div className="lg:w-1/2 space-y-6 animate-fadeInLeft">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                  Kuruva Srinivasulu
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Crafting Digital Experiences with Precision & Passion
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-lg text-gray-400">
                Software Engineer 🚀 | Full Stack Developer 💻
              </p>
              <p className="text-lg text-cyan-300 font-medium">
                Creator of NexStay 🏨
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              I transform complex challenges into elegant digital solutions. 
              With expertise across the entire stack, I build scalable applications 
              that deliver exceptional user experiences.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center animate-fadeInRight">
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Gradient border with animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-full"></div>
                
                {/* Profile initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    KS
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500/10 rounded-full animate-bounce-slow"></div>
                <div className="absolute -bottom-8 -right-4 w-20 h-20 bg-purple-500/10 rounded-full animate-bounce-slow animation-delay-1000"></div>
                <div className="absolute -top-8 right-10 w-12 h-12 bg-cyan-500/10 rounded-full animate-bounce-slow animation-delay-2000"></div>
              </div>

              {/* Orbits */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-spin-slow animation-delay-500"></div>
                <div className="absolute inset-16 border border-purple-500/20 rounded-full animate-spin-slow animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 text-center">
                I am a passionate Software Engineer dedicated to building exceptional 
                digital experiences. With a focus on modern web technologies and 
                innovative solutions, I bridge the gap between design and functionality 
                to create products that not only work flawlessly but also inspire.
              </p>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20 animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What I <span className="text-purple-400">Do</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Engineer Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Software Engineer</h3>
                <p className="text-gray-400 leading-relaxed">
                  Building scalable, efficient, and maintainable software solutions 
                  with modern architectures and best practices. Focused on creating 
                  robust systems that stand the test of time.
                </p>
              </div>
            </div>

            {/* Full Stack Developer Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-6">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Full Stack Developer</h3>
                <p className="text-gray-400 leading-relaxed">
                  Expert in both frontend and backend technologies, creating seamless 
                  end-to-end solutions with optimal performance. From UI/UX to database 
                  architecture and everything in between.
                </p>
              </div>
            </div>

            {/* NexStay Creator Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-6">🏨</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Creator of NexStay</h3>
                <p className="text-gray-400 leading-relaxed">
                  Architect and developer of NexStay, a premium hotel booking and room booking platform 
                  redefining the accommodation experience through cutting-edge technology 
                  and innovative design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NexStay Section */}
        <section className="py-20 animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NexStay
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-2">Revolutionizing hotel booking and room booking Technology</p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 lg:p-12 border border-gray-800/50 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-8 text-white">
                        A Modern hotel booking and room booking Platform
                      </h3>
                      
                      <div className="space-y-6">
                        {[
                          { text: "Modern Booking Platform", color: "from-blue-400 to-cyan-400" },
                          { text: "Seamless User Experience", color: "from-purple-400 to-pink-400" },
                          { text: "Advanced Property Management", color: "from-cyan-400 to-green-400" },
                          { text: "Real-time Analytics Dashboard", color: "from-pink-400 to-rose-400" }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 group/item">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} animate-pulse`}></div>
                            <span className="text-xl text-gray-300 group-hover/item:text-white transition-colors">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                        <p className="text-lg leading-relaxed text-gray-300">
                          NexStay represents my vision for modern hotel booking and room booking - combining 
                          elegant design with powerful functionality to create memorable 
                          experiences for both guests and property owners.
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                          React
                        </span>
                        <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
                          Node.js
                        </span>
                        <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full text-sm border border-cyan-500/20">
                          MongoDB
                        </span>
                        <span className="px-4 py-2 bg-green-500/10 text-green-300 rounded-full text-sm border border-green-500/20">
                          AWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                My <span className="text-cyan-400">Philosophy</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
                <div className="text-center">
                  <div className="text-8xl text-cyan-500/20 mb-8">"</div>
                  
                  <blockquote className="text-2xl lg:text-3xl leading-relaxed text-gray-300 mb-12 italic">
                    Always Exploring, Always Building. I believe in continuous learning 
                    and innovation, turning complex challenges into elegant solutions 
                    that make a difference.
                  </blockquote>

                  <div className="flex flex-wrap justify-center gap-4">
                    {['Innovation', 'Excellence', 'Passion', 'Precision', 'Creativity', 'Growth'].map((tag, index) => (
                      <span 
                        key={index}
                        className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-gray-300 border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default About;