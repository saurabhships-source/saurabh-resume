import jsPDF from 'jspdf';

const generateResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Premium Color Palette
  const colors = {
    primary: [30, 58, 138],      // Navy 600
    primaryLight: [59, 130, 246], // Blue 500
    accent: [37, 99, 235],        // Blue 600
    dark: [17, 24, 39],           // Gray 900
    text: [55, 65, 81],           // Gray 700
    textLight: [107, 114, 128],   // Gray 500
    bgLight: [249, 250, 251],     // Gray 50
    bgCard: [243, 244, 246],      // Gray 100
    white: [255, 255, 255]
  };

  const pageWidth = 210;
  const pageHeight = 297;
  const leftColWidth = 125;
  const rightColWidth = 75;
  const rightColX = 135;
  let leftY = 0;
  let rightY = 0;

  // Helper Functions
  const addRoundedRect = (x, y, w, h, r, style = 'F', color = colors.bgCard) => {
    if (style === 'F' || style === 'FD') {
      doc.setFillColor(...color);
    }
    if (style === 'S' || style === 'FD') {
      doc.setDrawColor(230, 230, 230);
      doc.setLineWidth(0.3);
    }
    doc.roundedRect(x, y, w, h, r, r, style);
  };

  const addShadow = (x, y, w, h, r) => {
    // Subtle shadow effect
    doc.setFillColor(0, 0, 0, 0.05);
    doc.roundedRect(x + 0.5, y + 0.5, w, h, r, r, 'F');
  };

  const addText = (text, x, y, size, style = 'normal', color = colors.text, maxWidth = null) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    doc.setTextColor(...color);
    if (maxWidth) {
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return lines.length * (size * 0.4);
    } else {
      doc.text(text, x, y);
      return size * 0.4;
    }
  };

  const addIcon = (icon, x, y, size, color = colors.primary) => {
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.text(icon, x, y);
  };

  // ===== HEADER SECTION (Full Width) =====
  // Premium gradient-style header
  doc.setFillColor(...colors.primary);
  doc.rect(0, 0, pageWidth, 65, 'F');

  // Add subtle overlay effect
  doc.setFillColor(255, 255, 255, 0.05);
  doc.rect(0, 0, pageWidth, 65, 'F');

  // Name - Large and Bold
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.white);
  doc.text('SAURABH MISHRA', 15, 22);

  // Role/Title
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(219, 234, 254); // Light blue
  doc.text('Operations Manager | Customer Retention Specialist | Team Leader', 15, 30);

  // Horizontal line separator
  doc.setDrawColor(255, 255, 255, 0.3);
  doc.setLineWidth(0.3);
  doc.line(15, 34, 195, 34);

  // Contact Information with Icons
  const contactInfo = [
    { icon: '📧', text: 'saurabhmishra33555@gmail.com', x: 15 },
    { icon: '📱', text: '+91 9867179669 / 9155361659', x: 90 },
    { icon: '📍', text: 'Dombivli, India (Remote)', x: 15 },
    { icon: '🔗', text: 'linkedin.com/in/saurabh-mishra-004a98383', x: 90 }
  ];

  doc.setFontSize(9);
  doc.setTextColor(...colors.white);
  contactInfo.forEach((item, idx) => {
    const yPos = 42 + (idx % 2) * 6;
    doc.text(item.icon, item.x, yPos);
    doc.text(item.text, item.x + 5, yPos);
  });

  // Portfolio link
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('🌐 bizcontrol.tech', 15, 54);

  leftY = 75;
  rightY = 75;

  // ===== RIGHT SIDEBAR =====
  
  // Profile Image Placeholder (with border)
  addShadow(rightColX, rightY, 60, 60, 3);
  doc.setFillColor(...colors.bgCard);
  doc.roundedRect(rightColX, rightY, 60, 60, 3, 3, 'F');
  doc.setFillColor(...colors.primary);
  doc.setFontSize(10);
  doc.setTextColor(...colors.textLight);
  doc.text('Professional', rightColX + 30, rightY + 25, { align: 'center' });
  doc.text('Photo', rightColX + 30, rightY + 32, { align: 'center' });
  doc.text('(Upload on website)', rightColX + 30, rightY + 39, { align: 'center' });
  rightY += 68;

  // Key Metrics Cards
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('KEY METRICS', rightColX, rightY);
  rightY += 8;

  const metrics = [
    { icon: '📅', value: '6+', label: 'Years Exp.' },
    { icon: '👥', value: '30+', label: 'Team Members' },
    { icon: '📈', value: '35%', label: 'Improvements' },
    { icon: '⭐', value: '94%', label: 'Satisfaction' }
  ];

  metrics.forEach((metric) => {
    addShadow(rightColX, rightY, 60, 20, 2);
    addRoundedRect(rightColX, rightY, 60, 20, 2, 'F', colors.white);
    
    doc.setFontSize(9);
    doc.text(metric.icon, rightColX + 3, rightY + 7);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(metric.value, rightColX + 30, rightY + 9, { align: 'center' });
    
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textLight);
    doc.text(metric.label, rightColX + 30, rightY + 15, { align: 'center' });
    
    rightY += 23;
  });

  rightY += 5;

  // Skills Section
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('CORE SKILLS', rightColX, rightY);
  rightY += 8;

  const skills = [
    'Operations',
    'Retention',
    'Leadership',
    'Training',
    'Analytics',
    'Process Opt.',
    'Virtual Assist.',
    'Communication',
    'Problem Solving',
    'Team Coord.'
  ];

  skills.forEach((skill) => {
    const textWidth = doc.getTextWidth(skill);
    addRoundedRect(rightColX, rightY - 4, textWidth + 5, 6, 1.5, 'F', colors.bgCard);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.text);
    doc.text(skill, rightColX + 2.5, rightY);
    rightY += 8;
  });

  rightY += 5;

  // Education Section
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('EDUCATION', rightColX, rightY);
  rightY += 8;

  addRoundedRect(rightColX, rightY, 60, 22, 2, 'F', colors.white);
  addShadow(rightColX, rightY, 60, 22, 2);
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('BSc', rightColX + 3, rightY + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('2015', rightColX + 3, rightY + 10);
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('HSC', rightColX + 3, rightY + 16);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('2009', rightColX + 3, rightY + 20);

  rightY += 28;

  // Certifications
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('CERTIFICATIONS', rightColX, rightY);
  rightY += 6;

  const certs = [
    'Business Strategy',
    'Leadership Diploma',
    'Stakeholder Mgmt'
  ];

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  certs.forEach((cert) => {
    doc.setTextColor(...colors.text);
    doc.text('✓', rightColX, rightY + 3);
    doc.text(cert, rightColX + 3, rightY + 3);
    rightY += 5;
  });

  // ===== LEFT MAIN CONTENT =====

  // Professional Summary
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PROFESSIONAL SUMMARY', 15, leftY);
  leftY += 2;
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(1);
  doc.line(15, leftY, 40, leftY);
  leftY += 8;

  addRoundedRect(15, leftY - 2, 115, 22, 2, 'F', colors.bgLight);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.text);
  const summary = 'I work on improving operations, managing teams, and handling customer retention challenges in fast-paced environments. I have 6+ years of experience across TCS (Citi Bank), Concentrix (JP Morgan Chase), and Accenture, where I have supported process improvements, team coordination, and customer satisfaction initiatives.';
  const summaryLines = doc.splitTextToSize(summary, 110);
  doc.text(summaryLines, 17, leftY + 3);
  leftY += 26;

  // Professional Experience
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PROFESSIONAL EXPERIENCE', 15, leftY);
  leftY += 2;
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(1);
  doc.line(15, leftY, 60, leftY);
  leftY += 8;

  const experiences = [
    {
      company: 'TCS (Citi Bank)',
      role: 'Account Retention Manager',
      period: 'Jul 2024 - Jan 2026',
      location: 'Remote',
      points: [
        'Work on customer retention strategies by identifying at-risk accounts',
        'Handle customer lifecycle management and relationship building',
        'Coordinate with cross-functional teams to improve service delivery'
      ]
    },
    {
      company: 'Concentrix (JP Morgan Chase)',
      role: 'Retention Manager',
      period: 'Mar 2024 - Jul 2024',
      location: 'Remote',
      points: [
        'Managed high-priority escalations with 94% satisfaction rate',
        'Worked on resolving complex account issues with timely solutions',
        'Supported retention efforts through process improvements'
      ]
    },
    {
      company: 'Accenture (Verizon & Facebook)',
      role: 'Client Support Associate & Trainer',
      period: 'Mar 2019 - Feb 2024',
      location: 'Mumbai',
      points: [
        'Provided multi-channel customer support for client accounts',
        'Trained new team members, reducing onboarding time',
        'Maintained quality scores above 95% consistently'
      ]
    },
    {
      company: 'Vidyalankar',
      role: 'Branch Head',
      period: 'Dec 2018 - Mar 2019',
      location: 'Mumbai',
      points: [
        'Managed daily branch operations and team supervision',
        'Oversaw operational activities and staff management'
      ]
    },
    {
      company: 'Karvy Digikonnect (Bharti AXA)',
      role: 'Team Leader',
      period: 'Aug 2018 - Nov 2018',
      location: 'Mumbai',
      points: [
        'Led team of 30 associates with performance tracking',
        'Conducted coaching sessions and performance reviews'
      ]
    }
  ];

  experiences.forEach((exp, idx) => {
    // Check if we need a new page
    if (leftY > 260) {
      doc.addPage();
      leftY = 20;
      
      // Continue right sidebar on new page if needed
      if (rightY > 260) {
        rightY = 20;
      }
    }

    // Experience Card
    addShadow(15, leftY, 115, 'auto', 2);
    addRoundedRect(15, leftY, 115, 40, 2, 'F', colors.white);

    // Company & Role
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.dark);
    doc.text(exp.role, 18, leftY + 6);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(exp.company, 18, leftY + 11);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textLight);
    doc.text(`${exp.period} | ${exp.location}`, 18, leftY + 16);

    // Separator line
    doc.setDrawColor(...colors.bgCard);
    doc.setLineWidth(0.3);
    doc.line(18, leftY + 18, 127, leftY + 18);

    let pointY = leftY + 23;
    exp.points.forEach((point) => {
      doc.setFillColor(...colors.primary);
      doc.circle(19, pointY - 1, 0.8, 'F');
      doc.setFontSize(8);
      doc.setTextColor(...colors.text);
      const lines = doc.splitTextToSize(point, 105);
      doc.text(lines, 21, pointY);
      pointY += lines.length * 3.5;
    });

    leftY += 45;
  });

  // Personal Project
  if (leftY < 250) {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text('PERSONAL PROJECT', 15, leftY);
    leftY += 2;
    doc.setDrawColor(...colors.primary);
    doc.setLineWidth(1);
    doc.line(15, leftY, 47, leftY);
    leftY += 8;

    addShadow(15, leftY, 115, 25, 2);
    addRoundedRect(15, leftY, 115, 25, 2, 'F', colors.bgLight);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text('🚀 BizControl.tech', 18, leftY + 6);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.text);
    const projectDesc = 'Personal operations management project exploring better ways of managing tasks, tracking productivity, and improving operational visibility for small teams.';
    const projectLines = doc.splitTextToSize(projectDesc, 110);
    doc.text(projectLines, 18, leftY + 12);
  }

  // Footer
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('Generated from portfolio website | Available for Remote Work | Open to Leadership & Operations Roles', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save PDF
  doc.save('Saurabh_Mishra_Resume.pdf');
};

export default generateResumePDF;
