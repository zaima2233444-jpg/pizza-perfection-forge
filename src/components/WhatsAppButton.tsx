import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href="https://wa.me/923345892999?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.338 22.594c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.798-8.066-7.114-.228-.316-1.92-2.558-1.92-4.878s1.214-3.462 1.646-3.936c.39-.428 1.026-.642 1.636-.642.198 0 .376.01.536.018.432.018.648.044.934.722.356.846 1.224 2.988 1.33 3.206.108.218.216.514.068.81-.138.306-.258.496-.476.76-.218.264-.428.468-.646.754-.198.246-.42.508-.172.94.248.432 1.102 1.816 2.368 2.944 1.628 1.448 2.99 1.906 3.422 2.108.432.202.684.17.94-.108.264-.286 1.116-1.3 1.416-1.748.292-.448.592-.37.994-.222.406.148 2.566 1.21 3.006 1.432.44.222.732.332.84.516.106.184.106 1.076-.284 2.176z" />
        </svg>
      </a>
    </TooltipTrigger>
    <TooltipContent side="left" className="bg-card border-border font-body text-sm">
      Chat with us
    </TooltipContent>
  </Tooltip>
);

export default WhatsAppButton;
