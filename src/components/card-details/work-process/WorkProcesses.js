import icon11 from '../../../assets/work-process/icon1-1.png';
import icon12 from '../../../assets/work-process/icon1-2.png';
import icon13 from '../../../assets/work-process/icon1-3.png';
import icon21 from '../../../assets/work-process/icon2-1.png';
import icon22 from '../../../assets/work-process/icon2-2.png';
import icon23 from '../../../assets/work-process/icon2-3.png';
import icon31 from '../../../assets/work-process/icon3-1.png';
import icon32 from '../../../assets/work-process/icon3-2.png';
import icon33 from '../../../assets/work-process/icon3-3.png';
const workProcesses = [
    {
        id: 1,
        title: 'Общение с экспертами',
        processes: [
            {src: icon11, text: `Ваше знакомство с представителем  компании.`},
            {src: icon12, text: `Проведение консультации по интересующим вопросам.`},
            {src: icon13, text: `Согласование всех деталей и размеров объекта.`},
        ]
    },{
        id: 2,
        title: 'Подбор варианта',
        processes: [
            {src: icon21, text: `Создание индивидуального 3D-макета вашего проекта.`},
            {src: icon22, text: `Заключение договора по выбранному варианту.`},
            {src: icon23, text: `Оплата предоплаты проекта.`},
        ]
    },{
        id: 3,
        title: 'Процесс работы и сдача проекта',
        processes: [
            {src: icon31, text: `Подготовка фундамента и материалов, конструкции.`},
            {src: icon32, text: `Подготовка фундамента и материалов, конструкции.`},
            {src: icon33, text: `Сдача проекта на месте и оплата оставшийся части суммы`},
        ]
    },
]

export default workProcesses;