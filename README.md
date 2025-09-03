# Frontend Admin Panel

A modern, responsive admin panel built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
cd admin-panel
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the admin panel.

## 📋 Features

- **📊 Dashboard** - Statistics overview with interactive charts
- **👥 User Management** - Complete user CRUD operations
- **📦 Product Management** - Product catalog management
- **🛒 Order Management** - Order tracking and status updates
- **📈 Analytics** - Business analytics with data visualization
- **📋 Reports** - Generate and download business reports
- **⚙️ Settings** - Application configuration
- **📱 Responsive Design** - Mobile-first responsive layout

## 🛠 Tech Stack

- React 19 + TypeScript
- Vite (Build tool)
- React Router (Navigation)
- Tailwind CSS (Styling)
- Recharts (Data visualization)
- Lucide React (Icons)

## 📁 Project Structure

```
admin-panel/
├── src/
│   ├── components/
│   │   ├── Layout/       # Layout components
│   │   ├── Dashboard/    # Dashboard components
│   │   └── UI/          # Reusable UI components
│   ├── pages/           # Page components
│   ├── data/            # Mock data
│   └── App.tsx          # Main app with routing
├── public/              # Static assets
└── package.json         # Dependencies
```

## 🎨 Screenshots

The admin panel includes:
- Modern sidebar navigation
- Interactive dashboard with charts
- User management with search and filters
- Product grid with status indicators
- Order tracking with status updates
- Analytics with multiple chart types
- Report generation interface
- Comprehensive settings page

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

The admin panel is highly customizable:
- Update colors in `tailwind.config.js`
- Modify navigation in `src/components/Layout/Sidebar.tsx`
- Add new pages in `src/pages/` and update routing in `src/App.tsx`

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.