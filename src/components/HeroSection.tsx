import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { conferenceData } from "@/data/conferenceData";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative py-20 bg-zellige overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/arabic-bg.png')] bg-cover bg-center opacity-70"></div>
      </div>

      {/* University Emblem: Only visible on md+ screens */}
      <div className="hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/usmba.png"
          alt="University Emblem"
          className="w-180px sm:w-220px md:w-264px h-auto"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-1 md:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-relaxed font-arabic">
            <span className="block mb-4">اللغة العربية:</span>
            <span className="block">إرث ثقافي وتراث حضاري</span>
          </h1>
          {/* University Logo on Mobile */}
          <div className="block md:hidden mb-6">
            <img
              src="/usmba.png"
              alt="University Emblem"
              className="mx-auto w-160px h-auto"
            />
          </div>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-arabic">
            {t(conferenceData.occasion)}
          </p>

          {/* Organization Info */}
         <div className="bg-muted/55 rounded-lg shadow-academic p-6 mb-8 max-w-md mx-auto">
  <h2 className="text-xl font-semibold text-primary mb-4">
    {t(conferenceData.organizer)}
  </h2>
  <p className="text-lg text-muted-foreground mb-2">
    {t(conferenceData.university)}
  </p>
  <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
    <div className="flex items-center gap-1">
      <Calendar className="h-4 w-4" />
      {t(conferenceData.dates)}
    </div>
    <div className="flex items-center gap-1">
      <MapPin className="h-4 w-4" />
      {t(conferenceData.location)}
    </div>
  </div>
</div>


          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("registration")}
              className="font-arabic text-lg px-8"
            >
              {t({ ar: "سجل الآن", fr: "S'inscrire maintenant" })}
            </Button>
         <Button
           variant="outline"
           size="lg"
           onClick={() => scrollToSection("program")}
           className="font-arabic text-lg px-8 border-2 border-indigo-800 hover:bg-indigo-800 hover:text-white transition-colors duration-200"
            >
          {t({ ar: "البرنامج", fr: "Programme" })}
        </Button>

          </div>
        </div>
      </div>
    </section>
  );
};
