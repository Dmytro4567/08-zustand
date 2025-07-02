import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import {Roboto} from 'next/font/google';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata = {
    title: 'NoteHub – Зручний менеджер нотаток',
    description: 'NoteHub – це застосунок для створення, збереження та фільтрації нотаток із підтримкою тегів, пошуку та модалок.',
    openGraph: {
        title: 'NoteHub – Зручний менеджер нотаток',
        description: 'Створюйте, шукайте та переглядайте нотатки за допомогою зручного інтерфейсу NoteHub.',
        url: 'https://08-zustand-ten.vercel.app/',
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: 'NoteHub',
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                       modal,
                                   }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={roboto.variable}>
        <TanStackProvider>
            <Header/>
            {children}
            {modal}
            <Footer/>
        </TanStackProvider>
        </body>
        </html>
    );
}
