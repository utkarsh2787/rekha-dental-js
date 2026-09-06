export type AcademyCourseDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  overview: string;
  curriculum: string[];
  pricing: { course: string; duration: string; fee: string }[];
  learning: { title: string; description: string }[];
  heroImage: string;
};

export const academyCourseGains = [
  "Hands-on clinical exposure",
  "Real patient case discussions",
  "Expert mentorship",
  "Certificate of completion",
  "Practical treatment planning skills",
  "Enhanced clinical confidence",
] as const;

export const academyCourseFaq = [
  {
    question: "Who can enroll in this course?",
    answer: "The course is designed for dental students, interns, and practicing dentists looking to enhance their clinical skills.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer: "Yes, participants receive a certificate of completion upon successfully finishing the course.",
  },
] as const;

export const academyCourseDetails: AcademyCourseDetail[] = [
  {
    slug: "general-dentistry-course",
    title: "General Dentistry Course",
    metaDescription: "Build a strong foundation in modern clinical dentistry.",
    overview: "This comprehensive course covers the essential principles of diagnosis, treatment planning, restorative procedures, preventive dentistry, and patient management. Participants gain practical insights into day-to-day clinical dentistry and develop confidence in managing routine dental cases.",
    curriculum: ["Comprehensive Oral Examination", "Diagnosis & Treatment Planning", "Restorative Procedures", "Preventive Dentistry", "Patient Communication", "Clinical Case Discussions"],
    pricing: [
      { course: "General Dentistry - Short Course", duration: "45 Days", fee: "49,000" },
      { course: "General Dentistry - Long Course", duration: "3 to 6 Months", fee: "99,000" },
    ],
    learning: [
      { title: "Comprehensive Oral Examination and Diagnosis", description: "Learn how to perform a systematic oral examination and identify common dental conditions through clinical evaluation and radiographic interpretation. The course covers diagnostic protocols, case history recording, risk assessment, and methods to arrive at accurate treatment decisions for routine dental cases." },
      { title: "Treatment Planning and Restorative Procedures", description: "Understand the principles of treatment planning and sequencing of dental procedures for optimal patient outcomes. Participants will learn cavity preparation techniques, restorative material selection, direct restorations, and evidence-based approaches for managing common restorative cases in daily practice." },
      { title: "Preventive Dentistry and Patient Management", description: "Develop expertise in preventive care strategies including oral hygiene education, fluoride therapy, scaling recommendations, and long-term maintenance planning. The course also focuses on patient communication, informed consent, treatment acceptance, and building trust for successful clinical practice." },
    ],
    heroImage: "/images/page-heroes/academy--general-dentistry-course.jpeg",
  },
  {
    slug: "basic-implant-course",
    title: "Basic Implant Course",
    metaDescription: "Start your journey into implant dentistry.",
    overview: "An introductory implantology course covering treatment planning, implant placement concepts, instrumentation, and restorative basics for beginners.",
    curriculum: ["Implant Basics", "Case Selection", "Treatment Planning", "Surgical Protocols", "Implant Instruments", "Restorative Concepts"],
    pricing: [{ course: "Basic Implant Course", duration: "3 to 4 Months", fee: "60,000" }],
    learning: [
      { title: "Case Selection and Implant Treatment Planning", description: "Learn the fundamentals of implant case selection, patient evaluation, CBCT interpretation, bone assessment, and treatment planning. The course covers indications and contraindications for implant therapy, implant positioning principles, and methods for selecting the appropriate implant system for different clinical situations." },
      { title: "Surgical Protocol for Implant Placement", description: "Gain practical knowledge of implant surgery including flap design, osteotomy preparation, implant insertion protocols, torque values, and achieving primary stability. Participants will understand the step-by-step workflow involved in single implant placement and immediate post-operative management." },
      { title: "Healing, Prosthetic Considerations, and Complication Management", description: "Understand the biological principles of osseointegration, healing timelines, and prosthetic planning for implant-supported restorations. The course also covers the prevention and management of common surgical complications, post-operative care, and long-term maintenance protocols for successful implant outcomes." },
    ],
    heroImage: "/images/page-heroes/academy--basic-implant-course.jpeg",
  },
  {
    slug: "endodontic-course",
    title: "Endodontic Course",
    metaDescription: "Master modern root canal treatment techniques.",
    overview: "Designed for dentists seeking expertise in endodontics, this course focuses on diagnosis, access cavity preparation, rotary instrumentation, obturation techniques, and management of complex root canal cases.",
    curriculum: ["Endodontic Diagnosis", "Access Preparation", "Rotary Endodontics", "Working Length Determination", "Obturation Techniques", "Management of Difficult Cases"],
    pricing: [
      { course: "Endodontics - Basic Course", duration: "3 Days", fee: "15,000" },
      { course: "Endodontics - Short Course", duration: "15 Days", fee: "30,000" },
      { course: "Endodontics - Long Course", duration: "2 Months", fee: "49,000" },
    ],
    learning: [
      { title: "Diagnosis and Treatment Planning in Endodontics", description: "Learn to diagnose pulpal and periapical pathologies through clinical examination, vitality testing, radiographic interpretation, and case assessment. The course covers differential diagnosis, case selection, treatment planning, and decision-making protocols for successful endodontic therapy." },
      { title: "Access Opening, Working Length and Canal Preparation", description: "Master the fundamental steps of root canal treatment including access cavity preparation, canal identification, working length determination, glide path creation, and biomechanical preparation. Participants will gain practical knowledge of hand files, rotary instrumentation systems, and irrigation protocols used in modern endodontics." },
      { title: "Obturation Techniques and Management of Complex Cases", description: "Understand the principles of three-dimensional obturation and post-endodontic restoration to achieve long-term treatment success. The course also covers the management of curved canals, calcified canals, retreatment cases, procedural errors, and methods to prevent common endodontic complications." },
    ],
    heroImage: "/images/page-heroes/academy--endodontic-course.jpeg",
  },
  {
    slug: "prosthodontics-course",
    title: "Prosthodontics Course",
    metaDescription: "Restore function, aesthetics, and confidence.",
    overview: "Gain practical experience in crowns, bridges, dentures, fixed prosthodontics, and smile rehabilitation. Learn modern restorative workflows and treatment planning strategies.",
    curriculum: ["Crown Preparation", "Bridge Design", "Complete Dentures", "Partial Dentures", "Smile Rehabilitation", "Occlusion Principles"],
    pricing: [
      { course: "Prosthodontics - Veneers, Inlay & Onlay", duration: "3 Days", fee: "20,000" },
      { course: "Prosthodontics - Comprehensive Course", duration: "15 Days", fee: "30,000" },
    ],
    learning: [
      { title: "Principles of Prosthodontic Diagnosis and Treatment Planning", description: "Learn the fundamentals of prosthodontic diagnosis, patient evaluation, occlusal assessment, and treatment planning for partially and completely edentulous patients. The course focuses on selecting appropriate prosthetic solutions based on functional, aesthetic, and biological considerations." },
      { title: "Fixed and Removable Prosthodontic Procedures", description: "Gain in-depth knowledge of tooth preparation principles, impression techniques, temporization, and cementation procedures for crowns and bridges. Participants will also learn the design, fabrication, and clinical management of removable partial dentures and complete dentures." },
      { title: "Occlusion, Aesthetics, and Full Mouth Rehabilitation", description: "Understand the role of occlusion in prosthodontic success and learn techniques for achieving functional and aesthetic rehabilitation. The course covers smile design principles, vertical dimension assessment, occlusal rehabilitation, and multidisciplinary approaches for complex restorative cases." },
    ],
    heroImage: "/images/page-heroes/academy--prosthodontics-course.jpeg",
  },
  {
    slug: "oral-surgery-course",
    title: "Oral Surgery Course",
    metaDescription: "Develop confidence in surgical dental procedures.",
    overview: "This course introduces participants to oral surgical procedures including extractions, flap design, suturing techniques, impaction management, and post-operative care.",
    curriculum: ["Surgical Extractions", "Flap Design", "Suturing Techniques", "Impaction Management", "Post-operative Care", "Minor Oral Surgery"],
    pricing: [{ course: "Oral Surgery", duration: "15 Days", fee: "30,000" }],
    learning: [
      { title: "Patient Evaluation and Surgical Treatment Planning", description: "Learn the principles of case selection, medical history evaluation, clinical examination, and radiographic interpretation for oral surgical procedures. The course covers diagnosis, treatment planning, informed consent, and pre-operative assessment to ensure safe and predictable surgical outcomes." },
      { title: "Exodontia and Minor Oral Surgical Procedures", description: "Gain hands-on knowledge of extraction techniques including forceps and elevator principles, flap design, bone removal, tooth sectioning, and suturing methods. Participants will learn the management of routine extractions, impacted teeth, retained roots, and other minor oral surgical procedures." },
      { title: "Management of Surgical Complications and Post-Operative Care", description: "Understand the prevention and management of common surgical complications such as bleeding, dry socket, root fractures, oro-antral communication, and infection. The course also covers post-operative instructions, pain management, wound healing, and follow-up protocols for successful patient recovery." },
    ],
    heroImage: "/images/page-heroes/academy--oral-surgery-course.jpeg",
  },
  {
    slug: "complete-implant-course",
    title: "Complete Implant Course",
    metaDescription: "Comprehensive implantology from planning to restoration.",
    overview: "An advanced implant training program featuring surgical placement, prosthetic workflows, bone augmentation concepts, and live clinical cases.",
    curriculum: ["Advanced Implant Planning", "Surgical Placement", "Bone Augmentation Concepts", "Immediate Loading", "Prosthetic Workflows", "Live Cases"],
    pricing: [{ course: "Complete Implant Course", duration: "3 to 6 Months", fee: "99,000" }],
    learning: [
      { title: "Advanced Implant Diagnosis and Comprehensive Treatment Planning", description: "Develop expertise in advanced implant treatment planning through CBCT interpretation, bone quality assessment, prosthetically driven implant placement, and management of partially and completely edentulous patients. The course covers single tooth replacements, multiple implants, full arch rehabilitation, and interdisciplinary treatment planning for complex cases." },
      { title: "Advanced Surgical Techniques and Immediate Implant Protocols", description: "Master advanced implant surgical procedures including immediate implant placement, immediate loading protocols, guided implant surgery, flapless implant placement, sinus lift procedures, ridge expansion, and bone grafting techniques. Participants will gain a thorough understanding of surgical decision-making and case selection for predictable outcomes." },
      { title: "Implant Prosthetics, Complications, and Full Mouth Rehabilitation", description: "Learn the principles of implant prosthetics including impression techniques, abutment selection, screw-retained and cement-retained restorations, and occlusal considerations for implant-supported prostheses. The course also covers the management of surgical and prosthetic complications, peri-implant diseases, maintenance protocols, and full mouth implant rehabilitation workflows." },
    ],
    heroImage: "/images/page-heroes/academy--complete-implant-course.jpeg",
  },
  {
    slug: "radiology-cbct-course",
    title: "Radiology (CBCT) Course",
    metaDescription: "Master dental imaging and radiographic diagnosis.",
    overview: "Learn CBCT interpretation, digital imaging workflows, radiographic diagnosis, and treatment planning using modern radiology techniques.",
    curriculum: ["CBCT Interpretation", "Radiographic Anatomy", "Diagnostic Imaging", "Pathology Identification", "Implant Planning", "Digital Workflow Integration"],
    pricing: [{ course: "Radiology Course", duration: "2 Days", fee: "15,000" }],
    learning: [
      { title: "Fundamentals of Dental Radiology and CBCT Imaging", description: "Learn the principles of dental radiology including image formation, radiation physics, exposure parameters, and radiation safety protocols. The course introduces the indications, advantages, and limitations of Cone Beam Computed Tomography (CBCT) and its role in modern dental diagnosis and treatment planning." },
      { title: "CBCT Interpretation and Anatomical Landmark Identification", description: "Develop the skills required to systematically interpret CBCT scans by identifying normal anatomical structures and pathological findings in the maxillofacial region. Participants will learn to evaluate bone quality, sinus anatomy, mandibular canal location, impacted teeth, periapical lesions, and other clinically relevant findings." },
      { title: "Clinical Applications of CBCT in Dentistry", description: "Understand the use of CBCT imaging in implant planning, endodontics, oral surgery, orthodontics, and TMJ assessment. The course covers three-dimensional treatment planning, measurement techniques, diagnostic workflows, and methods for integrating CBCT findings into everyday clinical practice for improved treatment outcomes." },
    ],
    heroImage: "/images/page-heroes/academy--radiology-cbct-course.jpeg",
  },
  {
    slug: "esthetic-dentistry-course",
    title: "Esthetic Dentistry Course",
    metaDescription: "Create beautiful smiles with modern cosmetic dentistry.",
    overview: "Explore smile design principles, veneers, whitening procedures, composite artistry, and minimally invasive cosmetic treatments.",
    curriculum: ["Smile Design", "Composite Bonding", "Teeth Whitening", "Veneers", "Facial Aesthetics", "Case Planning"],
    pricing: [],
    learning: [
      { title: "Principles of Smile Design and Facial Aesthetics", description: "Learn the fundamentals of aesthetic analysis including facial proportions, smile line evaluation, gingival architecture, tooth proportions, and dentofacial harmony. The course covers Digital Smile Design (DSD) concepts and methods for creating treatment plans that balance function with aesthetics." },
      { title: "Direct and Indirect Aesthetic Restorations", description: "Gain practical knowledge of modern aesthetic procedures including composite bonding, diastema closure, tooth reshaping, veneers, and ceramic restorations. Participants will learn material selection, shade matching protocols, layering techniques, and preparation principles for predictable aesthetic outcomes." },
      { title: "Minimally Invasive Cosmetic Dentistry Techniques", description: "Understand contemporary minimally invasive approaches to aesthetic dentistry including enamel preservation, adhesive dentistry, tooth whitening protocols, and conservative smile enhancement procedures. The course also covers case selection, patient communication, and long-term maintenance of aesthetic restorations." },
    ],
    heroImage: "/images/page-heroes/academy--esthetic-dentistry-course.jpeg",
  },
  {
    slug: "orthodontic-course",
    title: "Orthodontic Course",
    metaDescription: "Learn the fundamentals of tooth movement and alignment.",
    overview: "This course covers orthodontic diagnosis, treatment planning, aligners, fixed appliance therapy, and essential biomechanics.",
    curriculum: ["Orthodontic Diagnosis", "Treatment Planning", "Aligners", "Wire Bending", "Fixed Appliances", "Biomechanics"],
    pricing: [{ course: "Orthodontics Course", duration: "3 to 6 Months", fee: "99,000" }],
    learning: [
      { title: "Orthodontic Diagnosis and Treatment Planning", description: "Learn the fundamentals of orthodontic diagnosis through facial analysis, cephalometric evaluation, space analysis, and occlusal assessment. The course covers classification of malocclusions, growth assessment, case selection, and treatment planning for both adolescent and adult patients." },
      { title: "Biomechanics and Appliance Therapy", description: "Develop a thorough understanding of orthodontic biomechanics including force systems, anchorage control, and tooth movement principles. Participants will learn the indications, mechanics, and clinical applications of fixed appliances, removable appliances, self-ligating brackets, and clear aligner therapy." },
      { title: "Management of Orthodontic Cases and Retention Protocols", description: "Understand the clinical management of crowding, spacing, crossbites, deep bites, open bites, and Class II and Class III malocclusions. The course also covers treatment progress monitoring, finishing and detailing, retention strategies, and prevention of relapse to achieve stable long-term outcomes." },
    ],
    heroImage: "/images/page-heroes/academy--orthodontic-course.jpeg",
  },
  {
    slug: "laser-dentistry-course",
    title: "Laser Dentistry Course",
    metaDescription: "Discover the future of minimally invasive dental care.",
    overview: "Gain expertise in dental laser applications for soft tissue procedures, periodontal therapy, pain management, and aesthetic treatments.",
    curriculum: ["Laser Physics", "Soft Tissue Applications", "Periodontal Therapy", "Pain Management", "Aesthetic Procedures", "Clinical Protocols"],
    pricing: [{ course: "Laser Course", duration: "2 Days", fee: "15,000" }],
    learning: [
      { title: "Fundamentals of Laser Physics and Tissue Interaction", description: "Learn the principles of laser technology, wavelength characteristics, and the interaction of laser energy with soft and hard oral tissues. The course covers different dental laser systems, tissue absorption properties, laser safety protocols, and selection criteria for various clinical applications." },
      { title: "Soft Tissue Applications in Laser Dentistry", description: "Develop expertise in soft tissue laser procedures including gingivectomy, frenectomy, operculectomy, depigmentation, crown lengthening, and management of soft tissue lesions. Participants will understand laser settings, technique selection, and methods to achieve precise tissue management with minimal discomfort and bleeding." },
      { title: "Hard Tissue Applications and Advanced Clinical Procedures", description: "Understand the applications of lasers in cavity preparation, caries removal, periodontal therapy, peri-implantitis management, and endodontic procedures. The course also covers post-operative care, complication management, and the integration of laser technology into modern dental practice for minimally invasive treatment outcomes." },
    ],
    heroImage: "/images/page-heroes/academy--laser-dentistry-course.jpeg",
  },
];

export const academyCourseDetailsBySlug = new Map(academyCourseDetails.map((course) => [course.slug, course]));
