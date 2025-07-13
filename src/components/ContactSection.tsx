import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { conferenceData } from "@/data/conferenceData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Clock,
  Calendar,
  ExternalLink,
  University,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: { ar: "البريد الإلكتروني", fr: "Email" },
      value: conferenceData.coordinator.email,
      href: `mailto:${conferenceData.coordinator.email}`,
    },
     {
      icon: Mail,
      label: { ar: "البريد الإلكتروني", fr: "Email" },
      value: conferenceData.coordinator1.email,
      href: `mailto:${conferenceData.coordinator1.email}`,
    },
    {
      icon: Phone,
      label: { ar: "هاتف د. رشيدة كوجيل", fr: "Téléphone" },
      value: conferenceData.coordinator.phone,
      href: `tel:${conferenceData.coordinator.phone}`,
    },
    {
    icon: Phone,
      label: { ar: "هاتف د. عمر بوسلات", fr: "Téléphone" },
      value: conferenceData.coordinator1.phone,
      href: `tel:${conferenceData.coordinator1.phone}`,
    },
    {
      icon: MapPin,
      label: { ar: "الموقع", fr: "Lieu" },
      value: t(conferenceData.organizer),
      href: "https://maps.google.com/?q=École+Normale+Supérieure+Fès",
    },
    {
      icon: Calendar,
      label: { ar: "التاريخ", fr: "Date" },
      value: t(conferenceData.dates),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-zellige">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="section-header">
              {t({ ar: "تنسيق أشغال المؤتمر", fr: "Contactez-nous" })}
            </h2>
            <p className="text-lg text-muted-foreground font-arabic">
              {t({
                ar: "للاستفسارات والمعلومات الإضافية، لا تتردد في التواصل معنا",
                fr: "Pour toute question ou information supplémentaire, n'hésitez pas à nous contacter",
              })}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="shadow-academic hover:shadow-elegant transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-2 font-arabic">
                          {t(info.label)}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors break-all"
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                            {info.href.startsWith("http") && (
                              <ExternalLink className="inline h-4 w-4 ml-1" />
                            )}
                          </a>
                        ) : (
                          <span className="text-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coordinator Info */}
            <div className="space-y-6">

        
            </div>
          </div>
{/* Additional Information */}
<div className="mt-12">
  {/* Grid container for both cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* First Card */}
    <Card className="shadow-academic bg-muted/55 border-primary">
      <CardHeader>
        <CardTitle className="text-xl font-arabic text-primary text-center flex items-center justify-center gap-2">
          <Building className="h-6 w-6" />
          {t({
            ar: "معلومات إضافية",
            fr: "Informations supplémentaires",
          })}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="font-semibold text-primary mb-3 font-arabic">
          {t({
            ar: "عن المؤسسة المنظمة",
            fr: "À propos de l'institution organisatrice",
          })}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed font-arabic">
          {t({
            ar: "المدرسة العليا للأساتذة بفاس هي مؤسسة تعليمية عريقة تابعة لجامعة سيدي محمد بن عبد الله، تختص في تكوين الأساتذة والباحثين في مختلف التخصصات الأكاديمية.",
            fr: "L'École Normale Supérieure de Fès est une institution éducative prestigieuse rattachée à l'Université Sidi Mohamed Ben Abdellah, spécialisée dans la formation d'enseignants et de chercheurs dans diverses disciplines académiques.",
          })}
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-primary mb-3 font-arabic">
          {t({ ar: "الدعم والرعاية", fr: "Soutien et parrainage" })}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed font-arabic">
          {t({
            ar: "يحظى المؤتمر بدعم جامعة سيدي محمد بن عبد الله والمدرسة العليا للأساتذة، ويهدف إلى تعزيز البحث العلمي في مجال الدراسات العربية والتراث الثقافي.",
            fr: "La conférence bénéficie du soutien de l'Université Sidi Mohamed Ben Abdellah et de l'École Normale Supérieure, visant à promouvoir la recherche scientifique dans le domaine des études arabes et du patrimoine culturel.",
          })}
        </p>
      </div>
    </div>
  </CardContent>
    </Card>

    {/* Second Card */}
    <Card className="shadow-academic bg-muted/55 border-primary">
      <CardHeader>
        <CardTitle className="text-xl font-arabic text-primary text-center flex items-center justify-center gap-2">
          <Clock className="h-6 w-6" />
          {t({ ar: "ساعات العمل", fr: "Heures d'ouverture" })}
        </CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <div className="grid md:grid-cols-1 gap-4">
      <div>
        <h4 className="font-semibold text-primary mb-3 font-arabic">
          {t({ ar: "أوقات الدوام", fr: "Horaires de travail" })}
        </h4>
        <div className="text-muted-foreground text-sm leading-relaxed font-arabic space-y-2">
          <p className="flex justify-between max-w-md mx-auto">
            <span>
              {t({ ar: "الاثنين - الجمعة:", fr: "Lundi - Vendredi:" })}
            </span>
            <span>08:00 - 17:00</span>
          </p>
          <p className="flex justify-between max-w-md mx-auto">
            <span>{t({ ar: "السبت:", fr: "Samedi:" })}</span>
            <span>08:00 - 12:00</span>
          </p>
          <p className="flex justify-between max-w-md mx-auto">
            <span>{t({ ar: "الأحد:", fr: "Dimanche:" })}</span>
            <span className="text-muted-foreground">
              {t({ ar: "مغلق", fr: "Fermé" })}
            </span>
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
  </div>
</div>
          
        </div>
      </div>
    </section>
  );
};
