import jsPDF from 'jspdf';

const generateResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Premium Color Palette
  const colors = {
    primary: [30, 58, 138],
    primaryLight: [59, 130, 246],
    accent: [37, 99, 235],
    dark: [17, 24, 39],
    text: [55, 65, 81],
    textLight: [107, 114, 128],
    bgLight: [249, 250, 251],
    bgCard: [243, 244, 246],
    white: [255, 255, 255]
  };

  const pageWidth = 210;
  const pageHeight = 297;
  const leftColWidth = 125;
  const rightColWidth = 70;
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

  // ===== PAGE 1 - HEADER =====
  doc.setFillColor(...colors.primary);
  doc.rect(0, 0, pageWidth, 58, 'F');

  // Name
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.white);
  doc.text('SAURABH MISHRA', 15, 22);

  // Role
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(219, 234, 254);
  doc.text('Operations Manager | Customer Retention Specialist | Team Leader', 15, 30);

  // Line separator
  doc.setDrawColor(255, 255, 255);
  doc.setGState(doc.GState({ opacity: 0.3 }));
  doc.setLineWidth(0.3);
  doc.line(15, 34, 195, 34);
  doc.setGState(doc.GState({ opacity: 1 }));

  // Contact Info
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.white);
  
  doc.text('Email: saurabhmishra33555@gmail.com', 15, 40);
  doc.text('Phone: +91 9867179669 / 9155361659', 15, 45);
  doc.text('Location: Dombivli, India (Remote)', 15, 50);
  doc.text('LinkedIn: linkedin.com/in/saurabh-mishra-004a98383', 105, 40);
  doc.text('Portfolio: bizcontrol.tech', 105, 45);

  leftY = 68;
  rightY = 68;

  // ===== RIGHT SIDEBAR - PAGE 1 =====
  
  // Profile Image
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

  // Key Metrics
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

  rightY += 6;

  // Education
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('EDUCATION', rightColX, rightY);
  rightY += 8;

  addRoundedRect(rightColX, rightY, 60, 28, 2, 'F', colors.white);
  addShadow(rightColX, rightY, 60, 28, 2);
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('Bachelor of Science', rightColX + 3, rightY + 7);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...colors.textLight);
  doc.text('(BSc) - 2015', rightColX + 3, rightY + 12);
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('Higher Secondary', rightColX + 3, rightY + 19);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...colors.textLight);
  doc.text('(HSC) - 2009', rightColX + 3, rightY + 24);

  rightY += 34;

  // Certifications
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('CERTIFICATIONS', rightColX, rightY);
  rightY += 7;

  addRoundedRect(rightColX, rightY, 60, 22, 2, 'F', colors.white);
  addShadow(rightColX, rightY, 60, 22, 2);

  const certs = [
    'Business Strategy',
    'Leadership & Management',
    'Stakeholder Management'
  ];

  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  let certY = rightY + 5;
  certs.forEach((cert) => {
    doc.setFillColor(...colors.primary);
    doc.circle(rightColX + 3, certY, 0.8, 'F');
    doc.setTextColor(...colors.text);
    doc.text(cert, rightColX + 6, certY + 1);
    certY += 6;
  });

  // ===== LEFT COLUMN - PAGE 1 =====

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

  experiences.forEach((exp) => {
    // Calculate card height
    const pointsHeight = exp.points.reduce((total, point) => {
      const lines = doc.splitTextToSize(point, 105);
      return total + (lines.length * 3.5) + 1;
    }, 0);
    const cardHeight = 22 + pointsHeight;

    // Check page break
    if (leftY + cardHeight > 285) {
      doc.addPage();
      leftY = 20;
    }

    // Experience Card
    addShadow(15, leftY, 115, cardHeight, 2);
    addRoundedRect(15, leftY, 115, cardHeight, 2, 'F', colors.white);

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

  // ===== PAGE 2 =====
  doc.addPage();
  
  let page2Y = 20;

  // Core Skills - Full Width on Page 2
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('CORE SKILLS & COMPETENCIES', 15, page2Y);
  page2Y += 2;
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(1.2);
  doc.line(15, page2Y, 65, page2Y);
  page2Y += 10;

  const skillCategories = [
    {
      title: 'Operations & Management',
      skills: ['Operations Management', 'Process Optimization', 'Workflow Coordination', 'Resource Planning']
    },
    {
      title: 'Customer Success',
      skills: ['Customer Retention', 'Account Management', 'Client Engagement', 'Satisfaction Improvement']
    },
    {
      title: 'Leadership & Training',
      skills: ['Team Leadership', 'Performance Coaching', 'Training & Development', 'Talent Management']
    },
    {
      title: 'Communication & Support',
      skills: ['Communication Excellence', 'Virtual Assistance', 'Stakeholder Management', 'Cross-functional Collaboration']
    },
    {
      title: 'Analysis & Reporting',
      skills: ['Analytics & Reporting', 'KPI Tracking', 'Performance Metrics', 'Data-Driven Decisions']
    },
    {
      title: 'Problem Solving',
      skills: ['Problem Resolution', 'Critical Thinking', 'Escalation Handling', 'Decision Making']
    }
  ];

  const colWidth = 90;
  let col1Y = page2Y;
  let col2Y = page2Y;

  skillCategories.forEach((category, idx) => {
    const isLeftCol = idx % 2 === 0;
    const xPos = isLeftCol ? 15 : 110;
    let yPos = isLeftCol ? col1Y : col2Y;

    // Category card
    addShadow(xPos, yPos, colWidth, 32, 2);
    addRoundedRect(xPos, yPos, colWidth, 32, 2, 'F', colors.white);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(category.title, xPos + 3, yPos + 6);

    doc.setDrawColor(...colors.bgCard);
    doc.setLineWidth(0.3);
    doc.line(xPos + 3, yPos + 8, xPos + colWidth - 3, yPos + 8);

    let skillY = yPos + 13;
    category.skills.forEach((skill) => {
      doc.setFillColor(...colors.primary);
      doc.circle(xPos + 4, skillY, 0.7, 'F');
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...colors.text);
      doc.text(skill, xPos + 7, skillY + 1);
      skillY += 4.5;
    });

    if (isLeftCol) {
      col1Y = yPos + 38;
    } else {
      col2Y = yPos + 38;
    }
  });

  page2Y = Math.max(col1Y, col2Y) + 5;

  // Personal Project
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PERSONAL PROJECT', 15, page2Y);
  page2Y += 2;
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(1.2);
  doc.line(15, page2Y, 50, page2Y);
  page2Y += 10;

  addShadow(15, page2Y, 180, 28, 2);
  addRoundedRect(15, page2Y, 180, 28, 2, 'F', colors.bgLight);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('BizControl.tech', 18, page2Y + 7);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...colors.textLight);
  doc.text('Personal Operations Management Platform', 18, page2Y + 12);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.text);
  const projectDesc = 'A self-initiated project exploring better ways of managing tasks, tracking productivity, and improving operational visibility for small teams. This platform demonstrates my understanding of operations challenges and my ability to develop practical solutions.';
  const projectLines = doc.splitTextToSize(projectDesc, 175);
  doc.text(projectLines, 18, page2Y + 17);

  // Footer
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('Professional Portfolio | Available for Remote Work | Open to Leadership & Operations Roles', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save PDF
  doc.save('Saurabh_Mishra_Resume.pdf');
};

export default generateResumePDF;
