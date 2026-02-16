export const metadata = {
  title: 'AGM Gourmet Events',
  description: 'Eventos gourmet profesionales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
