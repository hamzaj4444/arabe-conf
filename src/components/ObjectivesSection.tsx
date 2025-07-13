import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { conferenceData } from '@/data/conferenceData';
import { Target, CheckCircle } from 'lucide-react';

export const ObjectivesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="objectives" className="py-20 bg-zellige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="section-header">
              {t({ ar: 'أهداف المؤتمر', fr: 'Objectifs de la conférence' })}
            </h2>
            <p className="text-lg text-muted-foreground font-arabic">
              {t({ 
                ar: 'نسعى من خلال هذا المؤتمر إلى تحقيق مجموعة من الأهداف الأكاديمية والثقافية المهمة',
                fr: 'Nous visons à travers cette conférence à atteindre un ensemble d\'objectifs académiques et culturels importants'
              })}
            </p>
          </div>

          <div className="grid gap-6">
            {conferenceData.objectives.map((objective, index) => (
              <div key={index} className="academic-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground font-arabic leading-relaxed">
                      {t(objective)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="academic-card bg-muted/55 border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4 font-arabic">
                {t({ ar: 'الرؤية المستقبلية', fr: 'Vision d\'avenir' })}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-arabic">
                {t({
                  ar: 'نتطلع إلى إنشاء شبكة أكاديمية دائمة للتعاون في مجال الدراسات العربية، وتطوير مناهج تعليمية مبتكرة تواكب التطورات التكنولوجية الحديثة، مع الحفاظ على الأصالة والهوية الثقافية العربية.',
                  fr: 'Nous aspirons à créer un réseau académique permanent de coopération dans le domaine des études arabes, à développer des méthodes d\'enseignement innovantes qui suivent les développements technologiques modernes, tout en préservant l\'authenticité et l\'identité culturelle arabe.'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};