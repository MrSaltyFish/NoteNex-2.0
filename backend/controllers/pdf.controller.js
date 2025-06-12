import path from "path";

export const getAcademicCalendar = (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "pdfs/academic-calendar",
    "academic-calendar.pdf"
  );
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(filePath);
};
