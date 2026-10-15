<div align="center">

# Nikola Zovko — Portfolio

**Frontend Developer · React · MERN Stack · Stockholm, Sweden**

My personal portfolio website, showing who I am, what I work with and what I have built.

[**🌐 Live site**](https://nikolazovko.netlify.app) · [LinkedIn](https://www.linkedin.com/in/nikola-zovko-a50779247/) · [GitHub](https://github.com/Nikolaz95) · [Email](mailto:nikolajoe95@gmail.com)

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

</div>

---

## ✨ Features

- 🌗 **Light & dark mode**: light by default, and the visitor's choice is remembered
- 🌍 **Two languages**: English (default) and Swedish, switchable in the header
- 🎞️ **Smooth animations**: sections animate in on scroll, with a typewriter intro and animated menus
- 🗂️ **Project carousel**: swipe, drag, use the arrows or the keyboard. Autoplay pauses on hover
- 🪟 **Project details modal**: screenshot, description, key features, tech stack and links. It closes with the X button, the Escape key, or a click outside
- ✉️ **Working contact form**: sends email directly to my inbox with [EmailJS](https://www.emailjs.com/), with form validation and success/error messages
- 📄 **Download CV** in the currently selected language
- 📱 **Fully responsive**: mobile menu that closes on outside click or Escape, bottom-sheet modal on phones
- ♿ **Accessible**: keyboard navigation, focus handling, ARIA labels, and animations turned off for users who prefer reduced motion

## 🛠️ Tech stack

| Area         | Technologies                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Framework    | [React 19](https://react.dev/) + [Vite](https://vite.dev/)                                                                              |
| Styling      | [styled-components](https://styled-components.com/) with a light/dark theme                                                             |
| Animations   | [Motion](https://motion.dev/)                                                                                                           |
| Carousel     | [Swiper](https://swiperjs.com/)                                                                                                         |
| Translations | [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)                                                       |
| Forms        | [react-hook-form](https://react-hook-form.com/) + [EmailJS](https://www.emailjs.com/) + [react-hot-toast](https://react-hot-toast.com/) |
| Icons        | [react-icons](https://react-icons.github.io/react-icons/)                                                                               |
| Hosting      | [Netlify](https://www.netlify.com/)                                                                                                     |

## 🧩 Reusable components

All of these live in `src/components/ui/` and can be used anywhere:

| Component                               | Example                                                                                               |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Button`                                | `<Button href={url} external variant="outline" icon={FaGithub}>Code</Button>`                         |
| `IconButton`                            | `<IconButton icon={HiX} label="Close" onClick={close} />`                                             |
| `Carousel`                              | `<Carousel items={projects} getKey={(p) => p.key} renderItem={(p) => <ProjectCard project={p} />} />` |
| `Modal`                                 | `<Modal open={isOpen} onClose={close}>…</Modal>`                                                      |
| `Card`                                  | `<Card>…</Card>` or extend it with `styled(Card)`                                                     |
| `Tag`                                   | `<Tag>React</Tag>` · `<Tag $variant="accent">Full-stack</Tag>`                                        |
| `FormField`                             | `<FormField label="Email" error={errors.email} {...register('email')} />`                             |
| `SocialLinks`                           | `<SocialLinks />`: LinkedIn, Gmail and GitHub buttons                                                 |
| `TechBadge`                             | `<TechBadge name="React" />`: technology logo and name                                                |
| `Section` / `SectionHeading` / `Reveal` | Section wrapper, section title, and scroll-in animation                                               |

## ✏️ Updating the content

No component code needs to change to update the content:

| What                            | Where                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Texts (English / Swedish)       | `src/i18n/en.js`, `src/i18n/sv.js`                                                                    |
| Projects                        | `src/data/projects.js` + a screenshot in `src/assets/images/projects/` + texts in both language files |
| Skills                          | `src/data/skills.js`                                                                                  |
| Experience & education          | `src/data/experience.js` + texts in both language files                                               |
| LinkedIn / Email / GitHub links | `src/data/social.js`                                                                                  |
| CV                              | Put the PDF in `public/cv/` and update `src/data/cv.js`                                               |
| Colors (light / dark)           | `src/styles/theme.js`                                                                                 |

## 🌐 Deployment

The site is hosted on **Netlify** and updates automatically on every push to `main`.

1. On Netlify, choose **Add new site → Import an existing project → GitHub**, then select this repository.
2. The build settings are read from [`netlify.toml`](netlify.toml): `npm run build`, publishing `dist/`.
3. Under **Site configuration → Environment variables**, add the three `VITE_EMAILJS_*` keys.
4. Click **Deploy**.

## 📬 Contact

**Nikola Zovko**, Frontend Developer, Stockholm

[LinkedIn](https://www.linkedin.com/in/nikola-zovko-a50779247/) · [GitHub](https://github.com/Nikolaz95) · [nikolajoe95@gmail.com](mailto:nikolajoe95@gmail.com)

I'm open to new opportunities. Feel free to get in touch!
