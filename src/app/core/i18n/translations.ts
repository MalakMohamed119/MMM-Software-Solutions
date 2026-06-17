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
        'MMM builds websites for small businesses and web applications for companies in Egypt and the region.',
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
        'MMM is a Cairo-based software solutions company. We build websites for any small business — from the first conversation through to launch and handoff.',
      btnPrimary: 'Start a project',
      btnSecondary: 'View our work',
      focusTitle: 'Typical projects',
      focusItems: [
        'Websites for any small business',
        'Company websites with CMS',
        'Admin panels and internal tools',
        'E-commerce and booking flows',
      ],
    },
    about: {
      label: 'About',
      title: 'Who we are',
      subtitle: 'A Cairo-based company — software built to last.',
      intro:
        'MMM is a small software solutions company. We take on a limited number of projects at a time and work directly with you from scope to handoff — no templates, no middlemen.',
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
        { value: '1', label: 'Team', hint: 'Based in Cairo' },
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
      subtitle: 'Honest feedback from projects we delivered — in their own words.',
      items: [
        {
          quote:
            'We did not have a proper brief — just photos and a rough idea. They told us what to build now and what to leave for later. No surprise invoices halfway through.',
          name: 'Karim Hassan',
          role: 'Store owner',
          company: 'Online shop',
        },
        {
          quote:
            'They promised a date and stuck to it. The admin side is not flashy, but my team uses it every day without needing a long training session.',
          name: 'Ahmed Saad',
          role: 'Supervisor',
          company: 'Care home',
        },
        {
          quote:
            'Most of our customers open the menu from their phone. The page loads fast, looks clean, and we actually get calls to book now — before, everything was DMs.',
          name: 'Mona Refaat',
          role: 'Manager',
          company: 'Restaurant',
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
      description: 'MMM تبني مواقع للمشاريع الصغيرة وتطبيقات ويب للشركات في مصر والمنطقة.',
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
      titleLine2: 'بمعايير احترافية.',
      tagline:
        'MMM شركة حلول برمجية في القاهرة. نبني مواقع لأي مشروع صغير — من أول محادثة حتى التسليم والتشغيل.',
      btnPrimary: 'ابدأ مشروع',
      btnSecondary: 'استعرض أعمالنا',
      focusTitle: 'أنواع المشاريع',
      focusItems: [
        'مواقع لأي مشروع صغير',
        'مواقع شركات مع لوحة تحكم',
        'أنظمة داخلية ولوحات إدارة',
        'متاجر إلكترونية وحجز مواعيد',
      ],
    },
    about: {
      label: 'من نحن',
      title: 'من نحن',
      subtitle: 'شركة حلول برمجية في القاهرة — منتجات رقمية مبنية لتدوم.',
      intro:
        'MMM شركة حلول برمجية. نستقبل عدداً محدوداً من المشاريع، ونعمل معك مباشرة من تحديد النطاق حتى التسليم — بدون قوالب جاهزة أو وسيط.',
      philosophyTitle: 'مبني ليدوم، لا ليبهر فقط',
      philosophy:
        'البرمجية الجيدة هادئة — تعمل، سريعة، وقابلة للصيانة. نختار عدداً أقل من العملاء حتى يحصل كل منتج على التركيز الذي يستحقه.',
      values: [
        {
          num: '01',
          title: 'نطاق واضح',
          desc: 'ما داخل المشروع وما خارجه يُتفق عليه قبل بدء التطوير.',
        },
        {
          num: '02',
          title: 'تواصل مباشر',
          desc: 'تتواصل مع الفريق الذي يبني منتجك.',
        },
        {
          num: '03',
          title: 'شيفرة قابلة للتوسع',
          desc: 'مشاريع منظمة وموثّقة يمكن لفريقك البناء عليها.',
        },
      ],
    },
    stats: {
      items: [
        { value: '+10', label: 'مشاريع مُطلقة', hint: 'مُسلّمة ومُنشرة' },
        { value: 'كامل', label: 'خدمة', hint: 'تصميم · بناء · إطلاق' },
        { value: '1', label: 'فريق', hint: 'مقرّنا القاهرة' },
        { value: 'مباشر', label: 'تواصل', hint: 'بدون وسيط' },
      ],
    },
    why: {
      label: 'لماذا MMM',
      title: 'مستقر في التصميم. واضح في التنفيذ.',
      subtitle:
        'نجمع هندسة منظمة مع فهم عملي للأعمال — برمجيات تعمل اليوم ويمكن لفريقك توسيعها غداً.',
      items: [
        {
          badge: 'Build',
          title: 'هندسة قوية',
          description:
            'أنظمة معيارية وقابلة للصيانة ومنظمة للنمو — لا حلول مؤقتة تتعطل لاحقاً.',
        },
        {
          badge: 'UX',
          title: 'تجربة مستخدم نظيفة',
          description:
            'واجهات احترافية وبديهية — متناسقة مع علامتك التجارية في كل شاشة.',
        },
        {
          badge: 'ROI',
          title: 'تركيز على الأعمال',
          description:
            'لكل ميزة سبب حقيقي. نساعدك على تقليص نطاق العمل لما يهم فعلاً قبل التطوير.',
        },
        {
          badge: 'Support',
          title: 'شراكة طويلة',
          description:
            'توثيق عند التسليم، دعم بعد الإطلاق، ومجال لتطوير المنتج مع نمو أعمالك.',
        },
      ],
    },
    process: {
      label: 'العملية',
      title: 'كيف نعمل',
      subtitle: 'مسار واضح من الفكرة إلى الإطلاق — مع تحديثات منتظمة طوال المشروع.',
      note: 'قد يتغير النطاق والأولويات أثناء العمل — نخطط لذلك بدلاً من مقاومته.',
      items: [
        {
          step: '01',
          title: 'الاكتشاف وتحديد النطاق',
          description:
            'نفهم أهدافك ومستخدميك وقيودك — ثم نحدد ما داخل المشروع وما خارجه، والجدول الزمني الواقعي.',
        },
        {
          step: '02',
          title: 'التصميم والتخطيط',
          description: 'مخططات أولية، نموذج البيانات، وخطة تقنية متفق عليها قبل التطوير.',
        },
        {
          step: '03',
          title: 'البناء والمراجعة',
          description: 'تطوير تدريجي مع عروض دورية — ترى منتجاً يعمل، لا عروضاً تقديمية فقط.',
        },
        {
          step: '04',
          title: 'الإطلاق والتسليم',
          description: 'نشر، توثيق، وتدريب حتى يتمكن فريقك من تشغيل المنتج وتطويره بثقة.',
        },
      ],
    },
    services: {
      label: 'الخدمات',
      title: 'ما نبنيه',
      subtitle: 'من مواقع الشركات إلى أنظمة الأعمال — فريق واحد للتصميم والتطوير والنشر.',
      items: [
        {
          num: '01',
          title: 'مواقع الشركات',
          description: 'مواقع تعريفية وصفحات هبوط — سريعة، متجاوبة، وسهلة التحديث.',
          tags: ['Corporate', 'SEO', 'CMS'],
        },
        {
          num: '02',
          title: 'تطبيقات الويب',
          description: 'لوحات تحكم، لوحات إدارية، بوابات، وأدوات داخلية.',
          tags: ['Dashboards', 'Admin', 'Portals'],
        },
        {
          num: '03',
          title: 'تصميم الواجهات',
          description: 'مخططات أولية وتصميم واجهات قبل التطوير — الجميع يتفق على الشكل مسبقاً.',
          tags: ['Wireframes', 'UI', 'Responsive'],
        },
        {
          num: '04',
          title: 'الخلفية وواجهات البرمجة',
          description: 'واجهات برمجة آمنة، مصادقة، قواعد بيانات، وربط خدمات خارجية.',
          tags: ['APIs', 'Auth', 'Integrations'],
        },
        {
          num: '05',
          title: 'استضافة ونشر',
          description: 'نطاقات، شهادات أمان، نشر سحابي، ومراقبة أساسية.',
          tags: ['Hosting', 'SSL', 'Monitoring'],
        },
        {
          num: '06',
          title: 'تخطيط المشروع',
          description: 'لست متأكداً مما تريد بناءه؟ نحدد الميزات والوقت والميزانية قبل أي تطوير.',
          tags: ['Scope', 'Timeline', 'Budget'],
        },
      ],
    },
    projects: {
      label: 'الأعمال',
      title: 'مشاريع مختارة',
      subtitle: 'مشاريع حقيقية صممناها وبنيناها وسلّمناها — كل مشروع وفق احتياج العميل.',
      viewProject: 'عرض المشروع',
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
            'صفحة هبوط لمطعم: قائمة، شيفات، معرض صور، وتواصل — هدفها تحويل الزوار إلى حجوزات.',
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
      subtitle: 'ملاحظات من عملاء بعد تسليم المشروع — واقعية وبسيطة.',
      items: [
        {
          quote:
            'ما كان لدينا وصف تفصيلي للمشروع — مجرد صور وفكرة عامة. حدّدوا معنا الأولويات، وظلّت التكلفة ضمن ما اتفقنا عليه.',
          name: 'كريم حسن',
          role: 'صاحب متجر',
          company: 'تجارة إلكترونية',
        },
        {
          quote:
            'اتفقنا على موعد وتم التسليم فيه. النظام بسيط ومباشر — الفريق يستخدمه يومياً دون الحاجة إلى تدريب مطوّل.',
          name: 'أحمد سعد',
          role: 'مشرف',
          company: 'دار رعاية',
        },
        {
          quote:
            'أغلب عملائنا يعرضون القائمة من الهاتف. الصفحة سريعة ومنظمة، وبدأنا نستقبل اتصالات للحجز — قبل ذلك كان التواصل كله عبر الرسائل.',
          name: 'منى رفعت',
          role: 'مديرة',
          company: 'مطعم',
        },
      ],
    },
    contact: {
      label: 'تواصل',
      title: 'أخبرنا عن مشروعك',
      subtitle: 'رسالة قصيرة — ما تحتاجه، الجدول الزمني، وهل لديك تصاميم جاهزة. نرد عادة خلال يوم إلى يومي عمل.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      instagram: 'إنستغرام',
      followUs: 'تواصل معنا',
      location: 'الموقع',
      address: 'القاهرة، مصر',
      success: 'تم الإرسال. سنعود إليك قريباً.',
      form: {
        name: 'الاسم',
        namePlaceholder: 'اسمك',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        phonePlaceholder: '0112 674 6232',
        service: 'ما الذي تحتاجه؟',
        servicePlaceholder: 'اختر',
        message: 'الرسالة',
        messagePlaceholder: 'وصف مختصر للمشروع...',
        submit: 'إرسال',
        options: [
          { value: 'web', label: 'موقع' },
          { value: 'app', label: 'تطبيق ويب' },
          { value: 'design', label: 'تصميم واجهات' },
          { value: 'backend', label: 'خلفية / واجهة برمجة' },
          { value: 'consult', label: 'تخطيط فقط' },
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
