// Your CV files, one per language.
// The PDFs live in the `public/cv/` folder – everything in `public/` is served as-is,
// so `public/cv/NikolaZovkoCV-en.pdf` is available at `/cv/NikolaZovkoCV-en.pdf`.
//
// To change your CV: put the new PDF in `public/cv/` and update the file name here.
const cv = {
  en: '/cv/NikolaZovkoCV-en.pdf',
  sv: '/cv/NikolaZovkoCV-sv.pdf',
}

// The CV for the current language (falls back to English)
export const getCv = (lang) => cv[lang] ?? cv.en

export default cv
