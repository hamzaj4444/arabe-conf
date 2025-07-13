import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, CheckCircle, Mail, User, Building } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    position: '',
    interests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('تسجيل في مؤتمر اللغة العربية - Conference Registration');
    const body = encodeURIComponent(`
الاسم / Nom: ${formData.name}
البريد الإلكتروني / Email: ${formData.email}
المؤسسة / Institution: ${formData.institution}
المنصب / Position: ${formData.position}
مجالات الاهتمام / Research Interests: ${formData.interests}
    `);
    
    const mailtoUrl = `mailto:contact@ens-fes.ac.ma?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_self');
    
    setFormData({ name: '', email: '', institution: '', position: '', interests: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    { ar: 'حضور جميع الجلسات العلمية', fr: 'Participation à toutes les sessions scientifiques' },
    { ar: 'شهادة حضور معتمدة', fr: 'Certificat de participation officiel' },
    { ar: 'مواد المؤتمر والعروض التقديمية', fr: 'Matériel de conférence et présentations' },
    { ar: 'التواصل مع الخبراء والأكاديميين', fr: 'Networking avec experts et académiciens' },
    { ar: 'وجبات الطعام والاستراحات', fr: 'Repas et pauses inclus' }
  ];

  return (
    <section id="registration" className="py-20 bg-zellige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="h-8 w-8 text-primary" />
            </div>
            <h2 className="section-header">
              {t({ ar: 'التسجيل في المؤتمر', fr: 'Inscription à la conférence' })}
            </h2>
            <p className="text-lg text-muted-foreground font-arabic">
              {t({ 
                ar: 'انضم إلينا في هذا الحدث الأكاديمي المهم - التسجيل مجاني والمقاعد محدودة',
                fr: 'Rejoignez-nous pour cet événement académique important - inscription gratuite et places limitées'
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-academic">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic text-primary">
                    {t({ ar: 'نموذج التسجيل', fr: 'Formulaire d\'inscription' })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-arabic">
                          {t({ ar: 'الاسم الكامل', fr: 'Nom complet' })} *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="font-arabic"
                          placeholder={t({ ar: 'أدخل اسمك الكامل', fr: 'Entrez votre nom complet' })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-arabic">
                          {t({ ar: 'البريد الإلكتروني', fr: 'Email' })} *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="example@university.ma"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="institution" className="font-arabic">
                          {t({ ar: 'المؤسسة/الجامعة', fr: 'Institution/Université' })} *
                        </Label>
                        <Input
                          id="institution"
                          name="institution"
                          value={formData.institution}
                          onChange={handleChange}
                          required
                          className="font-arabic"
                          placeholder={t({ ar: 'اسم المؤسسة', fr: 'Nom de l\'institution' })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position" className="font-arabic">
                          {t({ ar: 'المنصب/الدرجة العلمية', fr: 'Poste/Grade académique' })}
                        </Label>
                        <Input
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="font-arabic"
                          placeholder={t({ ar: 'أستاذ، طالب دكتوراه، إلخ', fr: 'Professeur, doctorant, etc.' })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests" className="font-arabic">
                        {t({ ar: 'مجالات الاهتمام البحثي', fr: 'Domaines d\'intérêt de recherche' })}
                      </Label>
                      <Textarea
                        id="interests"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        className="font-arabic min-h-[100px]"
                        placeholder={t({ 
                          ar: 'اذكر مجالات اهتمامك في الدراسات العربية',
                          fr: 'Mentionnez vos domaines d\'intérêt dans les études arabes'
                        })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-arabic text-lg">
                      {t({ ar: 'سجل الآن مجاناً', fr: 'S\'inscrire gratuitement' })}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <Card className="shadow-academic bg-muted/55 border-primary">
                <CardHeader>
                  <CardTitle className="text-lg font-arabic text-primary flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    {t({ ar: 'ما تحصل عليه', fr: 'Ce que vous obtenez' })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-arabic">{t(benefit)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-academic bg-muted/55 border-primary">
                <CardHeader>
                  <CardTitle className="text-lg font-arabic text-primary">
                    {t({ ar: 'معلومات مهمة', fr: 'Informations importantes' })}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2 font-arabic">
                  <p>• {t({ ar: 'التسجيل مجاني تماماً', fr: 'Inscription entièrement gratuite' })}</p>
                  <p>• {t({ ar: 'المقاعد محدودة', fr: 'Places limitées' })}</p>
                  <p>• {t({ ar: 'التأكيد خلال 48 ساعة', fr: 'Confirmation sous 48h' })}</p>
                  <p>• {t({ ar: 'يمكن إلغاء التسجيل في أي وقت', fr: 'Annulation possible à tout moment' })}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};