export const metadata = {
  title: "Harmony Genius",
  description: "Create. Earn. Collaborate. Own Your Music.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
