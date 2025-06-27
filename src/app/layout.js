import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Iconos Bootstrap
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-main text-light">
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
