import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { conferenceData } from '@/data/conferenceData';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, User } from 'lucide-react';

export const CommitteesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeCommittee, setActiveCommittee] = useState<'organizing' | 'scientific'>('organizing');

  return (
    <section id="committees" className="py-20 bg-zellige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="section-header">
              {t({ ar: 'اللجان المنظمة', fr: 'Comités organisateurs' })}
            </h2>
            <p className="text-lg text-muted-foreground font-arabic">
              {t({ 
                ar: 'فريق من الأكاديميين المتميزين من المدرسة العليا للأساتذة بفاس',
                fr: 'Une équipe d\'académiciens distingués de l\'École Normale Supérieure de Fès'
              })}
            </p>
          </div>

          {/* Committee Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-background rounded-lg p-1 shadow-academic">
              <Button
                variant={activeCommittee === 'organizing' ? "default" : "ghost"}
                onClick={() => setActiveCommittee('organizing')}
                className="font-arabic flex items-center gap-2"
              >
                <Users className="h-4 w-4" />
                {t({ ar: 'اللجنة المنظمة', fr: 'Comité d\'organisation' })}
              </Button>
              <Button
                variant={activeCommittee === 'scientific' ? "default" : "ghost"}
                onClick={() => setActiveCommittee('scientific')}
                className="font-arabic flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                {t({ ar: 'اللجنة العلمية', fr: 'Comité scientifique' })}
              </Button>
            </div>
          </div>

          {/* Committee Content */}
          {activeCommittee === 'organizing' ? (
            <div className="academic-card">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center font-arabic">
                {t({ ar: 'أعضاء اللجنة المنظمة', fr: 'Membres du comité d\'organisation' })}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conferenceData.organizingCommittee.map((member, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 font-arabic">
                      {member.firstName} {member.lastName}
                    </h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      {t(member.institution)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="academic-card">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center font-arabic">
                {t({ ar: 'أعضاء اللجنة العلمية', fr: 'Membres du comité scientifique' })}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {conferenceData.scientificCommittee.map((member, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium text-foreground text-sm font-arabic">
                      {member}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <div className="bg-muted/55 rounded-lg p-6 border border-primary">
              <h4 className="font-semibold text-primary mb-3 font-arabic">
                {t({ ar: 'الخبرة الأكاديمية', fr: 'Expertise académique' })}
              </h4>
              <p className="text-muted/20-foreground leading-relaxed font-arabic">
                {t({
                  ar: 'يضم فريق التنظيم والإشراف العلمي للمؤتمر نخبة من الأكاديميين والباحثين المتخصصين في اللغة العربية وآدابها، مع خبرة واسعة في التعليم العالي والبحث العلمي. يجمع هذا الفريق بين الخبرة الأكاديمية والكفاءة التنظيمية لضمان نجاح المؤتمر وتحقيق أهدافه العلمية والثقافية.',
                  fr: 'L\'équipe d\'organisation et de supervision scientifique de la conférence comprend une élite d\'académiciens et de chercheurs spécialisés en langue arabe et ses littératures, avec une vaste expérience dans l\'enseignement supérieur et la recherche scientifique. Cette équipe combine expertise académique et compétence organisationnelle pour assurer le succès de la conférence et atteindre ses objectifs scientifiques et culturels.'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};