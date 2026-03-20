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
    doc.setFillColor(200, 200, 200);
    doc.setGState(doc.GState({ opacity: 0.15 }));
    doc.roundedRect(x + 0.8, y + 0.8, w, h, r, r, 'F');
    doc.setGState(doc.GState({ opacity: 1 }));
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

  // ===== HEADER SECTION (Full Width) =====
  doc.setFillColor(...colors.primary);
  doc.rect(0, 0, pageWidth, 60, 'F');

  // Name - Large and Bold
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.white);
  doc.text('SAURABH MISHRA', 15, 22);

  // Role/Title
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(219, 234, 254);
  doc.text('Operations Manager | Customer Retention Specialist | Team Leader', 15, 30);

  // Horizontal line separator
  doc.setDrawColor(255, 255, 255);
  doc.setGState(doc.GState({ opacity: 0.3 }));
  doc.setLineWidth(0.3);
  doc.line(15, 34, 195, 34);
  doc.setGState(doc.GState({ opacity: 1 }));

  // Contact Information - Clean text only
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.white);
  
  doc.text('Email:', 15, 40);
  doc.text('saurabhmishra33555@gmail.com', 26, 40);
  
  doc.text('Phone:', 90, 40);
  doc.text('+91 9867179669 / 9155361659', 102, 40);
  
  doc.text('Location:', 15, 45);
  doc.text('Dombivli, India (Remote)', 31, 45);
  
  doc.text('LinkedIn:', 90, 45);
  doc.text('linkedin.com/in/saurabh-mishra-004a98383', 105, 45);
  
  doc.text('Portfolio:', 15, 50);
  doc.text('bizcontrol.tech', 31, 50);

  leftY = 70;
  rightY = 70;

  // ===== RIGHT SIDEBAR =====
  
  // Profile Image Placeholder
  addShadow(rightColX, rightY, 60, 60, 3);
  doc.setFillColor(240, 240, 245);
  doc.roundedRect(rightColX, rightY, 60, 60, 3, 3, 'F');
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(0.5);
  doc.roundedRect(rightColX, rightY, 60, 60, 3, 3, 'S');
  
  doc.setFontSize(9);
  doc.setTextColor(...colors.textLight);
  doc.text('Professional', rightColX + 30, rightY + 27, { align: 'center' });
  doc.text('Photo', rightColX + 30, rightY + 33, { align: 'center' });
  rightY += 68;

  // Key Metrics Cards
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('KEY METRICS', rightColX, rightY);
  rightY += 8;

  const metrics = [
    { value: '6+', label: 'Years Experience' },
    { value: '30+', label: 'Team Members' },
    { value: '35%', label: 'Process Improvements' },
    { value: '94%', label: 'Client Satisfaction' }
  ];

  metrics.forEach((metric) => {
    addShadow(rightColX, rightY, 60, 18, 2);
    addRoundedRect(rightColX, rightY, 60, 18, 2, 'F', colors.white);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(metric.value, rightColX + 30, rightY + 8, { align: 'center' });
    
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textLight);
    doc.text(metric.label, rightColX + 30, rightY + 13.5, { align: 'center' });
    
    rightY += 21;
  });

  rightY += 5;

  // Skills Section
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('CORE SKILLS', rightColX, rightY);
  rightY += 8;

  const skills = [
    'Operations Management',
    'Customer Retention',
    'Team Leadership',
    'Training & Development',
    'Analytics & Reporting',
    'Process Optimization',
    'Virtual Assistance',
    'Communication',
    'Problem Solving',
    'Team Coordination'
  ];

  skills.forEach((skill) => {
    const textWidth = doc.getTextWidth(skill);
    addRoundedRect(rightColX, rightY - 4, Math.min(textWidth + 5, 58), 6, 1.5, 'F', colors.bgCard);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.text);
    
    if (textWidth + 5 > 58) {
      const lines = doc.splitTextToSize(skill, 56);
      doc.text(lines, rightColX + 2.5, rightY);
      rightY += (lines.length * 5) + 2;
    } else {
      doc.text(skill, rightColX + 2.5, rightY);
      rightY += 7;
    }
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
  doc.text('Bachelor of Science', rightColX + 3, rightY + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('2015', rightColX + 3, rightY + 10);
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('Higher Secondary', rightColX + 3, rightY + 16);
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
    'Leadership & Mgmt',
    'Stakeholder Mgmt'
  ];

  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  certs.forEach((cert) => {
    doc.setFillColor(...colors.primary);
    doc.circle(rightColX + 1, rightY + 1.5, 0.8, 'F');
    doc.setTextColor(...colors.text);
    doc.text(cert, rightColX + 4, rightY + 3);
    rightY += 5.5;
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

  addRoundedRect(15, leftY - 2, 115, 24, 2, 'F', colors.bgLight);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.text);
  const summary = 'I work on improving operations, managing teams, and handling customer retention challenges in fast-paced environments. I have 6+ years of experience across TCS (Citi Bank), Concentrix (JP Morgan Chase), and Accenture, where I have supported process improvements, team coordination, and customer satisfaction initiatives.';
  const summaryLines = doc.splitTextToSize(summary, 110);
  doc.text(summaryLines, 17, leftY + 3);
  leftY += 28;

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
    if (leftY > 250) {
      doc.addPage();
      leftY = 20;
    }

    // Calculate card height
    const pointsHeight = exp.points.reduce((total, point) => {
      const lines = doc.splitTextToSize(point, 105);
      return total + (lines.length * 3.5) + 1;
    }, 0);
    const cardHeight = 22 + pointsHeight;

    // Experience Card
    addShadow(15, leftY, 115, cardHeight, 2);
    addRoundedRect(15, leftY, 115, cardHeight, 2, 'F', colors.white);

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
      pointY += lines.length * 3.5 + 1;
    });

    leftY += cardHeight + 6;
  });

  // Personal Project
  if (leftY < 240) {
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text('PERSONAL PROJECT', 15, leftY);
    leftY += 2;
    doc.setDrawColor(...colors.primary);
    doc.setLineWidth(1);
    doc.line(15, leftY, 47, leftY);
    leftY += 8;

    addShadow(15, leftY, 115, 22, 2);
    addRoundedRect(15, leftY, 115, 22, 2, 'F', colors.bgLight);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text('BizControl.tech', 18, leftY + 6);

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.text);
    const projectDesc = 'Personal operations management project exploring better ways of managing tasks, tracking productivity, and improving operational visibility for small teams.';
    const projectLines = doc.splitTextToSize(projectDesc, 110);
    doc.text(projectLines, 18, leftY + 11);
  }

  // Footer
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('Generated from professional portfolio | Available for Remote Work | Open to Leadership & Operations Roles', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save PDF
  doc.save('Saurabh_Mishra_Resume.pdf');
};

export default generateResumePDF;
