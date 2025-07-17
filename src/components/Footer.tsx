import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { conferenceData } from '@/data/conferenceData';
import { Mail, Phone, MapPin, Calendar, Copyright } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-arabic">
              {t(conferenceData.title)}
            </h3>
            <p className="mb-4 font-arabic text-primary-foreground/90">
              {t(conferenceData.occasion)}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{t(conferenceData.dates)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t(conferenceData.location)}</span>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-arabic">
              {t({ ar: 'الجهة المنظمة', fr: 'Organisation' })}
            </h4>
            <div className="space-y-2 text-sm">
              <p className="font-arabic">{t(conferenceData.organizer)}</p>
              <p className="font-arabic">{t(conferenceData.university)}</p>
              <p className="font-arabic text-primary-foreground/90">
                {t({ ar: 'المملكة المغربية', fr: 'Royaume du Maroc' })}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-arabic">
              {t({ ar: 'للتواصل', fr: 'Contact' })}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${conferenceData.coordinator.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {conferenceData.coordinator.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a 
                  href={`tel:${conferenceData.coordinator1.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {conferenceData.coordinator1.phone}
                </a>
              </div>
              <p className="font-arabic font-medium mt-3">
                {conferenceData.coordinator1.name}
              </p>
            </div>
            
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 font-arabic">
              <Copyright className="h-4 w-4" />
              <span>
                {currentYear} {t(conferenceData.university)} - 
                {t({ ar: ' جميع الحقوق محفوظة', fr: ' Tous droits réservés' })}
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-primary-foreground/80">
              <span className="font-arabic text-xs">
                {t({ 
                  ar: 'تصميم وتطوير للمؤتمر العلمي',
                  fr: 'Conçu pour la conférence scientifique'
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};