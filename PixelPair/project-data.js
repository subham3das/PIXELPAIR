const PROJECTS = [
  {
    id: 'gymkinetic',
    name: 'GymKinetic',
    category: 'landing',
    year: '2026',
    liveUrl: 'https://gymkinetic.netlify.app/',
    imageUrl: 'assets/gym.png',
    accent: 'linear-gradient(135deg,#0d2619,#122f1f)',
    tags: ['Fitness', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    teaser: 'Bold gym landing page with strong CTAs, class discovery blocks, and a modern fitness-first look.',
    summary: 'GymKinetic is a high-energy landing page built to help a gym brand look premium, trustworthy, and action-focused from the very first scroll. The layout pushes visitors toward trial signups, membership interest, and program discovery without making the experience feel heavy or cluttered.',
    about: 'The app presents the gym as a serious, results-driven brand. It balances motivational sections, class highlights, trainer messaging, and conversion-focused calls to action so first-time visitors can quickly understand what the gym offers and why they should join.',
    flow: [
      'Visitors land on a strong hero section that quickly communicates the gym vibe and core offer.',
      'Scrolling introduces memberships, classes, trainer value, and visual trust signals that reduce hesitation.',
      'Primary call-to-action areas keep nudging users toward joining, booking, or starting a fitness journey.'
    ],
    stats: [
      { value: '3.2s', label: 'Quick first impression' },
      { value: '5', label: 'Core sections' },
      { value: '24/7', label: 'Always-on lead capture feel' }
    ],
    reviews: [
      { name: 'Rohit Sharma', role: 'Gym Owner, Pune', quote: 'The website feels strong and premium. New members now understand our plans much faster before they even call us.' },
      { name: 'Neha Verma', role: 'Fitness Coach, Indore', quote: 'The landing flow is practical. Visitors see the offer, trainers, and membership direction without getting lost.' }
    ]
  },
  {
    id: 'physicianclinic',
    name: 'Physician Clinic',
    category: 'healthcare',
    year: '2026',
    liveUrl: 'https://physicianclinic.netlify.app/',
    imageUrl: 'assets/phsician.png',
    accent: 'linear-gradient(135deg,#10283a,#13354a)',
    tags: ['Healthcare', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    teaser: 'Clean clinic website focused on trust, medical clarity, and an easy path toward appointment interest.',
    summary: 'Physician Clinic is a healthcare landing page designed to feel calm, reliable, and easy to navigate for patients and families. It uses clear sectioning and a clean visual structure so visitors can quickly find doctor information, services, and reasons to trust the clinic.',
    about: 'This project is built for clinics that need a polished digital front door. Instead of overwhelming users with too much information at once, it keeps the experience straightforward and supportive, which is especially important in healthcare browsing behaviour.',
    flow: [
      'The first screen introduces the clinic with a reassuring visual style and direct patient-facing message.',
      'Service sections explain the clinic offering in simple language so users can self-identify what they need.',
      'Trust-building content and contact prompts help users move from browsing to appointment intent.'
    ],
    stats: [
      { value: 'Calm', label: 'Brand direction' },
      { value: 'Patient', label: 'Navigation focus' },
      { value: 'Clear', label: 'Service communication' }
    ],
    reviews: [
      { name: 'Dr. Ananya Kulkarni', role: 'Physician, Nagpur', quote: 'Patients told us the site feels easy to understand. That matters a lot for a clinic because people usually visit with urgency.' },
      { name: 'Suresh Pillai', role: 'Clinic Manager, Kochi', quote: 'The design is simple in the best way. It feels professional and not flashy, which suits healthcare perfectly.' }
    ]
  },
  {
    id: 'dentistclinicia',
    name: 'Dentist Clinicia',
    category: 'healthcare',
    year: '2026',
    liveUrl: 'https://dentistclinicia.netlify.app/',
    imageUrl: 'assets/dentist.png',
    accent: 'linear-gradient(135deg,#2d1f10,#4b3212)',
    tags: ['Dental Care', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'CSS3'],
    teaser: 'Modern dental website with a sharper product feel, built for polished presentation and service confidence.',
    summary: 'Dentist Clinicia is a more application-like healthcare experience with a cleaner component structure and a modern frontend stack. It is designed to present dental treatments, clinic trust factors, and patient guidance with a more premium and refined interaction pattern.',
    about: 'Because dental services often involve higher trust and consideration, this project is structured to make treatments feel approachable. The React and TypeScript setup gives the project a more scalable front-end foundation while keeping the visual experience smooth and reassuring.',
    flow: [
      'Users enter through a premium hero section that frames the clinic as modern and dependable.',
      'Treatment information is organised into digestible content blocks so users can compare options easily.',
      'Supporting trust cues and call-to-action areas guide visitors toward booking or contacting the clinic.'
    ],
    stats: [
      { value: 'React', label: 'Component-driven UI' },
      { value: 'TS', label: 'Typed frontend setup' },
      { value: 'Node', label: 'Scalable app base' }
    ],
    reviews: [
      { name: 'Priya Nair', role: 'Practice Coordinator, Bengaluru', quote: 'Patients can understand treatments much more clearly now. The site feels premium without becoming difficult to use.' },
      { name: 'Amit Tandon', role: 'Dental Consultant, Delhi', quote: 'The interface looks current and trustworthy. It gives the clinic a proper modern identity online.' }
    ]
  },
  {
    id: 'aurumhotel',
    name: 'Aurum Hotel',
    category: 'hospitality',
    year: '2026',
    liveUrl: 'https://aurumhotel.netlify.app/',
    imageUrl: 'assets/aurum hotel.png',
    accent: 'linear-gradient(135deg,#2d240d,#5a4310)',
    tags: ['Hospitality', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations', 'Framer', 'MongoDB'],
    teaser: 'Luxury hotel landing page with a polished hospitality feel, cinematic sections, and premium visual pacing.',
    summary: 'Aurum Hotel is crafted to make the property feel aspirational from the first screen. The design language leans into a premium hospitality mood with spacious composition, richer imagery, and a booking-oriented flow that helps the hotel feel memorable rather than generic.',
    about: 'Aurum Hotel uses HTML5, CSS3, and JavaScript for the main experience, with responsive design and animation-driven presentation to make the hotel feel premium on every screen size. Framer-style motion thinking and MongoDB on the data side help the project feel more polished and modern than a standard hotel landing page.',
    flow: [
      'The opening section creates a premium first impression and sells the hotel experience emotionally.',
      'Room, amenity, and hospitality sections build desire while keeping the browsing flow smooth and elegant.',
      'Booking-oriented calls to action appear naturally throughout the journey so interest can turn into enquiry.'
    ],
    stats: [
      { value: 'Luxury', label: 'Visual direction' },
      { value: 'Responsive', label: 'Device-ready layout' },
      { value: 'Premium', label: 'Guest-first storytelling' }
    ],
    reviews: [
      { name: 'Karan Malhotra', role: 'Hotel Operations Lead, Jaipur', quote: 'This one has the wow factor. Guests immediately feel the property is premium just by seeing the website.' },
      { name: 'Sneha Bhatia', role: 'Hospitality Marketer, Mumbai', quote: 'The page flow feels expensive and intentional. It sells the stay experience, not just the room list.' }
    ]
  },
  {
    id: 'clexai',
    name: 'ClexAI',
    category: 'ai',
    year: '2025',
    liveUrl: 'https://clexai.netlify.app/',
    imageUrl: 'assets/clexai.png',
    accent: 'linear-gradient(135deg,#101530,#12204b)',
    tags: ['EdTech', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript', 'HTML', 'CSS3', 'JavaScript', 'AI Assistant'],
    teaser: 'Student exam helper that turns notes and previous papers into a last-minute revision plan with AI support.',
    summary: 'ClexAI is built for students who need help fast before exams. The product helps them upload notes and previous question papers, understand what matters, generate a revision path, and ask follow-up questions through an AI-assisted learning flow.',
    about: 'ClexAI is built with React on the frontend, Node.js on the backend, MongoDB as the database, and Tailwind CSS plus TypeScript for a cleaner and more scalable interface. HTML, CSS3, and JavaScript fundamentals also support the product structure. The best way to use it is simple: upload study material, let the AI detect priorities, then follow the generated plan while using chatbot and Q&A support whenever you get stuck.',
    flow: [
      'Students upload notes, class material, or previous exam papers into the system.',
      'The AI analyses the material, identifies important topics, and suggests a focused revision path.',
      'Users follow the study plan, ask questions through the chatbot, and use Q&A support to clear weak areas quickly.'
    ],
    stats: [
      { value: 'AI', label: 'Guided revision help' },
      { value: 'Upload', label: 'Notes and papers input' },
      { value: 'Plan', label: 'Actionable exam workflow' }
    ],
    reviews: [
      { name: 'Aarav Mehta', role: 'B.Tech Student, Ahmedabad', quote: 'I used it before internals and it helped me stop wasting time. The AI plan made my revision feel much more realistic.' },
      { name: 'Ishita Roy', role: 'College Student, Kolkata', quote: 'The note upload idea is genuinely useful. It feels like someone turned my messy prep into a proper exam checklist.' }
    ]
  },
  {
    id: 'cafetesty',
    name: 'CafeTesty',
    category: 'startup',
    year: '2025',
    liveUrl: 'https://cafetesty.netlify.app/',
    imageUrl: 'assets/cafetesty.png',
    accent: 'linear-gradient(135deg,#2c130d,#4a1f10)',
    tags: ['Startup', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Waitlist Product'],
    teaser: 'Waitlist-led startup product for controlled member onboarding, secret confirmations, and curated access.',
    summary: 'CafeTesty is positioned like an early-stage startup experience where exclusivity is part of the brand. The platform appears to focus on managed member entry, a controlled invitation or exchange flow, and identity confirmation that makes the product feel private and community-driven.',
    about: 'CafeTesty uses HTML, CSS3, JavaScript, and Tailwind CSS on the frontend, with Node.js powering the backend and MongoDB handling the database. The concept is ideal for a startup that wants to build curiosity before full launch. A waiting-list experience, layered with member verification and a more secretive onboarding tone, can make the product feel desirable while still collecting serious early interest.',
    flow: [
      'New users discover the product and join the waiting list to show early interest.',
      'The system uses a selective member confirmation or identity step to control who enters next.',
      'Approved members move deeper into the private community or exchange experience once access is confirmed.'
    ],
    stats: [
      { value: 'Waitlist', label: 'Controlled onboarding' },
      { value: 'Private', label: 'Member-first feel' },
      { value: 'Startup', label: 'Launch-ready concept' }
    ],
    reviews: [
      { name: 'Rhea Kapoor', role: 'Startup Community Lead, Gurugram', quote: 'The exclusivity angle is strong. It feels like a startup that knows how to build curiosity before opening the doors fully.' },
      { name: 'Devansh Jain', role: 'Growth Consultant, Noida', quote: 'The member confirmation idea makes it memorable. It gives the product a sharper identity than a normal signup page.' }
    ]
  }
];

function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id) || PROJECTS[0];
}

function renderProjectActions(project, liveLabel = 'View Live Project', detailLabel = 'View Details') {
  return `
    <div class="project-actions">
      <a href="project-details.html?project=${project.id}" class="project-btn project-btn-secondary" data-page="Project Details">${detailLabel}</a>
      <a href="${project.liveUrl}" class="project-btn project-btn-primary" target="_blank" rel="noreferrer">${liveLabel}</a>
    </div>
  `;
}

function renderWorkShowcase(containerId) {
  const track = document.getElementById(containerId);
  if (!track) return;

  track.innerHTML = PROJECTS.map((project, index) => `
    <div class="work-card" data-index="${index}">
      <div class="work-img">
        <div class="work-img-3d-wrap">
          <div class="work-img-bg" style="background:${project.accent}">
            <img class="work-shot" src="${project.imageUrl}" alt="${project.name} landing page preview" loading="lazy" referrerpolicy="no-referrer">
          </div>
        </div>
        <div class="work-overlay"><span class="work-overlay-text">Open project options</span></div>
      </div>
      <div class="work-info">
        <div class="work-tags">${project.tags.slice(0, 3).map((tag) => `<span class="work-tag">${tag}</span>`).join('')}</div>
        <div class="work-title">${project.name}</div>
        <p class="work-desc">${project.teaser}</p>
        ${renderProjectActions(project)}
      </div>
    </div>
  `).join('');
}

function renderPortfolioGrid(containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((project, index) => `
    <div class="proj-card ${index === 0 ? 'wide' : ''} reveal visible" data-cat="${project.category}">
      <div class="proj-img">
        <div class="proj-img-bg" style="background:${project.accent}">
          <img class="proj-shot" src="${project.imageUrl}" alt="${project.name} landing page preview" loading="lazy" referrerpolicy="no-referrer">
        </div>
        <div class="proj-img-overlay">
          <div class="proj-overlay-links">
            <a href="project-details.html?project=${project.id}" class="proj-link" data-page="Project Details">View Details</a>
            <a href="${project.liveUrl}" class="proj-link" target="_blank" rel="noreferrer">View Live Project</a>
          </div>
        </div>
      </div>
      <div class="proj-info">
        <div class="proj-tags">${project.tags.map((tag) => `<span class="proj-tag">${tag}</span>`).join('')}</div>
        <div class="proj-meta">
          <div class="proj-title">${project.name}</div>
          <div class="proj-year">${project.year}</div>
        </div>
        <p class="proj-desc">${project.summary}</p>
        <div class="proj-stats">
          ${project.stats.map((stat) => `<div><div class="proj-stat-val">${stat.value}</div><div class="proj-stat-label">${stat.label}</div></div>`).join('')}
        </div>
        ${renderProjectActions(project)}
      </div>
    </div>
  `).join('');
}

function renderProjectTestimonials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const allReviews = PROJECTS.flatMap((project) =>
    project.reviews.map((review) => ({ ...review, project: project.name }))
  ).slice(0, 6);

  container.innerHTML = allReviews.map((review, index) => `
    <div class="testi-card reveal visible">
      <div class="testi-quote">"</div>
      <p class="testi-text">${review.quote}</p>
      <div class="testi-author">
        <div class="testi-avatar">${index % 2 === 0 ? 'A' : 'R'}</div>
        <div>
          <div class="testi-stars">★★★★★</div>
          <div class="testi-name">${review.name}</div>
          <div class="testi-role">${review.role} · ${review.project}</div>
        </div>
      </div>
    </div>
  `).join('');
}
