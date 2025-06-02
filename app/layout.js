export const metadata = {
  title: 'Mi App',
  description: 'Descripción de mi aplicación',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
