import icon1 from '../../../assets/contact/icon1.png';
import icon2 from '../../../assets/contact/icon2.png';
import icon3 from '../../../assets/contact/icon3.png';
import icon4 from '../../../assets/contact/icon4.png';

const methods = [
    {
        title: 'Телефоны:',
        array: [
            { label: 'Отдел продаж:', href: 'tel:+38(098)1885566', link: '+38(098)1885566' },
            { label: 'Отдел логистики:', href: 'tel:+38(068)7043777', link: '+38(068)7043777' },
        ],
        src: icon1,
        alt: 'Телефоны',
    },
    {
        title: 'Почта:',
        array: [
            { label: 'Отдел продаж:', href: 'mailto:sales.tokarmebel@gmail.com', link: 'sales.tokarmebel@gmail.com' },
            { label: 'Отдел логистики:', href: 'mailto:logistics.tokarmebel@gmail.com', link: 'logistics.tokarmebel@gmail.com' },
        ],
        src: icon2,
        alt: 'Почта',
    },
    {
        title: 'График работы:',
        array: [
            { label: 'Пн. - Пт.:', href: '', link: 'с 9:00 до 18:00' },
            { label: 'Сб. - Вс.:', href: '', link: 'Выходной' },
        ],
        src: icon3,
        alt: 'График работы',
    },
    {
        title: 'Мессенджеры:',
        array: [
            { label: 'Telegram', href: 'https://t.me/tokarmebel', link: '@tokarmebel' },
            { label: 'WhatsApp', href: '#', link: '+38 (068) 704 37 77' },
            { label: 'Viber', href: '#', link: '@tokarmebel' },
        ],
        src: icon4,
        alt: 'Мессенджеры',
    },
    {
        title: 'Компания TokarMabel находится по адресу:',
        array: [
            { label: 'Украина, Тячевский район. г. Тячев, ТЦ "Стиль"',}
        ]
    },
];

export default methods;
