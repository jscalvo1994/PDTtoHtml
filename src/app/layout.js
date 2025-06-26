import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Iconos Bootstrap
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient'; // ✅ Aquí lo importas

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <BootstrapClient /> {/* ✅ Aquí lo cargas una sola vez */}
        {children}
      </body>
    </html>
  );
}
