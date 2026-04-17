import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'

// 🎯 Умный basename: для локалки '/', для продакшена '/yacht-spa/'
const basename = import.meta.env.PROD ? '/yacht-spa/' : '/'

function Navbar() {
  const loc = useLocation()
  const btn = (path) => ({
    padding: '8px 16px',
    borderRadius: '6px',
    color: '#fff',
    textDecoration: 'none',
    background: loc.pathname === path ? '#0d6efd' : 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.3)',
    fontWeight: loc.pathname === path ? 'bold' : 'normal',
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand p-0" to="/">
          {/* 🖼️ Логотип: автоматический путь для любого окружения */}
          <img
            src={`${import.meta.env.BASE_URL}OR (1).png`}
            alt="Logo"
            width="40"
            style={{ borderRadius: '50%' }}
          />
        </Link>
        <div className="ms-auto d-flex gap-2">
          <Link to="/" className={btn('/')}>
            Home
          </Link>
          <Link
            to="/contact"
            className={btn('/contact')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
