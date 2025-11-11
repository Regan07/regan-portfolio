import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Image as ImageIcon, X } from "lucide-react";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const events = portfolioData.gallery.events;

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, events.length]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 350);
  };

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Events, highlights, and memorable moments from my journey
          </p>
        </div>

        {/* Stacked Carousel */}
        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div className="relative flex items-center justify-center">
            {/* Previous card (left, partially visible) */}
            <div className={`absolute left-0 z-10 transform transition-all duration-700 ease-in-out hover:scale-80 hover:opacity-70 ${
              isTransitioning ? 'animate-slide-out-left' : '-translate-x-1/4 scale-75 opacity-50 animate-slide-in-left'
            }`}>
              <Card className="overflow-hidden w-80 transition-transform duration-500 hover:shadow-lg">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={events[(currentIndex - 1 + events.length) % events.length].image}
                    alt={events[(currentIndex - 1 + events.length) % events.length].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.querySelector('.placeholder')!.classList.remove('hidden');
                    }}
                  />
                  <div className="placeholder hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Main card (center) */}
            <div className={`relative z-20 transition-all duration-700 ease-out ${
              isTransitioning ? 'animate-slide-center' : 'animate-slide-in-center'
            }`}>
              <Card className="overflow-hidden w-80 shadow-2xl transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-3xl">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img
                    key={`${currentIndex}-${isTransitioning ? 'transition' : 'static'}`}
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out transform hover:scale-110 ${
                      isTransitioning ? 'animate-slide-fade-out' : 'animate-slide-fade-in'
                    }`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.querySelector('.placeholder')!.classList.remove('hidden');
                    }}
                  />
                  <div className="placeholder hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <ImageIcon className="h-16 w-16 text-muted-foreground animate-pulse" />
                  </div>

                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className={`absolute top-4 left-4 text-xs transition-all duration-500 hover:scale-110 ${
                      isTransitioning ? 'animate-fade-out' : 'animate-fade-in'
                    }`}
                  >
                    {events[currentIndex].category}
                  </Badge>

                  {/* Click to open modal */}
                  <div 
                    className="absolute inset-0 cursor-pointer transition-all duration-300 hover:bg-black/10"
                    onClick={() => setSelectedImage(events[currentIndex])}
                  />
                </div>

                {/* Image Info */}
                <div className={`p-4 transition-all duration-500 ${
                  isTransitioning ? 'animate-fade-out' : 'animate-fade-in'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-primary">{events[currentIndex].title}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {events[currentIndex].date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground transition-colors duration-300">
                    {events[currentIndex].description}
                  </p>
                </div>
              </Card>
            </div>

            {/* Next card (right, partially visible) */}
            <div className={`absolute right-0 z-10 transform transition-all duration-700 ease-in-out hover:scale-80 hover:opacity-70 ${
              isTransitioning ? 'animate-slide-out-right' : 'translate-x-1/4 scale-75 opacity-50 animate-slide-in-right'
            }`}>
              <Card className="overflow-hidden w-80 transition-transform duration-500 hover:shadow-lg">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={events[(currentIndex + 1) % events.length].image}
                    alt={events[(currentIndex + 1) % events.length].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.querySelector('.placeholder')!.classList.remove('hidden');
                    }}
                  />
                  <div className="placeholder hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            </div>


          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => goToSlide(index)}
              className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                index === currentIndex 
                  ? 'border-primary scale-105 shadow-lg animate-pulse-subtle' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:shadow-md'
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center';
                  placeholder.innerHTML = '<div class="w-4 h-4 rounded bg-muted-foreground/50"></div>';
                  e.currentTarget.parentElement!.replaceChild(placeholder, e.currentTarget);
                }}
              />
            </button>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{selectedImage?.title}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            {selectedImage && (
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.querySelector('.placeholder')!.classList.remove('hidden');
                    }}
                  />
                  <div className="placeholder hidden flex items-center justify-center h-full">
                    <ImageIcon className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{selectedImage.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {selectedImage.date}
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};