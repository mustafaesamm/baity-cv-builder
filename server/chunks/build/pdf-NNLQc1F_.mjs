import { jsPDF } from 'jspdf';

const generatePDF = (AllCvData) => {
  const pdf = new jsPDF("p", "mm", "a4");
  const textColor = "#333333";
  const margin = 20;
  let y = margin;
  pdf.setFillColor("#78B3CE");
  pdf.rect(0, 0, 210, 40, "F");
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor("#ffffff");
  pdf.setFontSize(22);
  if (AllCvData.imageUrl) {
    const imgX = margin + 140;
    const imgY = y - 15;
    pdf.addImage(AllCvData.imageUrl, "JPEG", imgX, imgY, 30, 30);
  }
  pdf.text(AllCvData.name, margin, y - 3);
  pdf.setFontSize(12);
  pdf.text(
    `Email: ${AllCvData.email} | Phone: ${AllCvData.mobile}`,
    margin,
    y + 4
  );
  pdf.setTextColor("#ffffff");
  pdf.text(
    `Location: ${AllCvData.Street} ,${AllCvData.City} ,${AllCvData.Country}`,
    margin,
    y + 10
  );
  y += 45;
  const pageWidth = pdf.internal.pageSize.getWidth();
  pdf.setFillColor("#E07B39");
  pdf.rect(0, y - 30, pageWidth, 10, "F");
  pdf.setTextColor("white");
  pdf.setFontSize(16);
  pdf.text("Organization", margin, y - 23);
  pdf.setTextColor(textColor);
  pdf.setFontSize(12);
  y += 0;
  const summary = `${AllCvData.Organization + " - " + AllCvData.Position}`;
  pdf.text(pdf.splitTextToSize(summary, 170), margin, y - 10);
  y += pdf.getTextDimensions(summary).h + 0;
  pdf.setFillColor("#E07B39");
  pdf.rect(0, y - 7, pageWidth, 10, "F");
  pdf.setTextColor("white");
  pdf.setFontSize(16);
  pdf.text("Education", margin, y);
  pdf.setTextColor(textColor);
  pdf.setFontSize(12);
  y += 12;
  pdf.setFont("helvetica", "bold");
  pdf.text(AllCvData.Collage, margin, y);
  pdf.setFont("helvetica", "normal");
  y += 6;
  pdf.text(AllCvData.descriptionEducation, margin, y);
  y += 4;
  pdf.text(AllCvData.qualification, margin, y + 5);
  y += 17;
  pdf.setFillColor("#E07B39");
  pdf.rect(0, y - 7, pageWidth, 10, "F");
  pdf.setFontSize(16);
  pdf.setTextColor("white");
  pdf.setFont("helvetica", "bold");
  pdf.text("Project", margin, y);
  pdf.setTextColor(textColor);
  pdf.setFontSize(12);
  y += 12;
  pdf.setFont("helvetica", "bold");
  pdf.text(AllCvData.Title, margin, y);
  pdf.setFont("helvetica", "normal");
  y += 6;
  const url = "AllCvData.Linkrrr";
  pdf.setTextColor("#219B9D");
  pdf.textWithLink("AllCvData.Link", margin, y, { url });
  y += 10;
  pdf.setTextColor("black");
  pdf.text(AllCvData.descriptionProject, margin, y);
  y += 13;
  if (AllCvData.skills.length >= 1) {
    pdf.setFillColor("#E07B39");
    pdf.rect(0, y - 7, pageWidth, 10, "F");
    pdf.setFontSize(16);
    pdf.setTextColor("white");
    pdf.setFontSize(16);
    pdf.text("Skills", margin, y);
    pdf.setTextColor(textColor);
    pdf.setFontSize(12);
    y += 10;
    AllCvData.skills.forEach((element) => {
      pdf.text(pdf.splitTextToSize("-" + element, 170), margin, y);
      y += 10;
    });
  }
  if (AllCvData.Certificates.length >= 1) {
    pdf.setFillColor("#E07B39");
    pdf.rect(0, y - 7, pageWidth, 10, "F");
    pdf.setFontSize(16);
    pdf.setTextColor("white");
    pdf.setFontSize(16);
    pdf.text("Certificates", margin, y);
    pdf.setTextColor(textColor);
    pdf.setFontSize(12);
    y += 10;
    AllCvData.Certificates.forEach((element) => {
      pdf.text(pdf.splitTextToSize("-" + element, 170), margin, y);
      y += 10;
    });
  }
  if (AllCvData.Achievements.length >= 1) {
    pdf.setFillColor("#E07B39");
    pdf.rect(0, y - 7, pageWidth, 10, "F");
    pdf.setFontSize(16);
    pdf.setTextColor("white");
    pdf.setFontSize(16);
    pdf.text("Achievements", margin, y);
    pdf.setTextColor(textColor);
    pdf.setFontSize(12);
    y += 10;
    AllCvData.Achievements.forEach((element) => {
      pdf.text(pdf.splitTextToSize("-" + element, 170), margin, y);
      y += 10;
    });
  }
  pdf.setFontSize(10);
  pdf.setTextColor("#219B9D");
  if (AllCvData.Github) {
    const GitHub = AllCvData.Github;
    pdf.textWithLink("GitHub", 75, 287, { url: GitHub });
  }
  if (AllCvData.Linkedin) {
    const Linkedin = AllCvData.Linkedin;
    pdf.textWithLink("Linkedin", 115, 287, { url: Linkedin });
  }
  pdf.save(AllCvData.name + ".pdf");
};

export { generatePDF };
//# sourceMappingURL=pdf-NNLQc1F_.mjs.map
