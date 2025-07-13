import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { conferenceData } from '@/data/conferenceData';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Coffee, Users, Mic, BookOpen } from 'lucide-react';

export const ProgramSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const getIcon = (type: string) => {
    switch (type) {
      case 'ceremony': return <Mic className="h-4 w-4" />;
      case 'talk': return <BookOpen className="h-4 w-4" />;
      case 'break': return <Coffee className="h-4 w-4" />;
      case 'workshop': return <Users className="h-4 w-4" />;
      case 'discussion': return <Users className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ceremony': return 'text-accent';
      case 'talk': return 'text-primary';
      case 'break': return 'text-muted-foreground';
      case 'workshop': return 'text-blue-600';
      case 'discussion': return 'text-purple-600';
      default: return 'text-foreground';
    }
  };

  const schedule = activeDay === 1 ? conferenceData.day1Schedule : conferenceData.day2Schedule;

  return (
    <section id="program" className="py-20 bg-zellige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h2 className="section-header">
              {t({ ar: 'برنامج المؤتمر', fr: 'Programme de la conférence' })}
            </h2>
            <p className="text-lg text-muted-foreground font-arabic">
              {t({ 
                ar: 'برنامج علمي شامل على مدى يومين مع محاضرات وورش عمل متنوعة',
                fr: 'Un programme scientifique complet sur deux jours avec des conférences et ateliers variés'
              })}
            </p>
          </div>

          {/* Day Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1">
              <Button
                variant={activeDay === 1 ? "default" : "ghost"}
                onClick={() => setActiveDay(1)}
                className="font-arabic"
              >
                {t({ ar: 'اليوم الأول - 18 ديسمبر', fr: 'Jour 1 - 18 Décembre' })}
              </Button>
              <Button
                variant={activeDay === 2 ? "default" : "ghost"}
                onClick={() => setActiveDay(2)}
                className="font-arabic"
              >
                {t({ ar: 'اليوم الثاني - 19 ديسمبر', fr: 'Jour 2 - 19 Décembre' })}
              </Button>
            </div>
          </div>

          {/* Schedule */}
          <div className="academic-card">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center font-arabic">
              {activeDay === 1 
                ? t({ ar: 'البرنامج التفصيلي لليوم الأول', fr: 'Programme détaillé du premier jour' })
                : t({ ar: 'البرنامج التفصيلي لليوم الثاني', fr: 'Programme détaillé du deuxième jour' })
              }
            </h3>

            <div className="space-y-0">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="schedule-item"
                >
                  <div className="schedule-time">
                    <div className="flex items-center gap-2">
                      <div className={getTypeColor(item.type)}>
                        {getIcon(item.type)}
                      </div>
                      <span className="font-mono font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="schedule-content">
                    <p className="font-medium font-arabic">
                      {t(item.title)}
                    </p>
                    {item.speaker && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.speaker}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-muted/55 rounded-lg p-6 border border-primary">
              <h4 className="font-semibold text-primary mb-3 font-arabic">
                {t({ ar: 'معلومات مهمة', fr: 'Informations importantes' })}
              </h4>
              <ul className="space-y-2 text-sm foreground font-arabic">
                <li>• {t({ ar: 'جميع المحاضرات باللغة العربية', fr: 'Toutes les conférences en arabe' })}</li>
                <li>• {t({ ar: 'مدة كل محاضرة: 15 دقيقة', fr: 'Durée de chaque conférence : 15 minutes' })}</li>
                <li>• {t({ ar: 'استراحات قهوة مدتها 30 دقيقة', fr: 'Pauses café de 30 minutes' })}</li>
              </ul>
            </div>

            <div className="bg-muted/55 rounded-lg p-6 border border-primary">
              <h4 className="font-semibold text-primary mb-3 font-arabic">
                {t({ ar: 'الحضور والمشاركة', fr: 'Présence et participation' })}
              </h4>
              <ul className="space-y-2 text-sm foreground font-arabic">
                <li>• {t({ ar: 'الحضور مجاني للجميع', fr: 'Présence gratuite pour tous' })}</li>
                <li>• {t({ ar: 'التسجيل المسبق مطلوب', fr: 'Inscription préalable requise' })}</li>
                <li>• {t({ ar: 'شهادات حضور للمشاركين', fr: 'Certificats de présence pour les participants' })}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};