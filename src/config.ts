export const config = {
    developer: {
        name: "Ali",
        fullName: "Ali Moavia",
        title: "Cybersecurity | Digital Forensics | AI Tool Developer",
        description: "Results-driven Cybersecurity Specialist with expertise in digital forensics, penetration testing, and vulnerability assessment. Recent graduate with hands-on experience in forensic analysis, ethical hacking, and security consulting."
    },
    social: {
        github: "alimoavia254",
        email: "alimoavia80@gmail.com",
        location: "Multan, Punjab, Pakistan",
        phone: "03254139900"
    },
    about: {
        title: "About Me",
        description: "I am a Cybersecurity Specialist from Multan, Pakistan, specializing in digital forensics, penetration testing, and vulnerability assessment. With hands-on experience in forensic analysis, ethical hacking, and security consulting, I develop forensic tools and conduct comprehensive security assessments. I have published research and practical experience in law enforcement cyber operations and security training. Proficient in industry-standard tools including FTK, Belkasoft, Burp Suite, Metasploit, and Wireshark."
    },
    experiences: [
        {
            position: "Cybersecurity Consultant Trainee",
            company: "Professional Freelancing Training Program (PFTP)",
            period: "June 2025 – December 2025",
            location: "Lahore, Punjab",
            description: "Conducted comprehensive reconnaissance and vulnerability scanning on web applications and network infrastructure. Performed hands-on VAPT exercises, identifying high-risk vulnerabilities including SQL injection, XSS, and authentication flaws.",
            responsibilities: [
                "Conducted comprehensive reconnaissance and vulnerability scanning on web applications and network infrastructure",
                "Performed hands-on Vulnerability Assessment and Penetration Testing (VAPT) exercises",
                "Delivered detailed VAPT and Security Assessment Reports with actionable remediation recommendations",
                "Utilized industry-standard penetration testing methodologies and tools including Burp Suite, Metasploit, Nmap, and OWASP Testing Guide"
            ],
            technologies: ["Burp Suite", "Metasploit", "Nmap", "OWASP", "VAPT", "Security Assessment"]
        },
        {
            position: "Digital Forensics Intern",
            company: "Punjab Police (Cyber Wing)",
            period: "January 2025 – February 2025",
            location: "Bahawalpur, Punjab",
            description: "Assisted in digital evidence collection, preservation, and chain-of-custody documentation for cybercrime investigations. Supported forensic triage operations using FTK, Autopsy, and other forensic tools.",
            responsibilities: [
                "Assisted in digital evidence collection, preservation, and chain-of-custody documentation for cybercrime investigations",
                "Supported forensic triage operations using FTK, Autopsy, and other forensic tools to extract and analyze digital artifacts",
                "Prepared preliminary forensic reports documenting findings and evidence for law enforcement case files",
                "Gained practical experience in real-world cybercrime investigation procedures and digital evidence handling protocols"
            ],
            technologies: ["FTK", "Autopsy", "Digital Forensics", "Chain of Custody", "Evidence Collection"]
        },
        {
            position: "Teaching Assistant (Cybersecurity)",
            company: "NAVTTC Bahawalpur",
            period: "July 2024 – September 2024",
            location: "Bahawalpur, Punjab",
            description: "Supported lead instructor in delivering theoretical and practical cybersecurity training covering Linux fundamentals, network security, and forensic analysis.",
            responsibilities: [
                "Supported lead instructor in delivering theoretical and practical cybersecurity training covering Linux fundamentals, network security, and forensic analysis",
                "Designed and supervised hands-on laboratory exercises for students to practice security tools and techniques",
                "Evaluated student performance through grading assignments, quizzes, and technical reports, providing constructive feedback"
            ],
            technologies: ["Linux", "Network Security", "Forensic Analysis", "Security Training", "Teaching"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "ADF-Tool (Advanced Digital Forensic Tool)",
            category: "Digital Forensics / ML",
            technologies: "Python 3.11+, SQLite3, Winreg, Scikit-learn, Pandas, Matplotlib, Seaborn, Hashlib, Multi-threading, Tkinter",
            image: "/images/placeholder.webp",
            description: "Enterprise-grade forensic acquisition framework that automates collection of over 20 artifact classes. Integrates anti-forensic detection, machine learning-based anomaly identification, and cryptographic integrity verification. Features browser artifacts extraction, USB history tracking, network forensics, memory artifacts, and ML anomaly detection using Isolation Forest.",
            link: "https://alimoavia254.github.io/Portable-forensic-analyst-tool/",
            published: true,
            paper: "Portable Forensic Analysis Tool for Collecting Artifacts from Browsers and USB - Published in Spectrum of Engineering Sciences, August 2025"
        },
        {
            id: 2,
            title: "AMN-DOS (Advanced Multi-layer Network Assessment Tool)",
            category: "Network Security / Penetration Testing",
            technologies: "Python 3.11+, Raw Sockets, Multi-threading, Header Randomization, Slowloris Technique",
            image: "/images/placeholder.webp",
            description: "Proof-of-concept stress tool combining three distinct attack vectors: HTTP flood, Slowloris, and TCP SYN flood. Built for educational and red team assessments, demonstrating advanced socket handling, application-layer evasion, and resource exhaustion patterns.",
            link: "https://alimoavia254.github.io/AMN_DOS/",
            published: true
        },
        {
            id: 3,
            title: "SpoofHawk: Email Spoofing Detection Tool",
            category: "Security / ML",
            technologies: "Python, Random Forest, SPF/DKIM Validation, Tkinter, Machine Learning",
            image: "/images/placeholder.webp",
            description: "Python-based email spoofing detection system with Tkinter GUI, employing Random Forest machine learning algorithm for pattern recognition. Implements SPF and DKIM header validation to verify email authenticity and detect spoofing attempts in real-time. Achieved 20% improvement in detection accuracy through synthetic data generation and model optimization."
        },
        {
            id: 4,
            title: "Portable Forensic Analysis Tool (PFAT)",
            category: "Digital Forensics / Research",
            technologies: "Python, Tkinter, Machine Learning, Browser Artifacts, USB History, SQLite",
            image: "/images/placeholder.webp",
            description: "Python-based forensic tool with Tkinter GUI that automates browser history and USB artifact collection for rapid digital forensics triage. Integrated basic machine learning algorithms for intelligent artifact prioritization, reducing manual analysis time by approximately 40%. Published research paper in Spectrum of Engineering Sciences."
        }
    ],
    contact: {
        email: "alimoavia80@gmail.com",
        phone: "03254139900",
        github: "https://github.com/alimoavia254",
        linkedin: "https://linkedin.com/in/ali-moavia",
        portfolio: "https://alimoavia254.github.io/Portfolio",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "CYBERSECURITY SPECIALIST",
            description: "Digital Forensics & Penetration Testing",
            details: "Expert in digital forensics, penetration testing, and vulnerability assessment. Proficient in forensic analysis tools (FTK, Belkasoft, Autopsy), penetration testing frameworks (Burp Suite, Metasploit), and security assessment methodologies. Published researcher with practical experience in law enforcement cyber operations.",
            tools: ["FTK Imager", "Belkasoft", "Burp Suite", "Metasploit", "Wireshark", "Nmap", "OWASP", "Autopsy", "Digital Forensics", "VAPT"]
        },
        design: {
            title: "SECURITY TOOL DEVELOPER",
            description: "Custom Python-based security tools & automation",
            details: "Developing custom Python-based security tools for forensic analysis, threat detection, and automated security testing. Building secure web applications and cross-platform desktop applications with modern frameworks and best practices for application security.",
            tools: ["Python", "Tkinter", "Machine Learning", "SQLite", "React", "Node.js", "Security Automation", "Tool Development", "Web Development"]
        }
    },
    services: [
        {
            id: 1,
            title: "Penetration Testing",
            description: "Comprehensive vulnerability assessment and penetration testing to identify security weaknesses.",
            icon: "🔒",
            details: "Full-spectrum security testing including web application, network infrastructure, and system-level assessments using industry-standard tools and methodologies."
        },
        {
            id: 2,
            title: "Digital Forensics",
            description: "Expert forensic analysis, evidence preservation, and incident response for cybercrime investigations.",
            icon: "🔍",
            details: "Digital evidence collection, preservation, chain-of-custody documentation, and comprehensive forensic analysis using FTK, Belkasoft, Autopsy, and custom tools."
        },
        {
            id: 3,
            title: "Security Consulting",
            description: "Strategic security assessment and recommendations aligned with OWASP and NIST frameworks.",
            icon: "🛡️",
            details: "Security architecture review, risk assessment, compliance evaluation, and strategic recommendations based on OWASP Top 10, NIST Cybersecurity Framework, and MITRE ATT&CK."
        },
        {
            id: 4,
            title: "Security Tool Development",
            description: "Custom Python-based security tools for forensic analysis, threat detection, and automated security testing.",
            icon: "⚙️",
            details: "Development of specialized security tools including forensic acquisition frameworks, ML-based anomaly detection systems, and automated security testing utilities."
        },
        {
            id: 5,
            title: "Web Development",
            description: "Building secure, scalable web applications with modern frameworks and best practices for application security.",
            icon: "🌐",
            details: "Full-stack web development with security-first approach, implementing secure coding practices, authentication mechanisms, and security testing throughout the development lifecycle."
        },
        {
            id: 6,
            title: "Custom Desktop App Development",
            description: "Developing cross-platform desktop applications with secure architecture, optimized performance, and professional user interfaces.",
            icon: "💻",
            details: "Cross-platform desktop application development with focus on security, performance optimization, and professional UI/UX design using modern frameworks."
        }
    ],
    education: {
        degree: "Bachelor of Science in Cybersecurity & Digital Forensics",
        university: "Islamia University of Bahawalpur (IUB)",
        period: "2021 – 2025",
        coursework: ["Cybersecurity", "Digital Forensics", "Network Security", "Cryptography", "Incident Response", "Malware Analysis"],
        finalProject: "Portable Forensic Analysis Tool (PFAT) - Published in peer-reviewed journal"
    },
    certifications: [
        {
            name: "Ethical Hacking",
            issuer: "EC-Council",
            date: "July 2023",
            credentialId: "235187"
        },
        {
            name: "Digital Forensics Examiner",
            issuer: "Alison",
            date: "February 2024",
            credentialId: "4791-31673933"
        },
        {
            name: "Basic Networking for CCNP ROUTE (300-101)",
            issuer: "Cisco",
            date: "February 2023"
        },
        {
            name: "Front-End Web Developer",
            issuer: "Sololearn",
            date: "May 2020",
            credentialId: "CT-LMMCBEF9"
        }
    ]
};


