import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifolio Kadmo',
  description: 'Meu site de portfólio é um showcase dos meus projetos de desenvolvimento web. Descubra como minhas habilidades e conhecimentos em desenvolvimento web podem ajudar a transformar suas ideias em realidade. Explore meus trabalhos recentes e entre em contato para discutir como podemos colaborar em seu próximo projeto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
