import css from './not-found.module.css';

export const metadata = {
    title: 'Сторінку не знайдено – NoteHub',
    description: 'На жаль, сторінку не знайдено. Перевірте URL або поверніться на головну сторінку NoteHub.',
    openGraph: {
        title: 'Сторінку не знайдено – NoteHub',
        description: 'Цієї сторінки не існує. Спробуйте інший шлях або перейдіть на головну.',
        url: 'https://08-zustand-ten.vercel.app/not-found',
        images: [
            {
                url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                width: 1200,
                height: 630,
                alt: 'NoteHub – Page Not Found',
            },
        ],
    },
};

export default function NotFound() {
    return (
        <>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>
                Sorry, the page you are looking for does not exist.
            </p>
        </>
    );
}