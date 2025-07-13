import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { BookOpen, Globe, Users, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BookOpen,
      title: { ar: 'التراث الأكاديمي', fr: 'Patrimoine Académique' },
      description: { ar: 'استكشاف الإرث العلمي والثقافي للغة العربية عبر التاريخ', fr: 'Explorer l\'héritage scientifique et culturel de la langue arabe à travers l\'histoire' }
    },
    {
      icon: Globe,
      title: { ar: 'الأثر العالمي', fr: 'Impact Mondial' },
      description: { ar: 'تقدير الدور العالمي للغة العربية في الحضارة الإنسانية', fr: 'Apprécier le rôle mondial de la langue arabe dans la civilisation humaine' }
    },
    {
      icon: Users,
      title: { ar: 'التعاون الأكاديمي', fr: 'Collaboration Académique' },
      description: { ar: 'تعزيز الشراكات البحثية في مجال الدراسات العربية', fr: 'Renforcer les partenariats de recherche dans le domaine des études arabes' }
    },
    {
      icon: Star,
      title: { ar: 'الابتكار والتطوير', fr: 'Innovation et Développement' },
      description: { ar: 'استكشاف مستقبل اللغة العربية في العصر الرقمي', fr: 'Explorer l\'avenir de la langue arabe à l\'ère numérique' }
    }
  ];

  return (
    <section id="about" className="py-20 bg-zellige">

        <div className="max-w-4xl mx-auto">
          <h2 className="section-header text-center mb-12">
            {t({ ar: 'حول المؤتمر', fr: 'À propos de la conférence' })}
          </h2>

          <div className="academic-card mb-12">
            <p className="text-lg leading-relaxed text-center mb-8 font-arabic">
              {t({
                ar: 'يأتي هذا المؤتمر العلمي احتفالاً باليوم العالمي للغة العربية، ليسلط الضوء على الإرث الثقافي الغني والتراث الحضاري العريق للغة العربية. ينظم هذا الحدث الأكاديمي المهم من قبل المدرسة العليا للأساتذة بفاس، تابعة لجامعة سيدي محمد بن عبد الله، بهدف توحيد الجهود الأكاديمية والبحثية لاستكشاف وتقدير الدور المحوري للغة العربية في تشكيل الحضارة الإنسانية.',
                fr: 'Cette conférence scientifique s\'inscrit dans le cadre de la célébration de la Journée mondiale de la langue arabe, mettant en lumière le riche patrimoine culturel et l\'héritage civilisationnel de la langue arabe. Cet événement académique important est organisé par l\'École Normale Supérieure de Fès, rattachée à l\'Université Sidi Mohamed Ben Abdellah, dans le but d\'unir les efforts académiques et de recherche pour explorer et apprécier le rôle central de la langue arabe dans la formation de la civilisation humaine.'
              })}
            </p>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t({ ar: 'المشاركة مجانية', fr: 'Participation gratuite' })}
              </h3>
              <p className="text-muted-foreground">
                {t({ 
                  ar: 'مفتوح لجميع الأكاديميين والطلاب والمهتمين بالدراسات العربية',
                  fr: 'Ouvert à tous les académiciens, étudiants et passionnés d\'études arabes'
                })}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-muted/55 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3 font-arabic">
                  {t(feature.title)}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-arabic">
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">

      <div className="my-8 mx-auto w-full max-w-4xl"> 
  <div className="relative rounded-lg shadow-xl overflow-hidden bg-gray-100/50">
    <img
      src="/image1.png"
      alt={t({ ar: 'صورة المؤتمر', fr: 'Image de la conférence' })}
      className="w-full h-auto object-scale-down"
    />
  </div>
</div>
      </div>
    </section>
  );
};