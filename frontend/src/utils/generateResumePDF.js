import jsPDF from 'jspdf';

const generateResumePDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Color scheme - Navy Blue theme
  const primaryColor = [30, 58, 138]; // Navy 600
  const secondaryColor = [59, 130, 246]; // Blue 500
  const textColor = [31, 41, 55]; // Gray 800
  const lightGray = [243, 244, 246]; // Gray 100

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  let yPos = margin;

  // Helper function to add text with custom styling
  const addText = (text, x, y, size, style = 'normal', color = textColor) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    doc.setTextColor(...color);
    doc.text(text, x, y);
  };

  // Helper function to add section with line
  const addSection = (title, yPosition) => {
    doc.setFillColor(...primaryColor);
    doc.rect(margin, yPosition - 3, 3, 8, 'F');
    addText(title, margin + 6, yPosition + 3, 14, 'bold', primaryColor);
    doc.setDrawColor(...lightGray);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition + 6, pageWidth - margin, yPosition + 6);
    return yPosition + 12;
  };

  // Header Section with Navy Blue background
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 55, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('SAURABH MISHRA', margin, 20);

  // Title
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Operations Manager | Customer Retention Specialist | Team Leader', margin, 28);

  // Contact Info
  doc.setFontSize(9);
  const contactY = 37;
  doc.text('📧 saurabhmishra33555@gmail.com', margin, contactY);
  doc.text('📱 +91 9867179669', margin, contactY + 5);
  doc.text('📍 Dombivli, India (Remote)', margin, contactY + 10);
  doc.text('🔗 linkedin.com/in/saurabh-mishra-004a98383', margin + 90, contactY);
  doc.text('🌐 bizcontrol.tech', margin + 90, contactY + 5);

  yPos = 65;

  // Professional Summary
  yPos = addSection('PROFESSIONAL SUMMARY', yPos);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  const summaryText = 'I work on improving operations, managing teams, and handling customer retention challenges in fast-paced environments. I have 6+ years of experience across TCS (Citi Bank), Concentrix (JP Morgan Chase), and Accenture, where I have supported process improvements, team coordination, and customer satisfaction initiatives.';
  const summaryLines = doc.splitTextToSize(summaryText, pageWidth - 2 * margin);
  doc.text(summaryLines, margin, yPos);
  yPos += summaryLines.length * 5 + 8;

  // Key Metrics
  yPos = addSection('KEY METRICS', yPos);
  doc.setFillColor(...lightGray);
  
  // Metrics boxes
  const metrics = [
    { label: '6+ Years', desc: 'Experience' },
    { label: '30+', desc: 'Team Members' },
    { label: '35%', desc: 'Process Improvements' },
    { label: '94%', desc: 'Client Satisfaction' }
  ];

  let metricX = margin;
  metrics.forEach((metric, idx) => {
    doc.setFillColor(...lightGray);
    doc.roundedRect(metricX, yPos, 40, 15, 2, 2, 'F');
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(metric.label, metricX + 20, yPos + 7, { align: 'center' });
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    doc.text(metric.desc, metricX + 20, yPos + 12, { align: 'center' });
    metricX += 42;
  });
  yPos += 22;

  // Professional Experience
  yPos = addSection('PROFESSIONAL EXPERIENCE', yPos);

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
        'Trained new team members, reducing onboarding time',
        'Maintained quality scores above 95% consistently'
      ]
    }
  ];

  experiences.forEach((exp) => {
    // Company and role
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(exp.role, margin, yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    doc.text(exp.company, margin, yPos + 5);
    
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text(`${exp.period} | ${exp.location}`, margin, yPos + 10);
    
    yPos += 14;

    // Responsibilities
    exp.points.forEach((point) => {
      doc.setFontSize(9);
      doc.setTextColor(...textColor);
      doc.circle(margin + 1, yPos - 1, 0.8, 'F');
      const lines = doc.splitTextToSize(point, pageWidth - 2 * margin - 5);
      doc.text(lines, margin + 4, yPos);
      yPos += lines.length * 4 + 1;
    });
    
    yPos += 4;

    // Check if we need a new page
    if (yPos > pageHeight - 40) {
      doc.addPage();
      yPos = margin;
    }
  });

  // Core Skills
  yPos = addSection('CORE SKILLS', yPos);

  const skills = [
    'Operations Management',
    'Customer Retention',
    'Team Leadership',
    'Virtual Assistance',
    'Process Optimization',
    'Client Engagement',
    'Training & Development',
    'Analytics & Reporting',
    'Problem Resolution',
    'Communication'
  ];

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  
  let skillX = margin;
  let skillY = yPos;
  skills.forEach((skill, idx) => {
    if (idx > 0 && idx % 2 === 0) {
      skillY += 8;
      skillX = margin;
    }
    
    doc.setFillColor(...lightGray);
    const textWidth = doc.getTextWidth(skill);
    doc.roundedRect(skillX, skillY - 4, textWidth + 6, 6, 1, 1, 'F');
    doc.setTextColor(...primaryColor);
    doc.text(skill, skillX + 3, skillY);
    skillX += textWidth + 10;
  });
  yPos = skillY + 10;

  // Education
  yPos = addSection('EDUCATION', yPos);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...textColor);
  doc.text('Bachelor of Science (BSc)', margin, yPos);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  doc.text('2015', margin, yPos + 5);
  
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...textColor);
  doc.text('Higher Secondary Certificate (HSC)', margin, yPos);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(107, 114, 128);
  doc.text('2009', margin, yPos + 5);
  
  yPos += 12;

  // Certifications
  yPos = addSection('CERTIFICATIONS', yPos);
  
  const certifications = [
    'Business Strategy Masterclass',
    'Leadership & Management Diploma',
    'Stakeholder Management'
  ];

  doc.setFontSize(9);
  certifications.forEach((cert) => {
    doc.setTextColor(...textColor);
    doc.circle(margin + 1, yPos - 1, 0.8, 'F');
    doc.text(cert, margin + 4, yPos);
    yPos += 5;
  });

  yPos += 5;

  // Personal Project
  if (yPos < pageHeight - 40) {
    yPos = addSection('PERSONAL PROJECT', yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('BizControl.tech', margin, yPos);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    const projectDesc = 'Personal operations management project exploring better ways of managing tasks, tracking productivity, and improving operational visibility for small teams.';
    const projectLines = doc.splitTextToSize(projectDesc, pageWidth - 2 * margin);
    doc.text(projectLines, margin, yPos + 5);
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(156, 163, 175);
  doc.text('Generated from portfolio - Available for Remote Work | Open to Leadership & Operations Roles', pageWidth / 2, pageHeight - 10, { align: 'center' });

  // Save the PDF
  doc.save('Saurabh_Mishra_Resume.pdf');
};

export default generateResumePDF;
