export interface Translation {
  ar: string;
  fr: string;
  en?: string;
}

export interface CommitteeMember {
  firstName: string;
  lastName: string;
  institution: Translation;
}

export interface ScheduleItem {
  time: string;
  title: Translation;
  speaker?: string;
  type: "ceremony" | "talk" | "break" | "workshop" | "discussion";
}

export const conferenceData = {
  title: {
    ar: "اللغة العربية: إرث ثقافي وتراث حضاري",
    fr: "La langue arabe : héritage culturel et patrimoine civilisationnel",
    en: "Arabic Language: Cultural Heritage and Civilizational Legacy",
  },

  organizer: {
    ar: "المدرسة العليا للأساتذة بفاس",
    fr: "École Normale Supérieure de Fès",
    en: "École Normale Supérieure de Fès",
  },

  university: {
    ar: "جامعة سيدي محمد بن عبد الله",
    fr: "Université Sidi Mohamed Ben Abdellah",
    en: "Sidi Mohamed Ben Abdellah University",
  },

  location: {
    ar: "فاس، المغرب",
    fr: "Fès, Maroc",
    en: "Fez, Morocco",
  },

  dates: {
    ar: "18-19 ديسمبر 2025",
    fr: "18-19 Décembre 2025",
    en: "December 18-19, 2025",
  },

  occasion: {
    ar: "احتفالاً باليوم العالمي للغة العربية في نسخته الثانية",
    fr: "En célébration de la Journée mondiale de la langue arabe",
    en: "In celebration of World Arabic Language Day",
  },

  coordinator: {
    name: "د. رشيدة كوجيل",
    nameEn: "Dr. Rachida Gougil",
    email: "arabensconfo@gmail.com",
    phone: "0661757427",
  },
  coordinator1: {
    name: "د. عمر بوسلات",
    nameEn: "Dr. Rachida Gougil",
    email: " arabensconfo@gmail.com",
    phone: "0620434781",
  },

  organizingCommittee: [
    {
      firstName: "رشيدة",
      lastName: "كوجيل",
      institution: {
        ar: "المدرسة العليا للأساتذة بفاس",
        fr: "École Normale Supérieure de Fès",
      },
    },
    {
      firstName: "عمر",
      lastName: "بوسلات",
      institution: {
        ar: "المدرسة العليا للأساتذة بفاس",
        fr: "École Normale Supérieure de Fès",
      },
    },
    {
      firstName: "علي",
      lastName: "حيتوف",
      institution: {
        ar: "المدرسة العليا للأساتذة بفاس",
        fr: "École Normale Supérieure de Fès",
      },
    },
    {
      firstName: "سعد",
      lastName: "بناني ضوس",
      institution: {
        ar: "المدرسة العليا للأساتذة بفاس",
        fr: "École Normale Supérieure de Fès",
      },
    },
    {
      firstName: "سعد",
      lastName: "بنعمرو",
      institution: {
        ar: "المدرسة العليا للأساتذة بفاس",
        fr: "École Normale Supérieure de Fès",
      },
    },
  ] as CommitteeMember[],

  scientificCommittee: [
    "علي حيتوف",
    "سعد بناني ضوس",
    "رشيدة كوجيل",
    "عمر بوسلات",
    "محمد الأنصاري",
    "محمد جنان",
    "محمد البغدادي",
    "كريمة حليم",
    "حبيبة أوحادوش",
    "مصطفى الرويجل",
    "عبد القادر زريق",
    "هاجر دحمة",
    "خديجة الدحماني",
    "عثمان زكرياء",
    "عبد العزيز ربيع",
    "جيهان العروسي",
    "نور الهدى بلغيثة",
    "حبيبة توزاني إدريسي",
    "أنور قارة",
    "عبد العزيز ناجح",
    "يوسف بوطاهر",
    "سعيد حليم",
  ],

  objectives: [
    {
      ar: "تعزيز الهوية العربية والثقافية",
      fr: "Renforcer l'identité arabe et culturelle",
    },
    {
      ar: "تشجيع التعاون الأكاديمي في دراسات اللغة العربية",
      fr: "Encourager la coopération académique dans les études arabes",
    },
    {
      ar: "إثارة الفخر الثقافي بالتراث العربي",
      fr: "Susciter la fierté culturelle du patrimoine arabe",
    },
    {
      ar: "استكشاف مستقبل اللغة العربية في العصر الرقمي",
      fr: "Explorer l'avenir de la langue arabe à l'ère numérique",
    },
  ],

  day1Schedule: [
    {
      time: "10:00",
      title: {
        ar: "افتتاح بتلاوة القرآن الكريم",
        fr: "Ouverture avec récitation du Coran",
      },
      type: "ceremony",
    },
    {
      time: "10:10",
      title: { ar: "النشيد الوطني المغربي", fr: "Hymne national marocain" },
      type: "ceremony",
    },
    {
      time: "10:15",
      title: { ar: "كلمات افتتاحية", fr: "Discours d'ouverture" },
      type: "ceremony",
    },
    {
      time: "10:45",
      title: { ar: "استراحة قهوة", fr: "Pause café" },
      type: "break",
    },
    {
      time: "11:15",
      title: {
        ar: "محاضرة 1 (جامعة سيدي محمد بن عبد الله)",
        fr: "Conférence 1 (USMBA)",
      },
      type: "talk",
    },
    {
      time: "11:45",
      title: { ar: "محاضرة 2", fr: "Conférence 2" },
      type: "talk",
    },
    {
      time: "12:15",
      title: { ar: "محاضرة 3", fr: "Conférence 3" },
      type: "talk",
    },
    {
      time: "12:30",
      title: { ar: "محاضرة 4", fr: "Conférence 4" },
      type: "talk",
    },
    {
      time: "12:45",
      title: { ar: "محاضرة 5", fr: "Conférence 5" },
      type: "talk",
    },
    {
      time: "13:00",
      title: { ar: "محاضرة 6", fr: "Conférence 6" },
      type: "talk",
    },
    {
      time: "13:15",
      title: { ar: "محاضرة 7", fr: "Conférence 7" },
      type: "talk",
    },
    {
      time: "13:30",
      title: { ar: "محاضرة 8", fr: "Conférence 8" },
      type: "talk",
    },
    {
      time: "13:45",
      title: { ar: "محاضرة 9", fr: "Conférence 9" },
      type: "talk",
    },
    {
      time: "14:00",
      title: { ar: "وجبة الغداء", fr: "Déjeuner" },
      type: "break",
    },
    {
      time: "15:00",
      title: {
        ar: "محاضرة 10 (جامعة سيدي محمد بن عبد الله)",
        fr: "Conférence 10 (USMBA)",
      },
      type: "talk",
    },
    {
      time: "15:15",
      title: {
        ar: "محاضرة 11 (جامعة سيدي محمد بن عبد الله)",
        fr: "Conférence 11 (USMBA)",
      },
      type: "talk",
    },
    {
      time: "15:30",
      title: {
        ar: "محاضرة 12 (جامعة سيدي محمد بن عبد الله)",
        fr: "Conférence 12 (USMBA)",
      },
      type: "talk",
    },
    {
      time: "15:45",
      title: { ar: "محاضرة 13", fr: "Conférence 13" },
      type: "talk",
    },
    {
      time: "16:00",
      title: { ar: "محاضرة 14", fr: "Conférence 14" },
      type: "talk",
    },
    {
      time: "16:15",
      title: { ar: "محاضرة 15", fr: "Conférence 15" },
      type: "talk",
    },
    {
      time: "16:30",
      title: { ar: "استراحة قهوة", fr: "Pause café" },
      type: "break",
    },
    {
      time: "17:00",
      title: { ar: "محاضرة 16", fr: "Conférence 16" },
      type: "talk",
    },
    {
      time: "17:15",
      title: { ar: "محاضرة 17", fr: "Conférence 17" },
      type: "talk",
    },
    {
      time: "17:30",
      title: { ar: "محاضرة 18", fr: "Conférence 18" },
      type: "talk",
    },
    {
      time: "17:45",
      title: { ar: "مناقشة ختامية", fr: "Discussion finale" },
      type: "discussion",
    },
  ] as ScheduleItem[],

  day2Schedule: [
    {
      time: "09:00",
      title: { ar: "ورش عمل طلابية", fr: "Ateliers étudiants" },
      type: "workshop",
    },
    {
      time: "10:30",
      title: {
        ar: "أنشطة توعوية حول اللغة العربية",
        fr: "Activités de sensibilisation sur la langue arabe",
      },
      type: "workshop",
    },
    {
      time: "12:00",
      title: { ar: "عروض تقديمية من الطلاب", fr: "Présentations d'étudiants" },
      type: "talk",
    },
    {
      time: "14:00",
      title: { ar: "وجبة الغداء", fr: "Déjeuner" },
      type: "break",
    },
    {
      time: "15:00",
      title: { ar: "نشاطات ثقافية", fr: "Activités culturelles" },
      type: "workshop",
    },
    {
      time: "16:30",
      title: { ar: "حفل الختام", fr: "Cérémonie de clôture" },
      type: "ceremony",
    },
  ] as ScheduleItem[],
};
