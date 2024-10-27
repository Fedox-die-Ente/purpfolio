# 💜 Purpfolio

Welcome to Purpfolio - A sleek, purple-themed portfolio template for developers and designers!

## 🚀 Features

- 🎨 Fully customizable through `lib/config.tsx`
- 💬 Easy text management with `lib/texts.ts`
- 📱 Responsive design for all devices
- 🌙 Dark mode by default (because we're cool like that)
- 📧 Integrated contact form using Resend

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Figma](https://www.figma.com/) - Design tool
- [Resend](https://resend.com/) - Email sending library
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## 🎨 Design

Check out the Figma design [here](https://www.figma.com/community/file/1084469493663635659). Huge thanks to the amazing
designer!

## 📸 Live Preview

See the live preview [here](https://purpfolio.vercel.app/).

## 🚀 Getting Started

1. Clone the repository with `git clone https://github.com/Fedox-die-Ente/purpfolio.git`
2. Install dependencies with `yarn install` or `npm install`
3. Configure your portfolio in `config.tsx`
4. Customize messages in `texts.ts`
5. Start the development server with `yarn dev` or `npm run dev`

## 📝 Configuration

All major configurations can be done in `config.tsx`. This includes:

- Personal information
- Skills
- Projects
- Services
- Social links

For text customization, head to `texts.ts`.

## 📧 Contact Form

To get the contact form working:

1. Sign up for a [Resend](https://resend.com/) account
2. Add your Resend API key to `.env.local`: `RESEND_API_KEY=your-api-key`
3. Add your domain to the Resend dashboard
4. Update the FROM property in `lib/config.tsx` to your domain

## 📜 License

This project is free to use for personal and commercial purposes. However, you must keep the credits in the footer
intact.

See [LICENSE](LICENSE) for more information.

## 🙏 Credits

- Design by [ernestechie](https://www.figma.com/@ernestechie)
- Developed by [Fedox-die-Ente](https://github.com/Fedox-die-Ente)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to
check [issues page](https://github.com/Fedox-die-Ente/purpfolio/issues).

## 💖 Show your support

Give a ⭐️ if you like this project!

---

Made with 💜 and React