import jsPDF from 'jspdf';

const generateResumePDF = async () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Function to convert image URL to base64
  const getImageBase64 = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error loading image:', error);
      return null;
    }
  };

  // Load professional photo
  const photoUrl = 'https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png';
  const photoBase64 = await getImageBase64(photoUrl);

  // Premium Color Palette
  const colors = {
    primary: [30, 58, 138],
    primaryLight: [59, 130, 246],
    dark: [17, 24, 39],
    text: [55, 65, 81],
    textLight: [107, 114, 128],
    bgLight: [249, 250, 251],
    bgCard: [243, 244, 246],
    white: [255, 255, 255]
  };

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const leftColWidth = 125;
  const rightColX = 135;

  // Helper Functions
  const addRoundedRect = (x, y, w, h, r, style = 'F', color = colors.bgCard) => {
    if (style === 'F' || style === 'FD') {
      doc.setFillColor(...color);
    }
    doc.roundedRect(x, y, w, h, r, r, style);
  };

  const addShadow = (x, y, w, h, r) => {
    doc.setFillColor(200, 200, 200);
    doc.setGState(doc.GState({ opacity: 0.15 }));
    doc.roundedRect(x + 0.8, y + 0.8, w, h, r, r, 'F');
    doc.setGState(doc.GState({ opacity: 1 }));
  };

  // ========== PAGE 1 ==========
  
  // Premium Header with gradient effect
  // Dark navy gradient background
  doc.setFillColor(30, 58, 138); // Primary navy
  doc.rect(0, 0, pageWidth, 52, 'F');
  
  // Add subtle overlay for depth
  doc.setFillColor(37, 99, 235); // Lighter blue
  doc.setGState(doc.GState({ opacity: 0.1 }));
  doc.rect(0, 0, pageWidth, 52, 'F');
  doc.setGState(doc.GState({ opacity: 1 }));
  
  // Decorative accent line at bottom
  doc.setFillColor(59, 130, 246); // Blue 500
  doc.rect(0, 51, pageWidth, 1, 'F');

  // Name - Large, bold, with letter spacing effect
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('SAURABH MISHRA', margin, 20);

  // Professional tagline - elegant subtitle
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(219, 234, 254); // Light blue
  doc.text('Operations Manager | Customer Retention Specialist | Team Leader', margin, 28);

  // Elegant separator line with gradient effect
  doc.setDrawColor(255, 255, 255);
  doc.setGState(doc.GState({ opacity: 0.4 }));
  doc.setLineWidth(0.4);
  doc.line(margin, 32, 195, 32);
  doc.setGState(doc.GState({ opacity: 1 }));

  // Contact info with icons-style layout
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255);
  
  // Email with elegant spacing
  doc.text('Email:', margin, 39);
  doc.setFont('helvetica', 'normal');
  doc.text('saurabhmishra33555@gmail.com', margin + 13, 39);
  
  // Phone with elegant spacing
  doc.text('Phone:', margin, 45);
  doc.text('+91 9867179669 / 9155361659', margin + 13, 45);

  let leftY = 60;
  let rightY = 60;

  // ===== RIGHT SIDEBAR - PAGE 1 =====
  
  // Key Metrics (no photo section)
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('KEY METRICS', rightColX, rightY);
  rightY += 7;

  const metrics = [
    { value: '6+', label: 'Years' },
    { value: '30+', label: 'Team' },
    { value: '35%', label: 'Improved' },
    { value: '94%', label: 'CSAT' }
  ];

  metrics.forEach((metric) => {
    addShadow(rightColX, rightY, 60, 16, 2);
    addRoundedRect(rightColX, rightY, 60, 16, 2, 'F', colors.white);
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(metric.value, rightColX + 30, rightY + 7, { align: 'center' });
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textLight);
    doc.text(metric.label, rightColX + 30, rightY + 12, { align: 'center' });
    rightY += 19;
  });

  rightY += 4;

  // Education
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('EDUCATION', rightColX, rightY);
  rightY += 7;
  addRoundedRect(rightColX, rightY, 60, 24, 2, 'F', colors.white);
  addShadow(rightColX, rightY, 60, 24, 2);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('Bachelor of Science', rightColX + 3, rightY + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...colors.textLight);
  doc.text('2015', rightColX + 3, rightY + 11);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('Higher Secondary', rightColX + 3, rightY + 17);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...colors.textLight);
  doc.text('2009', rightColX + 3, rightY + 21);
  rightY += 28;

  // Certifications
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.dark);
  doc.text('CERTIFICATIONS', rightColX, rightY);
  rightY += 6;
  addRoundedRect(rightColX, rightY, 60, 20, 2, 'F', colors.white);
  addShadow(rightColX, rightY, 60, 20, 2);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  const certs = ['Business Strategy', 'Leadership & Mgmt', 'Stakeholder Mgmt'];
  let certY = rightY + 5;
  certs.forEach((cert) => {
    doc.setFillColor(...colors.primary);
    doc.circle(rightColX + 3, certY, 0.7, 'F');
    doc.setTextColor(...colors.text);
    doc.text(cert, rightColX + 6, certY + 1);
    certY += 5.5;
  });

  // Left Column - Page 1
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PROFESSIONAL SUMMARY', margin, leftY);
  leftY += 2;
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(1);
  doc.line(margin, leftY, 40, leftY);
  leftY += 8;

  addRoundedRect(margin, leftY - 2, 115, 22, 2, 'F', colors.bgLight);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.text);
  const summary = 'I work on improving operations, managing teams, and handling customer retention challenges in fast-paced environments. I have 6+ years of experience across TCS (Citi Bank), Concentrix (JP Morgan Chase), and Accenture, where I have supported process improvements, team coordination, and customer satisfaction initiatives.';
  const summaryLines = doc.splitTextToSize(summary, 110);
  doc.text(summaryLines, margin + 2, leftY + 3);
  leftY += 26;

  // Professional Experience
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PROFESSIONAL EXPERIENCE', margin, leftY);
  leftY += 2;
  doc.setLineWidth(1);
  doc.line(margin, leftY, 60, leftY);
  leftY += 8;

  const experiences = [
    {
      company: 'TCS (Citi Bank)',
      role: 'Account Retention Manager',
      period: 'Jul 2024 - Jan 2026',
      location: 'Remote',
      points: [
        'Work on customer retention strategies by identifying at-risk accounts',
        'Handle customer lifecycle management and relationship building'
      ]
    },
    {
      company: 'Concentrix (JP Morgan Chase)',
      role: 'Retention Manager',
      period: 'Mar 2024 - Jul 2024',
      location: 'Remote',
      points: [
        'Managed high-priority escalations with 94% satisfaction rate',
        'Worked on resolving complex account issues with timely solutions'
      ]
    },
    {
      company: 'Accenture (Verizon & Facebook)',
      role: 'Client Support Associate & Trainer',
      period: 'Mar 2019 - Feb 2024',
      location: 'Mumbai',
      points: [
        'Provided multi-channel customer support for client accounts',
        'Trained new team members, reducing onboarding time'
      ]
    }
  ];

  experiences.forEach((exp) => {
    const cardHeight = 28;
    addShadow(margin, leftY, 115, cardHeight, 2);
    addRoundedRect(margin, leftY, 115, cardHeight, 2, 'F', colors.white);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.dark);
    doc.text(exp.role, margin + 3, leftY + 5);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(exp.company, margin + 3, leftY + 10);

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textLight);
    doc.text(`${exp.period} | ${exp.location}`, margin + 3, leftY + 14);

    doc.setDrawColor(...colors.bgCard);
    doc.setLineWidth(0.3);
    doc.line(margin + 3, leftY + 16, margin + 112, leftY + 16);

    let pointY = leftY + 20;
    exp.points.forEach((point) => {
      doc.setFillColor(...colors.primary);
      doc.circle(margin + 4, pointY - 1, 0.7, 'F');
      doc.setFontSize(7.5);
      doc.setTextColor(...colors.text);
      const lines = doc.splitTextToSize(point, 105);
      doc.text(lines, margin + 7, pointY);
      pointY += lines.length * 3.5;
    });

    leftY += cardHeight + 5;
  });

  // ========== PAGE 2 ==========
  doc.addPage();
  leftY = 20;

  // Continue Experience on Page 2
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PROFESSIONAL EXPERIENCE (Continued)', margin, leftY);
  leftY += 2;
  doc.setLineWidth(1);
  doc.line(margin, leftY, 75, leftY);
  leftY += 8;

  const moreExperiences = [
    {
      company: 'Vidyalankar',
      role: 'Branch Head',
      period: 'Dec 2018 - Mar 2019',
      location: 'Mumbai',
      points: ['Managed branch operations and team supervision']
    },
    {
      company: 'Karvy Digikonnect (Bharti AXA)',
      role: 'Team Leader',
      period: 'Aug 2018 - Nov 2018',
      location: 'Mumbai',
      points: ['Led team of 30 associates with performance tracking']
    }
  ];

  moreExperiences.forEach((exp) => {
    const cardHeight = 22;
    addShadow(margin, leftY, 180, cardHeight, 2);
    addRoundedRect(margin, leftY, 180, cardHeight, 2, 'F', colors.white);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.dark);
    doc.text(exp.role, margin + 3, leftY + 5);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(exp.company, margin + 3, leftY + 10);

    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textLight);
    doc.text(`${exp.period} | ${exp.location}`, margin + 3, leftY + 14);

    doc.setDrawColor(...colors.bgCard);
    doc.setLineWidth(0.3);
    doc.line(margin + 3, leftY + 16, margin + 177, leftY + 16);

    doc.setFillColor(...colors.primary);
    doc.circle(margin + 4, leftY + 19, 0.7, 'F');
    doc.setFontSize(7.5);
    doc.setTextColor(...colors.text);
    doc.text(exp.points[0], margin + 7, leftY + 20);

    leftY += cardHeight + 5;
  });

  leftY += 3;

  // Core Skills
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('CORE SKILLS & COMPETENCIES', margin, leftY);
  leftY += 2;
  doc.setLineWidth(1);
  doc.line(margin, leftY, 60, leftY);
  leftY += 8;

  const skillCategories = [
    { title: 'Operations & Management', skills: ['Operations Management', 'Process Optimization', 'Workflow Coordination'] },
    { title: 'Customer Success', skills: ['Customer Retention', 'Account Management', 'Client Engagement'] },
    { title: 'Leadership & Training', skills: ['Team Leadership', 'Performance Coaching', 'Training & Development'] },
    { title: 'Communication', skills: ['Communication Excellence', 'Virtual Assistance', 'Stakeholder Management'] }
  ];

  const col1X = margin;
  const col2X = 107;
  const colWidth = 88;
  let col1Y = leftY;
  let col2Y = leftY;

  skillCategories.forEach((category, idx) => {
    const isLeft = idx % 2 === 0;
    const xPos = isLeft ? col1X : col2X;
    let yPos = isLeft ? col1Y : col2Y;

    addShadow(xPos, yPos, colWidth, 22, 2);
    addRoundedRect(xPos, yPos, colWidth, 22, 2, 'F', colors.white);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text(category.title, xPos + 3, yPos + 5);

    doc.setDrawColor(...colors.bgCard);
    doc.setLineWidth(0.3);
    doc.line(xPos + 3, yPos + 7, xPos + colWidth - 3, yPos + 7);

    let skillY = yPos + 11;
    category.skills.forEach((skill) => {
      doc.setFillColor(...colors.primary);
      doc.circle(xPos + 4, skillY, 0.6, 'F');
      doc.setFontSize(7);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...colors.text);
      doc.text(skill, xPos + 7, skillY + 1);
      skillY += 4;
    });

    if (isLeft) col1Y = yPos + 27;
    else col2Y = yPos + 27;
  });

  leftY = Math.max(col1Y, col2Y) + 3;

  // Personal Project
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('PERSONAL PROJECT', margin, leftY);
  leftY += 2;
  doc.setLineWidth(1);
  doc.line(margin, leftY, 47, leftY);
  leftY += 8;

  addShadow(margin, leftY, 180, 24, 2);
  addRoundedRect(margin, leftY, 180, 24, 2, 'F', colors.bgLight);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('BizControl.tech', margin + 3, leftY + 6);

  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(...colors.textLight);
  doc.text('Personal Operations Management Platform', margin + 3, leftY + 11);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.text);
  const projectDesc = 'A self-initiated project exploring better ways of managing tasks, tracking productivity, and improving operational visibility for small teams.';
  const projectLines = doc.splitTextToSize(projectDesc, 174);
  doc.text(projectLines, margin + 3, leftY + 16);

  leftY += 29;

  // Additional Contact
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.primary);
  doc.text('ADDITIONAL CONTACT', margin, leftY);
  leftY += 2;
  doc.setLineWidth(1);
  doc.line(margin, leftY, 52, leftY);
  leftY += 8;

  addShadow(margin, leftY, 180, 16, 2);
  addRoundedRect(margin, leftY, 180, 16, 2, 'F', colors.white);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.text);
  doc.text('Location:', margin + 3, leftY + 6);
  doc.setFont('helvetica', 'normal');
  doc.text('Dombivli, India (Open to Remote Work)', margin + 21, leftY + 6);

  doc.setFont('helvetica', 'bold');
  doc.text('LinkedIn:', margin + 3, leftY + 11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.primary);
  doc.text('linkedin.com/in/saurabh-mishra-004a98383', margin + 21, leftY + 11);

  doc.setTextColor(...colors.text);
  doc.setFont('helvetica', 'bold');
  doc.text('Portfolio:', 115, leftY + 11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...colors.primary);
  doc.text('bizcontrol.tech', 131, leftY + 11);

  // Footer
  doc.setFontSize(7);
  doc.setTextColor(...colors.textLight);
  doc.text('Professional Portfolio | Available for Remote Work | Leadership & Operations Roles', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save PDF
  doc.save('Saurabh_Mishra_Resume.pdf');
};

export default generateResumePDF;
