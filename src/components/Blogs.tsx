import React from 'react';
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    category: 'Cost Analysis',
    source: 'The Economic Times',
    title: 'India vs USA Healthcare: Why Americans are Flying to India',
    excerpt: 'An Apollo neurologist breaks down why the US cost crisis is driving patients to India. Heart bypasses cost $150k in the US vs $8k in India, with zero waiting time.',
    date: 'Nov 26, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=600',
    link: 'https://m.economictimes.com/magazines/panache/india-vs-us-healthcare-apollo-neurologist-explains-why-more-and-more-americans-may-soon-fly-to-india-for-medical-treatment/articleshow/125535295.cms'
  },
  {
    id: 2,
    category: 'Wellness Trends',
    source: 'The Times of India',
    title: 'From Detox to Digital Detox: Global Travelers Flock to India',
    excerpt: 'India is emerging as the global wellness capital. Discover how patients are combining medical treatments with Ayurvedic rejuvenation in Kerala and the Himalayas.',
    date: 'Oct 13, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    link: 'https://timesofindia.indiatimes.com/life-style/health-fitness/wellness/from-detox-to-digital-detox-the-reason-global-wellness-travelers-are-flocking-to-india/articleshow/124525885.cms'
  },
  {
    id: 3,
    category: 'Government Initiative',
    source: 'The Hindu',
    title: 'Medical Industry Welcomes "Heal in India" Initiative',
    excerpt: 'New government policies are streamlining medical visas and boosting infrastructure in hubs like Hyderabad and Chennai to support international patients.',
    date: 'Feb 01, 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    link: 'https://www.thehindu.com/news/cities/Hyderabad/medical-industry-welcomes-promotion-of-heal-in-india-initiative-to-boost-tourism-in-hyderabad/article69169373.ece'
  }
];

export default function Blogs() {
  return (
    <section className="py-20 bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2 block font-['Montserrat']">
              In The News
            </span>
            <h2 className="text-3xl lg:text-4xl font-['Montserrat'] font-bold text-[#0F2622]">
              Latest Insights & <span className="text-[#D4C5A9] italic">Media Coverage</span>
            </h2>
          </div>
          
          <a 
            href="https://health.economictimes.indiatimes.com/news/hospitals/medical-tourism" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[#0F2622] font-bold border-b-2 border-[#D4C5A9] pb-1 hover:text-[#D4C5A9] transition-colors"
          >
            View All News <ArrowRight size={18} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white border border-gray-100 hover:border-[#D4C5A9]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden"
            >
              {/* Image Container (Clickable) */}
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden h-56 w-full block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0F2622] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                  {post.source}
                </div>
              </a>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-['Montserrat']">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-['Montserrat'] font-bold text-[#0F2622] mb-3 group-hover:text-[#D4C5A9] transition-colors line-clamp-2">
                    {post.title}
                    </h3>
                </a>

                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link (Pushes to bottom) */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2622] group-hover:gap-3 transition-all"
                  >
                    Read Full Story <ExternalLink size={14} className="text-[#D4C5A9]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <a 
                href="https://health.economictimes.indiatimes.com/news/hospitals/medical-tourism" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0F2622] font-bold border-b-2 border-[#D4C5A9] pb-1 hover:text-[#D4C5A9] transition-colors"
            >
                View All News <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </section>
  );
}