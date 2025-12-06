import React, { useMemo } from 'react';
import { RefreshCcw, Zap, Heart, Star, Cloud, Send } from 'lucide-react';

// Define the custom CSS for the scrolling animation using a <style> tag
const customStyles = `
/* 1. Define the LTR animation keyframes for a seamless loop.
  
  - START: The inner content is shifted left by the width of one content set (W).
           This means the DUPLICATED content (B) is visible in the viewport.
  - END:   The inner content moves to translateX(0).
           This means the ORIGINAL content (A) is visible in the viewport.
  
  When the animation loops, the transition from the end of A back to the start of B (-W)
  is perfectly seamless because A and B contain identical items.
*/
@keyframes marquee-scroll-ltr {
  from {
    /* Start at negative the width of one set of logos (Content A is off-screen to the left) */
    transform: translateX(var(--negative-scroll-distance-px)); 
  }
  to {
    /* End at origin (Content B moves off, Content A is fully visible) */
    transform: translateX(0); 
  }
}

/* 2. Apply the animation to the inner scrolling container.
*/
.marquee-inner {
  display: flex;
  /* Use the LTR keyframes and run in the normal direction */
  animation: marquee-scroll-ltr linear infinite;
  animation-play-state: running;
  /* The total width is twice the width of the visible content set (A + B) */
  width: var(--double-content-width-px); 
}

/* Pause the animation on hover */
.marquee-container:hover .marquee-inner {
  animation-play-state: paused;
}
`;

// Array of placeholder sponsor data (using lucide-react icons instead of image URLs)
const sponsorData = [
  { name: "Apex Dynamics", icon: Zap, color: "text-red-500" },
  { name: "Starlight Corp", icon: Star, color: "text-yellow-500" },
  { name: "Heartland", icon: Heart, color: "text-pink-500" },
  { name: "CloudStream", icon: Cloud, color: "text-blue-500" },
  { name: "Refresh Labs", icon: RefreshCcw, color: "text-green-500" },
  { name: "Messenger Co.", icon: Send, color: "text-indigo-500" },
];


const SponsorMarquee = () => {
  const scrollDurationSeconds = 40; // Controls the speed of the scroll
  
  // CRITICAL: Precise calculation of item width based on Tailwind classes:
  // w-32 = 128px
  // mx-4 = 16px left + 16px right = 32px
  const itemWidthWithMargin = 128 + 32; // 160px
  
  const totalItems = sponsorData.length;
  
  // The exact distance the inner container must travel to complete one seamless loop.
  const scrollDistance = totalItems * itemWidthWithMargin; // 6 * 160 = 960px

  // We duplicate the list to ensure the loop is seamless.
  const duplicatedSponsors = useMemo(() => 
    [...sponsorData, ...sponsorData], 
    []
  );

  return (
    <>
      {/* Inject custom CSS variables for dynamic animation control */}
      <style>{customStyles}</style>
      
      {/* Marquee Container - sets the visible window and overflow: hidden */}
      <div 
        className="marquee-container w-full overflow-hidden p-6 bg-gray-900 border-t border-b border-gray-700 shadow-xl rounded-lg"
        style={{
          // Pass calculated pixel values to CSS
          '--scroll-distance-px': `${scrollDistance}px`,
          '--negative-scroll-distance-px': `-${scrollDistance}px`, // Variable for the LTR start point
          '--double-content-width-px': `${scrollDistance * 2}px`,
        }}
      >
        <div 
          className="marquee-inner"
          style={{
            animationDuration: `${scrollDurationSeconds}s`,
            // animationDirection is omitted (defaults to 'normal') as the keyframes now define the LTR movement perfectly.
          }}
        >
          {/* Render the duplicated list of sponsors */}
          {duplicatedSponsors.map((sponsor, index) => {
            const Icon = sponsor.icon;
            return (
              <div 
                key={index} 
                className="flex flex-shrink-0 items-center justify-center w-32 h-16 mx-4 bg-gray-800/50 rounded-lg transition duration-300 transform hover:scale-105"
                title={sponsor.name}
              >
                <Icon className={`w-8 h-8 ${sponsor.color}`} />
                <span className="text-xs text-gray-400 ml-2 font-medium hidden sm:inline">{sponsor.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Main App Component
const SponRelay = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Our Valued Partners
        </h1>
        <p className="text-lg text-gray-400">
          The companies fueling our mission. Hover over the logos to pause the scroll!
        </p>
      </header>

      <div className="w-full max-w-7xl">
        <SponsorMarquee />
      </div>

      <footer className="mt-16 text-sm text-gray-500">
        Marquee effect created with React and CSS Keyframes.
      </footer>
    </div>
  );
};

export default SponRelay;