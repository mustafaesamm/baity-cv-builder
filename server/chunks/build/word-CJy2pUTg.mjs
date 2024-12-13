import { Paragraph, ImageRun, TextRun, Document, Packer } from 'docx';
import { saveAs } from 'file-saver';

const generateWordDocument = (AllCvData) => {
  const primaryColor = "#E07B39";
  const textColor = "#333333";
  const children = [];
  if (AllCvData.imageUrl) {
    fetch(AllCvData.imageUrl).then((response) => response.arrayBuffer()).then((imageData) => {
      children.push(
        new Paragraph({
          children: [
            new ImageRun({
              data: imageData,
              transformation: {
                width: 100,
                height: 100
              }
            })
          ],
          spacing: { after: 400 }
        })
      );
      addDocumentContent();
    }).catch((error) => {
      console.error("Error fetching image:", error);
      addDocumentContent();
    });
  } else {
    addDocumentContent();
  }
  function addDocumentContent() {
    var _a, _b, _c;
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: AllCvData.name || "Name not provided",
            bold: true,
            color: "FFFFFF",
            size: 48
          }),
          new TextRun("\n"),
          new TextRun({
            text: `Email: ${AllCvData.email || "N/A"} | Phone: ${AllCvData.mobile || "N/A"}`,
            color: "FFFFFF",
            size: 24
          }),
          new TextRun("\n"),
          new TextRun({
            text: `Location: ${AllCvData.Street || ""}, ${AllCvData.City || ""}, ${AllCvData.Country || ""}`.trim(),
            color: "FFFFFF",
            size: 24
          })
        ],
        shading: {
          fill: "78B3CE"
        },
        spacing: { after: 400 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Organization",
            bold: true,
            color: primaryColor,
            size: 32
          })
        ],
        spacing: { after: 200 }
      }),
      new Paragraph({
        text: `${AllCvData.Organization || "Organization not provided"} - ${AllCvData.Position || "Position not provided"}`,
        color: textColor,
        spacing: { after: 400 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Education",
            bold: true,
            color: primaryColor,
            size: 32
          })
        ],
        spacing: { after: 200 }
      }),
      new Paragraph({
        text: AllCvData.Collage || "College not provided",
        bold: true,
        color: textColor,
        spacing: { after: 100 }
      }),
      new Paragraph({
        text: `${AllCvData.descriptionEducation || ""}
${AllCvData.qualification || ""}`.trim(),
        color: textColor,
        spacing: { after: 400 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Project",
            bold: true,
            color: primaryColor,
            size: 32
          })
        ],
        spacing: { after: 200 }
      }),
      new Paragraph({
        text: AllCvData.Title || "Project title not provided",
        bold: true,
        color: textColor,
        spacing: { after: 100 }
      }),
      AllCvData.Linkrrr && new Paragraph({
        children: [
          new TextRun({
            text: "View Project",
            color: "219B9D",
            underline: true,
            link: AllCvData.Linkrrr
          })
        ],
        spacing: { after: 200 }
      }),
      new Paragraph({
        text: AllCvData.descriptionProject || "No project description provided",
        color: textColor,
        spacing: { after: 400 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Skills",
            bold: true,
            color: primaryColor,
            size: 32
          })
        ],
        spacing: { after: 200 }
      }),
      ...((_a = AllCvData.skills) == null ? void 0 : _a.map(
        (skill) => new Paragraph({
          text: `- ${skill}`,
          color: textColor,
          spacing: { after: 100 }
        })
      )) || [new Paragraph({ text: "No skills listed.", color: textColor })],
      new Paragraph({
        children: [
          new TextRun({
            text: "Certificates",
            bold: true,
            color: primaryColor,
            size: 32
          })
        ],
        spacing: { after: 200 }
      }),
      ...((_b = AllCvData.Certificates) == null ? void 0 : _b.map(
        (cert) => new Paragraph({
          text: `- ${cert}`,
          color: textColor,
          spacing: { after: 100 }
        })
      )) || [new Paragraph({ text: "No certificates listed.", color: textColor })],
      new Paragraph({
        children: [
          new TextRun({
            text: "Achievements",
            bold: true,
            color: primaryColor,
            size: 32
          })
        ],
        spacing: { after: 200 }
      }),
      ...((_c = AllCvData.Achievements) == null ? void 0 : _c.map(
        (ach) => new Paragraph({
          text: `- ${ach}`,
          color: textColor,
          spacing: { after: 100 }
        })
      )) || [new Paragraph({ text: "No achievements listed.", color: textColor })],
      new Paragraph({
        children: [
          AllCvData.Github && new TextRun({
            text: "GitHub\n",
            color: "219B9D",
            underline: true,
            link: AllCvData.Github
          }),
          AllCvData.Linkedin && new TextRun({
            text: "LinkedIn",
            color: "219B9D",
            underline: true,
            link: AllCvData.Linkedin
          })
        ].filter(Boolean),
        spacing: { after: 400 }
      })
    );
    const document = new Document({
      sections: [
        {
          properties: {
            page: {
              rtl: false
            }
          },
          children
        }
      ]
    });
    Packer.toBlob(document).then((blob) => {
      saveAs(blob, `${AllCvData.name || "document"}.docx`);
    });
  }
};

export { generateWordDocument };
//# sourceMappingURL=word-CJy2pUTg.mjs.map
