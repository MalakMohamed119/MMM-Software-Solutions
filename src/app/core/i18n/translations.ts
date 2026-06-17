export type Lang = 'en' | 'ar';

export interface NavLink {
  label: string;
  fragment: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export interface StatItem {
  value?: string;
  label: string;
  hint: string;
}

export interface WhyItem {
  badge: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
  url: string;
  linkLabel: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  nav: { links: NavLink[]; cta: string; menuLabel: string };
  lang: { toggleLabel: string; current: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    btnPrimary: string;
    btnSecondary: string;
    focusTitle: string;
    focusItems: string[];
  };
    about: {
      label: string;
      title: string;
      subtitle: string;
      intro: string;
      philosophyTitle: string;
      philosophy: string;
      values: ValueItem[];
    };
  stats: {
    items: StatItem[];
  };
  why: {
    label: string;
    title: string;
    subtitle: string;
    items: WhyItem[];
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    note: string;
    items: ProcessItem[];
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    viewProject: string;
    items: ProjectItem[];
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    instagram: string;
    followUs: string;
    location: string;
    address: string;
    success: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      options: ContactOption[];
    };
  };
  footer: {
    quickLinks: string;
    contact: string;
    rights: string;
    location: string;
  };
}

export const TRANSLATIONS: Record<Lang, SiteContent> = {
  en: {
    meta: {
      title: 'MMM — Software Solutions',
      description:
        'MMM builds websites and web applications for businesses in Egypt and the region.',
    },
    nav: {
      links: [
        { label: 'Services', fragment: 'services' },
        { label: 'Process', fragment: 'process' },
        { label: 'About', fragment: 'about' },
        { label: 'Work', fragment: 'projects' },
        { label: 'Contact', fragment: 'contact' },
      ],
      cta: 'Start a project',
      menuLabel: 'Open menu',
    },
    lang: { toggleLabel: 'Switch to Arabic', current: 'AR' },
    hero: {
      eyebrow: 'Software Solutions · Cairo',
      titleLine1: 'Websites and web apps,',
      titleLine2: 'built properly.',
      tagline:
        'MMM is a Cairo-based software studio. We design and build web products — from the first conversation through to launch and handoff.',
      btnPrimary: 'Start a project',
      btnSecondary: 'View our work',
      focusTitle: 'Typical projects',
      focusItems: [
        'Company websites with CMS',
        'Admin panels and internal tools',
        'E-commerce and booking flows',
      ],
    },
    about: {
      label: 'About',
      title: 'Who we are',
      subtitle: 'A Cairo-based studio — software built to last.',
      intro:
        'MMM is a small software studio. We take on a limited number of projects at a time and work directly with you from scope to handoff — no templates, no middlemen.',
      philosophyTitle: 'Built to last, not to impress',
      philosophy:
        'Good software is quiet — it works, loads fast, and stays maintainable. We choose fewer clients so each product gets the focus it deserves.',
      values: [
        {
          num: '01',
          title: 'Clear scope',
          desc: 'What is in and out is defined before code starts.',
        },
        {
          num: '02',
          title: 'Direct communication',
          desc: 'You talk to the people building your product.',
        },
        {
          num: '03',
          title: 'Code you can keep',
          desc: 'Structured, documented projects your team can extend.',
        },
      ],
    },
    stats: {
      items: [
        { value: '+10', label: 'Live projects', hint: 'Shipped & deployed' },
        { value: 'Full', label: 'Service', hint: 'Design · build · launch' },
        { value: '1', label: 'Studio', hint: 'Cairo-based team' },
        { value: 'Direct', label: 'Communication', hint: 'No middlemen' },
      ],
    },
    why: {
      label: 'Why MMM',
      title: 'Stable by design. Clear by default.',
      subtitle:
        'We combine structured architecture with practical business thinking — software that works today and your team can extend tomorrow.',
      items: [
        {
          badge: 'Build',
          title: 'Strong architecture',
          description:
            'Modular, maintainable systems structured for growth — not quick hacks that fall apart later.',
        },
        {
          badge: 'UX',
          title: 'Clean user experience',
          description:
            'Interfaces that feel professional and intuitive — aligned with your brand at every screen.',
        },
        {
          badge: 'ROI',
          title: 'Business-focused',
          description:
            'Every feature maps to a real need. We help you cut scope to what matters before writing code.',
        },
        {
          badge: 'Support',
          title: 'Long-term partnership',
          description:
            'Handoff documentation, post-launch fixes, and room to evolve the product as your business grows.',
        },
      ],
    },
    process: {
      label: 'Process',
      title: 'How we work',
      subtitle:
        'A clear path from idea to launch — with regular updates so you always know where things stand.',
      note: 'Scope and priorities can shift as we learn more — we plan for that instead of fighting it.',
      items: [
        {
          step: '01',
          title: 'Discovery & scoping',
          description:
            'We learn your goals, users, and constraints — then define what is in, what is out, and a realistic timeline.',
        },
        {
          step: '02',
          title: 'Design & planning',
          description:
            'Wireframes, data model, and technical plan agreed before development starts.',
        },
        {
          step: '03',
          title: 'Build & review',
          description:
            'Incremental development with demos along the way — you see working software, not slide decks.',
        },
        {
          step: '04',
          title: 'Launch & handoff',
          description:
            'Deployment, documentation, and training so your team can run and extend the product confidently.',
        },
      ],
    },
    services: {
      label: 'Services',
      title: 'What we build',
      subtitle:
        'From company websites to business systems — one team for design, development, and deployment.',
      items: [
        {
          num: '01',
          title: 'Corporate websites',
          description:
            'Marketing sites, landing pages, and company profiles — fast, responsive, and easy to update.',
          tags: ['Corporate', 'SEO', 'CMS'],
        },
        {
          num: '02',
          title: 'Web applications',
          description:
            'Dashboards, admin panels, portals, and internal tools your team uses every day.',
          tags: ['Dashboards', 'Admin', 'Portals'],
        },
        {
          num: '03',
          title: 'UI design',
          description:
            'Wireframes and interface design before development — everyone agrees on layout first.',
          tags: ['Wireframes', 'UI', 'Responsive'],
        },
        {
          num: '04',
          title: 'Backend & APIs',
          description:
            'Secure APIs, authentication, databases, and third-party integrations.',
          tags: ['APIs', 'Auth', 'Integrations'],
        },
        {
          num: '05',
          title: 'Hosting & deployment',
          description:
            'Domains, SSL, cloud deployment, and basic monitoring — your product goes live cleanly.',
          tags: ['Hosting', 'SSL', 'Monitoring'],
        },
        {
          num: '06',
          title: 'Project planning',
          description:
            'Not sure what to build yet? We map features, timeline, and budget before a single line of code.',
          tags: ['Scope', 'Timeline', 'Budget'],
        },
      ],
    },
    projects: {
      label: 'Work',
      title: 'Selected projects',
      subtitle:
        'Real projects we designed, built, and shipped — each one tailored to what the client actually needed.',
      viewProject: 'View project',
      items: [
        {
          title: 'Locum',
          category: 'Healthcare',
          year: '2026',
          description:
            'Healthcare staffing platform that helps care homes and nursing facilities request qualified PSWs through a responsive, modern interface.',
          tags: ['Healthcare', 'Web App', 'Staffing'],
          color: '#1a2a35',
          image: '/screenshots/locum.png',
          url: 'https://lo-cum.vercel.app/',
          linkLabel: 'lo-cum.vercel.app',
        },
        {
          title: 'E-Commerce Store',
          category: 'E-commerce',
          year: '2025',
          description:
            'Full e-commerce web app with product browsing, cart flow, and a clean shopping experience.',
          tags: ['E-commerce', 'Web App', 'Storefront'],
          color: '#1e2433',
          image: '/screenshots/ecommerce.png',
          url: 'https://e-commerce-five-kappa-11.vercel.app/home',
          linkLabel: 'e-commerce-five-kappa-11.vercel.app',
        },
        {
          title: 'MovieNight — Trendify',
          category: 'Entertainment',
          year: '2025',
          description:
            'Movie discovery app for browsing trends, exploring titles, and picking what to watch next.',
          tags: ['Entertainment', 'Web App', 'Discovery'],
          color: '#221a2e',
          image: '/screenshots/movie-night.png',
          url: 'https://movie-night-seven.vercel.app/trendify',
          linkLabel: 'movie-night-seven.vercel.app',
        },
        {
          title: 'Mealify',
          category: 'Restaurant · Landing',
          year: '2025',
          description:
            'Restaurant landing page with menu highlights, chef profiles, gallery, and contact — designed to convert visitors into bookings.',
          tags: ['Restaurant', 'Landing Page', 'Marketing'],
          color: '#2a1f19',
          image: '/screenshots/mealify.png',
          url: 'https://malakmohamed119.github.io/Mealify/',
          linkLabel: 'malakmohamed119.github.io/Mealify',
        },
      ],
    },
    testimonials: {
      label: 'Clients',
      title: 'What people said after launch',
      subtitle: 'Short notes from projects we finished — not marketing copy.',
      items: [
        {
          quote:
            'They shipped on the date we agreed on. Our team still uses the admin panel daily without calling us for every small change.',
          name: 'Ahmed M.',
          role: 'Operations',
          company: 'Retail client',
        },
        {
          quote:
            'We had a rough idea and a tight budget. MMM helped us cut scope to what mattered and built exactly that.',
          name: 'Sara H.',
          role: 'Co-founder',
          company: 'Early-stage startup',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Tell us about your project',
      subtitle: 'Send a short message — what you need, your timeline, and whether you have designs ready. We usually reply within 1–2 business days.',
      email: 'Email',
      phone: 'Phone',
      instagram: 'Instagram',
      followUs: 'Reach us',
      location: 'Location',
      address: 'Cairo, Egypt',
      success: 'Message sent. We will get back to you soon.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        phone: 'Phone',
        phonePlaceholder: '0112 674 6232',
        service: 'What do you need?',
        servicePlaceholder: 'Choose one',
        message: 'Message',
        messagePlaceholder: 'Brief description of the project...',
        submit: 'Send',
        options: [
          { value: 'web', label: 'Website' },
          { value: 'app', label: 'Web application' },
          { value: 'design', label: 'UI design' },
          { value: 'backend', label: 'Backend / API' },
          { value: 'consult', label: 'Planning only' },
        ],
      },
    },
    footer: {
      quickLinks: 'Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      location: 'Cairo, Egypt',
    },
  },
  ar: {
    meta: {
      title: 'MMM — حلول برمجية',
      description: 'MMM تبني مواقع وتطبيقات ويب للشركات في مصر والمنطقة.',
    },
    nav: {
      links: [
        { label: 'الخدمات', fragment: 'services' },
        { label: 'العملية', fragment: 'process' },
        { label: 'من نحن', fragment: 'about' },
        { label: 'الأعمال', fragment: 'projects' },
        { label: 'تواصل', fragment: 'contact' },
      ],
      cta: 'ابدأ مشروع',
      menuLabel: 'فتح القائمة',
    },
    lang: { toggleLabel: 'Switch to English', current: 'EN' },
    hero: {
      eyebrow: 'حلول برمجية · القاهرة',
      titleLine1: 'مواقع وتطبيقات ويب',
      titleLine2: 'تتبني صح.',
      tagline:
        'MMM استوديو برمجيات في القاهرة. بنصمّم ونبني منتجات ويب — من أول محادثة لحد التسليم والتشغيل.',
      btnPrimary: 'ابدأ مشروع',
      btnSecondary: 'شوف أعمالنا',
      focusTitle: 'أنواع المشاريع',
      focusItems: [
        'مواقع شركات مع لوحة تحكم',
        'أنظمة داخلية ولوحات إدارة',
        'متاجر إلكترونية وحجز مواعيد',
      ],
    },
    about: {
      label: 'من نحن',
      title: 'مين إحنا',
      subtitle: 'استوديو في القاهرة — برمجيات مبنية تدوم.',
      intro:
        'MMM استوديو برمجيات صغير. بناخد عدد محدود من المشاريع، وبنشتغل معاك مباشرة من النطاق للتسليم — من غير قوالب ولا وسيط.',
      philosophyTitle: 'مبني يدوم، مش يبهر بس',
      philosophy:
        'البرمجيات الحلوة هادية — بتشتغل، سريعة، وقابلة للصيانة. بنختار عملاء أقل عشان كل منتج ياخد التركيز اللي يستحقه.',
      values: [
        {
          num: '01',
          title: 'نطاق واضح',
          desc: 'إيه داخل وإيه بره متفق عليه قبل ما يبدأ الكود.',
        },
        {
          num: '02',
          title: 'تواصل مباشر',
          desc: 'بتكلم الناس اللي بتبني المنتج.',
        },
        {
          num: '03',
          title: 'كود تقدر تكمل عليه',
          desc: 'مشاريع منظمة وموثقة فريقك يوسّعها.',
        },
      ],
    },
    stats: {
      items: [
        { value: '+10', label: 'مشاريع live', hint: 'مُسلّمة ومُنشرة' },
        { value: 'كامل', label: 'خدمة', hint: 'تصميم · بناء · إطلاق' },
        { value: '1', label: 'استوديو', hint: 'فريق في القاهرة' },
        { value: 'مباشر', label: 'تواصل', hint: 'من غير وسيط' },
      ],
    },
    why: {
      label: 'ليه MMM',
      title: 'مستقر في التصميم. واضح في التنفيذ.',
      subtitle:
        'بنجمع هندسة منظمة مع فهم عملي للبيزنس — برمجيات تشتغل النهاردة وفريقك يقدر يوسّعها بكرة.',
      items: [
        {
          badge: 'Build',
          title: 'هندسة قوية',
          description:
            'أنظمة modular وقابلة للصيانة ومنظمة للنمو — مش hacks سريعة تتكسر بعدين.',
        },
        {
          badge: 'UX',
          title: 'تجربة مستخدم نظيفة',
          description:
            'واجهات احترافية وبديهية — متناسقة مع براندك في كل شاشة.',
        },
        {
          badge: 'ROI',
          title: 'تركيز على البيزنس',
          description:
            'كل feature ليها سبب حقيقي. بنساعدك تختصري الـ scope على اللي مهم قبل الكود.',
        },
        {
          badge: 'Support',
          title: 'شراكة طويلة',
          description:
            'توثيق تسليم، fixes بعد الإطلاق، ومساحة لتطوير المنتج مع نمو شغلك.',
        },
      ],
    },
    process: {
      label: 'العملية',
      title: 'إزاي بنشتغل',
      subtitle: 'مسار واضح من الفكرة للإطلاق — مع updates منتظمة طول الطريق.',
      note: 'النطاق والأولويات ممكن تتغير وإحنا بنتعلم — بنخطط لده مش بنقاومه.',
      items: [
        {
          step: '01',
          title: 'Discovery & scoping',
          description:
            'بنفهم أهدافك ومستخدمينك وقيودك — وبنحدد إيه داخل، إيه بره، والـ timeline الواقعي.',
        },
        {
          step: '02',
          title: 'Design & planning',
          description: 'Wireframes، data model، وخطة تقنية متفق عليها قبل التطوير.',
        },
        {
          step: '03',
          title: 'Build & review',
          description: 'تطوير تدريجي مع demos — بتشوفي software شغّال، مش presentations.',
        },
        {
          step: '04',
          title: 'Launch & handoff',
          description: 'نشر، توثيق، وتدريب عشان فريقك يشغّل ويطوّر المنتج بثقة.',
        },
      ],
    },
    services: {
      label: 'الخدمات',
      title: 'إيه اللي بنبنيه',
      subtitle: 'من مواقع شركات لأنظمة أعمال — فريق واحد للتصميم والتطوير والنشر.',
      items: [
        {
          num: '01',
          title: 'مواقع شركات',
          description: 'مواقع تعريفية وlanding pages — سريعة، responsive، وسهل تحدّثها.',
          tags: ['Corporate', 'SEO', 'CMS'],
        },
        {
          num: '02',
          title: 'تطبيقات ويب',
          description: 'Dashboards وadmin panels وportals وأدوات داخلية.',
          tags: ['Dashboards', 'Admin', 'Portals'],
        },
        {
          num: '03',
          title: 'تصميم UI',
          description: 'Wireframes وتصميم واجهات قبل التطوير — الكل يتفق على الشكل الأول.',
          tags: ['Wireframes', 'UI', 'Responsive'],
        },
        {
          num: '04',
          title: 'Backend & APIs',
          description: 'APIs آمنة، authentication، قواعد بيانات، وربط خدمات خارجية.',
          tags: ['APIs', 'Auth', 'Integrations'],
        },
        {
          num: '05',
          title: 'استضافة ونشر',
          description: 'Domains، SSL، cloud deployment، وmonitoring أساسي.',
          tags: ['Hosting', 'SSL', 'Monitoring'],
        },
        {
          num: '06',
          title: 'تخطيط المشروع',
          description: 'لسه مش متأكد ت build إيه؟ بنحدد features ووقت وميزانية قبل أي كود.',
          tags: ['Scope', 'Timeline', 'Budget'],
        },
      ],
    },
    projects: {
      label: 'الأعمال',
      title: 'مشاريع مختارة',
      subtitle: 'مشاريع حقيقية صممناها وبنيناها وسلّمناها — كل واحدة حسب احتياج العميل.',
      viewProject: 'افتح المشروع',
      items: [
        {
          title: 'Locum',
          category: 'Healthcare',
          year: '2026',
          description:
            'منصة توظيف صحي تساعد دور الرعاية ومرافق التمريض على طلب PSW مؤهلين من خلال واجهة حديثة ومتجاوبة.',
          tags: ['Healthcare', 'Web App', 'Staffing'],
          color: '#1a2a35',
          image: '/screenshots/locum.png',
          url: 'https://lo-cum.vercel.app/',
          linkLabel: 'lo-cum.vercel.app',
        },
        {
          title: 'E-Commerce Store',
          category: 'E-commerce',
          year: '2025',
          description:
            'تطبيق تجارة إلكترونية كامل: تصفح منتجات، سلة، وتجربة شراء منظمة.',
          tags: ['E-commerce', 'Web App', 'Storefront'],
          color: '#1e2433',
          image: '/screenshots/ecommerce.png',
          url: 'https://e-commerce-five-kappa-11.vercel.app/home',
          linkLabel: 'e-commerce-five-kappa-11.vercel.app',
        },
        {
          title: 'MovieNight — Trendify',
          category: 'Entertainment',
          year: '2025',
          description:
            'تطبيق لاكتشاف الأفلام: ترندات، استكشاف عناوين، واختيار فيلم للمشاهدة.',
          tags: ['Entertainment', 'Web App', 'Discovery'],
          color: '#221a2e',
          image: '/screenshots/movie-night.png',
          url: 'https://movie-night-seven.vercel.app/trendify',
          linkLabel: 'movie-night-seven.vercel.app',
        },
        {
          title: 'Mealify',
          category: 'Restaurant · Landing',
          year: '2025',
          description:
            'Landing page لمطعم: قائمة، شيفات، معرض صور، وتواصل — هدفها تحويل الزوار لحجوزات.',
          tags: ['Restaurant', 'Landing Page', 'Marketing'],
          color: '#2a1f19',
          image: '/screenshots/mealify.png',
          url: 'https://malakmohamed119.github.io/Mealify/',
          linkLabel: 'malakmohamed119.github.io/Mealify',
        },
      ],
    },
    testimonials: {
      label: 'العملاء',
      title: 'كلام الناس بعد التسليم',
      subtitle: 'ملاحظات قصيرة من مشاريع خلصناها — مش copy تسويقي.',
      items: [
        {
          quote:
            'سلّموا في الميعاد اللي اتفقنا عليه. فريقنا لسه بيستخدم ال admin panel يومياً من غير ما يكلّمنا في كل تعديل صغير.',
          name: 'أحمد م.',
          role: 'Operations',
          company: 'عميل retail',
        },
        {
          quote:
            'كان عندنا فكرة roughly وميزانية محدودة. MMM ساعدونا نختصر ال scope على اللي مهم و build بالظبط كده.',
          name: 'سارة ح.',
          role: 'Co-founder',
          company: 'Startup',
        },
      ],
    },
    contact: {
      label: 'تواصل',
      title: 'قولّنا عن مشروعك',
      subtitle: 'رسالة قصيرة — محتاج إيه، ال timeline، وهل عندك designs. بنرد عادة في 1–2 يوم عمل.',
      email: 'إيميل',
      phone: 'تليفون',
      instagram: 'إنستجرام',
      followUs: 'تواصل معنا',
      location: 'المكان',
      address: 'القاهرة، مصر',
      success: 'اتبعتت. هنرد عليك قريب.',
      form: {
        name: 'الاسم',
        namePlaceholder: 'اسمك',
        email: 'الإيميل',
        phone: 'التليفون',
        phonePlaceholder: '0112 674 6232',
        service: 'محتاج إيه؟',
        servicePlaceholder: 'اختار',
        message: 'الرسالة',
        messagePlaceholder: 'وصف مختصر للمشروع...',
        submit: 'إرسال',
        options: [
          { value: 'web', label: 'موقع' },
          { value: 'app', label: 'تطبيق ويب' },
          { value: 'design', label: 'تصميم UI' },
          { value: 'backend', label: 'Backend / API' },
          { value: 'consult', label: 'تخطيط بس' },
        ],
      },
    },
    footer: {
      quickLinks: 'روابط',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      location: 'القاهرة، مصر',
    },
  },
};
