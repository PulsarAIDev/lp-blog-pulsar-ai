import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Vi a landing page da Pulsar e quero automatizar meu negócio. Podemos conversar?");
    window.open(`https://wa.me/5527997118556?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        variant="hero"
        size="lg"
        onClick={handleClick}
        className="rounded-full h-16 w-16 md:w-auto md:px-6 shadow-2xl hover:shadow-primary/50 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline ml-2 font-semibold">
          Falar no WhatsApp
        </span>
      </Button>
      
      {/* Pulse ring effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
    </div>
  );
};

export default WhatsAppButton;
