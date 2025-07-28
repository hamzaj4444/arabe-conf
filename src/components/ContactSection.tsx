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
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: { ar: "البريد الإلكتروني", fr: "Email" },
      value: conferenceData.coordinator?.email,
      href: `mailto:${conferenceData.coordinator?.email}`,
    },
    {
      icon: Mail,
      label: { ar: "البريد الإلكتروني", fr: "Email" },
      value: conferenceData.coordinator1?.email,
      href: `mailto:${conferenceData.coordinator1?.email}`,
    },
    {
      icon: Phone,
      label: { ar: "هاتف د. رشيدة كوجيل", fr: "Téléphone" },
      value: conferenceData.coordinator?.phone,
      href: `tel:${conferenceData.coordinator?.phone}`,
    },
    {
      icon: Phone,
      label: { ar: "هاتف د. عمر بوسلات", fr: "Téléphone" },
      value: conferenceData.coordinator1?.phone,
      href: `tel:${conferenceData.coordinator1?.phone}`,
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

          {/* Contact Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) =>
                info.value ? (
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
                                info.href.startsWith("http") ? "_blank" : undefined
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
                ) : null
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organizer Info Card */}
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
                        ar: "المدرسة العليا للأساتذة بفاس هي مؤسسة تعليمية عريقة...",
                        fr: "L'École Normale Supérieure de Fès est une institution...",
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3 font-arabic">
                      {t({ ar: "الدعم والرعاية", fr: "Soutien et parrainage" })}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-arabic">
                      {t({
                        ar: "يحظى المؤتمر بدعم جامعة سيدي محمد بن عبد الله...",
                        fr: "La conférence bénéficie du soutien de l’Université...",
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card className="shadow-academic bg-muted/55 border-primary">
              <CardHeader>
                <CardTitle className="text-xl font-arabic text-primary text-center flex items-center justify-center gap-2">
                  <Clock className="h-6 w-6" />
                  {t({ ar: "ساعات العمل", fr: "Heures d'ouverture" })}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-muted-foreground text-sm font-arabic space-y-2 max-w-md mx-auto">
                  <p className="flex justify-between">
                    <span>{t({ ar: "الاثنين - الجمعة:", fr: "Lundi - Vendredi:" })}</span>
                    <span>08:00 - 17:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{t({ ar: "السبت:", fr: "Samedi:" })}</span>
                    <span>08:00 - 12:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>{t({ ar: "الأحد:", fr: "Dimanche:" })}</span>
                    <span className="text-muted-foreground">{t({ ar: "مغلق", fr: "Fermé" })}</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Participation Card (Full Width) */}
            <Card className="shadow-academic bg-white border-primary md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl font-arabic text-primary text-center flex items-center justify-center gap-2">
                  <Mail className="h-6 w-6" />
                  على الراغبين بالمشاركة
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text -foreground text-sm leading-relaxed font-arabic">
                  على الراغبين بالمشاركة في أشغال المؤتمر الدولي، إرسال ملخصات أعمالهم العلمية في أجل أقصاه 30 أكتوبر 2025 عبر البريد الإلكتروني التالي:{" "}
                  <a
                    href="mailto:rachida.gougil@usmba.ac.ma"
                    className="text-primary hover:underline"
                  >
                    rachida.gougil@usmba.ac.ma
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
