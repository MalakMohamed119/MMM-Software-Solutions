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
  nav: { links: NavLink[]; cta: string; menuLabel: string; closeMenuLabel: string };
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
  whatsapp: {
    label: string;
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
      closeMenuLabel: 'Close menu',
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
          title: 'MovieNight',
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
    whatsapp: {
      label: 'WhatsApp',
    },
  },
  ar: {
    meta: {
      title: 'MMM — تطوير مواقع وتطبيقات',
      description: 'MMM تساعد المشاريع والشركات على بناء مواقع وتطبيقات ويب عملية واحترافية في مصر والمنطقة.',
    },
    nav: {
      links: [
        { label: 'الخدمات', fragment: 'services' },
        { label: 'خطواتنا', fragment: 'process' },
        { label: 'من نحن', fragment: 'about' },
        { label: 'الأعمال', fragment: 'projects' },
        { label: 'تواصل', fragment: 'contact' },
      ],
      cta: 'ابدأ مشروعك',
      menuLabel: 'فتح القائمة',
      closeMenuLabel: 'إغلاق القائمة',
    },
    lang: { toggleLabel: 'Switch to English', current: 'EN' },
    hero: {
      eyebrow: 'تطوير مواقع وتطبيقات من القاهرة',
      titleLine1: 'مواقع وتطبيقات ويب',
      titleLine2: 'تخدم عملك بفعالية.',
      tagline:
        'MMM شركة برمجيات في القاهرة. نحول فكرتك إلى موقع أو تطبيق واضح وسريع وسهل الإدارة، منذ أول نقاش وحتى الإطلاق.',
      btnPrimary: 'ابدأ مشروعك',
      btnSecondary: 'استعرض أعمالنا',
      focusTitle: 'نعمل عادة على',
      focusItems: [
        'مواقع للمشاريع الصغيرة',
        'مواقع شركات قابلة للتحديث',
        'لوحات تحكم وأنظمة داخلية',
        'متاجر إلكترونية وأنظمة حجز',
      ],
    },
    about: {
      label: 'من نحن',
      title: 'من نحن',
      subtitle: 'فريق برمجي من القاهرة يبني منتجات رقمية تعيش وتتطور مع عملك.',
      intro:
        'في MMM نعمل على عدد محدود من المشاريع لكي يحصل كل عميل على التركيز الذي يستحقه. نبدأ بفهم الهدف، ثم نصمم ونبني ونسلم لك منتجًا واضحًا، بدون قوالب جاهزة أو وعود مبالغ فيها.',
      philosophyTitle: 'أكثر من مجرد شكل جميل',
      philosophy:
        'المنتج الجيد يجب أن يكون سريعًا، واضحًا، وسهل الصيانة بعد التسليم. لذلك نهتم بالتفاصيل التي لا تظهر دائمًا للمستخدم، لكنها تصنع فرقًا كبيرًا في التشغيل اليومي.',
      values: [
        {
          num: '٠١',
          title: 'اتفاق واضح',
          desc: 'نحدد المطلوب، الأولويات، وما يمكن تأجيله قبل بداية التنفيذ.',
        },
        {
          num: '٠٢',
          title: 'تواصل مباشر',
          desc: 'تتعامل مباشرة مع من ينفذ المشروع، فتكون الصورة أوضح والقرارات أسرع.',
        },
        {
          num: '٠٣',
          title: 'مشروع قابل للتطوير',
          desc: 'نسلمك شيفرة برمجية منظمة يمكن صيانتها وتوسيعها عند الحاجة.',
        },
      ],
    },
    stats: {
      items: [
        { value: '١٠+', label: 'مشاريع منشورة', hint: 'تم تسليمها وإطلاقها' },
        { value: 'كامل', label: 'تنفيذ', hint: 'تصميم · تطوير · إطلاق' },
        { value: '1', label: 'فريق واحد', hint: 'من القاهرة' },
        { value: 'مباشر', label: 'تواصل', hint: 'بدون وسيط' },
      ],
    },
    why: {
      label: 'لماذا MMM',
      title: 'تنفيذ واضح ونتيجة تعتمد عليها.',
      subtitle:
        'نجمع بين خبرة تقنية وفهم عملي لاحتياجات الأعمال، لكي نخرج بمنتج يعمل بكفاءة اليوم ويقبل التطوير لاحقًا.',
      items: [
        {
          badge: 'بناء',
          title: 'أساس تقني متين',
          description:
            'نبني المشروع بشكل منظم من البداية، حتى لا يتحول بعد فترة إلى شيفرة يصعب تعديلها أو تطويرها.',
        },
        {
          badge: 'تجربة',
          title: 'تجربة سهلة وواضحة',
          description:
            'واجهات مرتبة وسريعة الفهم، تناسب جمهورك وتحافظ على شكل احترافي في كل شاشة.',
        },
        {
          badge: 'قيمة',
          title: 'تركيز على ما يفيد فعلاً',
          description:
            'لا نضيف مزايا لمجرد أنها تبدو جيدة. نساعدك تختار ما يخدم هدف المشروع ويوفر الوقت والتكلفة.',
        },
        {
          badge: 'دعم',
          title: 'دعم بعد التسليم',
          description:
            'نسلمك المشروع مع توضيح طريقة تشغيله، ونترك مساحة للتحديث والتطوير مع نمو عملك.',
        },
      ],
    },
    process: {
      label: 'خطواتنا',
      title: 'نعمل معك خطوة بخطوة',
      subtitle: 'من أول فكرة وحتى الإطلاق، كل مرحلة لها هدف واضح وتحديثات منتظمة.',
      note: 'إذا تغيرت الأولويات أثناء التنفيذ، نرتبها معك بدلًا من الاستمرار في اتجاه لم يعد مناسبًا.',
      items: [
        {
          step: '٠١',
          title: 'فهم الفكرة وتحديد المطلوب',
          description:
            'نسمع منك الهدف والجمهور وطريقة العمل الحالية، ثم نحدد المطلوب بدقة وجدولًا زمنيًا واقعيًا.',
        },
        {
          step: '٠٢',
          title: 'تصميم وتجهيز الخطة',
          description: 'نرسم شكل الواجهات ونحدد البيانات والتقنيات المطلوبة قبل كتابة الشيفرة البرمجية.',
        },
        {
          step: '٠٣',
          title: 'تطوير ومراجعة مستمرة',
          description: 'نطور على مراحل ونشاركك نسخًا قابلة للتجربة، حتى ترى المنتج وهو يتقدم فعليًا.',
        },
        {
          step: '٠٤',
          title: 'إطلاق وتسليم',
          description: 'نطلق المشروع على الإنترنت، ونوضح لك طريقة استخدامه وإدارته وما يمكن تطويره لاحقًا.',
        },
      ],
    },
    services: {
      label: 'الخدمات',
      title: 'ماذا يمكننا أن نبني لك؟',
      subtitle: 'من موقع تعريفي بسيط إلى نظام كامل لإدارة عملك، نغطي التصميم والتطوير والإطلاق.',
      items: [
        {
          num: '٠١',
          title: 'مواقع تعريفية للشركات',
          description: 'مواقع احترافية تعرض خدماتك بوضوح وتعمل بسرعة على كل الأجهزة.',
          tags: ['شركات', 'تهيئة محركات البحث', 'إدارة محتوى'],
        },
        {
          num: '٠٢',
          title: 'تطبيقات الويب',
          description: 'لوحات تحكم، بوابات عملاء، وأنظمة داخلية تساعد فريقك ينجز أسرع.',
          tags: ['لوحات تحكم', 'إدارة', 'بوابات'],
        },
        {
          num: '٠٣',
          title: 'تصميم الواجهات',
          description: 'نصمم تجربة المستخدم والواجهات قبل التنفيذ، حتى يكون الشكل والمسار واضحين من البداية.',
          tags: ['مخططات', 'واجهات', 'متجاوب'],
        },
        {
          num: '٠٤',
          title: 'الأنظمة الخلفية وواجهات البرمجة',
          description: 'قواعد بيانات، تسجيل دخول، صلاحيات، وربط مع خدمات خارجية بطريقة آمنة ومنظمة.',
          tags: ['واجهات برمجة', 'تسجيل دخول', 'تكاملات'],
        },
        {
          num: '٠٥',
          title: 'استضافة ونشر',
          description: 'نساعدك في النطاق، شهادة الأمان، رفع المشروع، وتجهيزه للعمل بثبات.',
          tags: ['استضافة', 'أمان', 'متابعة'],
        },
        {
          num: '٠٦',
          title: 'تخطيط المشروع',
          description: 'إذا كانت الفكرة ما زالت غير واضحة، نرتب المتطلبات ونحدد الأولويات قبل بدء التطوير.',
          tags: ['نطاق العمل', 'المدة', 'الميزانية'],
        },
      ],
    },
    projects: {
      label: 'الأعمال',
      title: 'نماذج من أعمالنا',
      subtitle: 'مشاريع حقيقية اشتغلنا عليها من التصميم للتنفيذ، وكل مشروع مبني حسب احتياج صاحبه.',
      viewProject: 'شاهد المشروع',
      items: [
        {
          title: 'Locum',
          category: 'الرعاية الصحية',
          year: '٢٠٢٦',
          description:
            'منصة لقطاع الرعاية الصحية تسهّل على المؤسسات طلب مقدمي رعاية مؤهلين من خلال واجهة حديثة وسهلة الاستخدام.',
          tags: ['رعاية صحية', 'تطبيق ويب', 'توظيف'],
          color: '#1a2a35',
          image: '/screenshots/locum.png',
          url: 'https://lo-cum.vercel.app/',
          linkLabel: 'lo-cum.vercel.app',
        },
        {
          title: 'E-Commerce Store',
          category: 'تجارة إلكترونية',
          year: '٢٠٢٥',
          description:
            'متجر إلكتروني متكامل لتصفح المنتجات وإدارة السلة وإتمام الشراء بتجربة واضحة وسلسة.',
          tags: ['متجر إلكتروني', 'تطبيق ويب', 'واجهة متجر'],
          color: '#1e2433',
          image: '/screenshots/ecommerce.png',
          url: 'https://e-commerce-five-kappa-11.vercel.app/home',
          linkLabel: 'e-commerce-five-kappa-11.vercel.app',
        },
        {
          title: 'MovieNight',
          category: 'ترفيه',
          year: '٢٠٢٥',
          description:
            'تطبيق يساعد المستخدم على اكتشاف الأفلام الرائجة، تصفح العناوين، واختيار ما يناسبه بسهولة.',
          tags: ['ترفيه', 'تطبيق ويب', 'اكتشاف'],
          color: '#221a2e',
          image: '/screenshots/movie-night.png',
          url: 'https://movie-night-seven.vercel.app/trendify',
          linkLabel: 'movie-night-seven.vercel.app',
        },
        {
          title: 'Mealify',
          category: 'مطعم · صفحة تعريفية',
          year: '٢٠٢٥',
          description:
            'صفحة مطعم تعرض القائمة وفريق الطهاة ومعرض الصور وطرق التواصل، بهدف تحويل الزائر إلى حجز فعلي.',
          tags: ['مطعم', 'صفحة تعريفية', 'تسويق'],
          color: '#2a1f19',
          image: '/screenshots/mealify.png',
          url: 'https://malakmohamed119.github.io/Mealify/',
          linkLabel: 'malakmohamed119.github.io/Mealify',
        },
      ],
    },
    testimonials: {
      label: 'العملاء',
      title: 'ماذا قال العملاء؟',
      subtitle: 'آراء بسيطة من تجارب حقيقية بعد تسليم المشاريع.',
      items: [
        {
          quote:
            'دخلنا المشروع بفكرة عامة وبعض الصور فقط. ساعدونا نرتب الأولويات، والتكلفة فضلت واضحة من البداية للنهاية.',
          name: 'كريم حسن',
          role: 'صاحب متجر',
          company: 'تجارة إلكترونية',
        },
        {
          quote:
            'اتفقنا على موعد والتسليم تم في وقته. النظام بسيط وواضح، والفريق بدأ يستخدمه يوميًا بدون تدريب طويل.',
          name: 'أحمد سعد',
          role: 'مشرف',
          company: 'دار رعاية',
        },
        {
          quote:
            'معظم عملائنا يفتحون القائمة من الهاتف. أصبحت الصفحة أسرع وأوضح، وبدأنا نستقبل حجوزات بدل الرسائل المتفرقة.',
          name: 'منى رفعت',
          role: 'مديرة',
          company: 'مطعم',
        },
      ],
    },
    contact: {
      label: 'تواصل',
      title: 'أخبرنا عن مشروعك',
      subtitle: 'اكتب لنا باختصار ماذا تحتاج، والوقت المتوقع، وهل لديك تصميم جاهز أم نبدأ من الصفر. عادة نرد خلال يوم إلى يومي عمل.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      instagram: 'إنستغرام',
      followUs: 'طرق التواصل',
      location: 'الموقع',
      address: 'القاهرة، مصر',
      success: 'تم إرسال رسالتك. سنتواصل معك قريبًا.',
      form: {
        name: 'الاسم',
        namePlaceholder: 'اكتب اسمك',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        phonePlaceholder: '٠١١٢ ٦٧٤ ٦٢٣٢',
        service: 'نوع المشروع',
        servicePlaceholder: 'اختر',
        message: 'الرسالة',
        messagePlaceholder: 'اكتب وصفًا مختصرًا للفكرة أو المشكلة التي تريد حلها...',
        submit: 'إرسال',
        options: [
          { value: 'web', label: 'موقع' },
          { value: 'app', label: 'تطبيق ويب' },
          { value: 'design', label: 'تصميم واجهات' },
          { value: 'backend', label: 'نظام خلفي / واجهة برمجة' },
          { value: 'consult', label: 'استشارة وتخطيط' },
        ],
      },
    },
    footer: {
      quickLinks: 'روابط',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      location: 'القاهرة، مصر',
    },
    whatsapp: {
      label: 'واتساب',
    },
  },
};
