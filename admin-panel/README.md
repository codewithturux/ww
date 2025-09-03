# Admin Panel

A modern, responsive admin panel built with React, TypeScript, and Tailwind CSS. Features a comprehensive dashboard, user management, analytics, and more.

## Features

- 📊 **Dashboard** - Overview with statistics, charts, and recent activity
- 👥 **User Management** - Complete CRUD operations for user accounts
- 📦 **Product Management** - Manage product catalog and inventory
- 🛒 **Order Management** - Track and manage customer orders
- 📈 **Analytics** - Detailed analytics with interactive charts
- 📋 **Reports** - Generate and download various business reports
- ⚙️ **Settings** - Configurable application settings
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean, professional interface with Tailwind CSS

## Tech Stack

- **React 19** - Latest version with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful charts and data visualization
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd admin-panel
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Sidebar, Header, Layout)
│   ├── Dashboard/      # Dashboard-specific components
│   └── UI/            # Generic UI components
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard page
│   ├── Users.tsx      # User management page
│   ├── Products.tsx   # Product management page
│   ├── Orders.tsx     # Order management page
│   ├── Analytics.tsx  # Analytics page
│   ├── Reports.tsx    # Reports page
│   └── Settings.tsx   # Settings page
├── App.tsx            # Main app component with routing
└── main.tsx          # Application entry point
\`\`\`

## Key Components

### Dashboard
- Statistics cards with key metrics
- Interactive charts (Area, Bar, Pie)
- Recent activity feed
- Revenue and user growth trends

### User Management
- User listing with search and filters
- Add/Edit user modal
- Role and status management
- Contact information display

### Product Management
- Product grid view
- Category filtering
- Stock level monitoring
- Quick edit actions

### Order Management
- Order listing with status tracking
- Status update functionality
- Customer information display
- Order search and filtering

### Analytics
- Revenue and growth metrics
- Traffic analysis by device
- User growth trends
- Key performance indicators

### Reports
- Report generation and download
- Date range filtering
- Multiple report types
- Generation statistics

### Settings
- Notification preferences
- Security settings
- General configuration
- Appearance customization

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      },
    }
  },
}
\`\`\`

### Navigation
Add new navigation items in `src/components/Layout/Sidebar.tsx`:

\`\`\`typescript
const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  // Add new items here
];
\`\`\`

## Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation item in `src/components/Layout/Sidebar.tsx`

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components modular and reusable

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.