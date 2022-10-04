import home from './home.svg'
import inventory from './folder.svg'
import transactions from './transactions.svg'
import people from './people.svg'
import shops from './shops.svg'
import chart from './chart.svg'
import MoreVertIcon from '@mui/icons-material/MoreVert'
export const dashBoardLinks = [
    { name: 'Home', linkName: '', icon: home },
    { name: 'Inventory', linkName: 'inventory', icon: inventory },
    { name: 'Transactions', linkName: 'transactions', icon: transactions },
    { name: 'People', linkName: 'people', icon: people },
    { name: 'Shops', linkName: 'shops', icon: shops },
    { name: 'Chat Support', linkName: 'chat-support', icon: chart },
]

function createData(name, customer, date, amount, status, phone, dots) {
    return { name, customer, date, amount, status, phone, dots }
}
function createPeople(name, customer, phone, dots) {
    return { name, customer, phone, dots }
}

export const rows = [
    createData(
        '003451',
        'Eugen Chweya',
        '22 June 2020',
        'KES 200',
        'Paid',
        '+254712345678',
        <MoreVertIcon />
    ),
    createData(
        '003452',
        'Eugen Chweya',
        '22 June 2020',
        'KES 900',
        'Pending',
        '+254712345678',
        <MoreVertIcon />
    ),
    createData(
        '003453',
        'Eugen Chweya',
        '22 June 2020',
        'KES 1,200',
        'Pending',
        '+254712345678',
        <MoreVertIcon />
    ),
    createData(
        '003454',
        'Eugen Chweya',
        '22 June 2020',
        'KES 150',
        'Paid',
        '+254712345678',
        <MoreVertIcon />
    ),
    createData(
        '003455',
        'Eugen Chweya',
        '22 June 2020',
        'KES 230',
        'Paid',
        '+254712345678',
        <MoreVertIcon />
    ),
]

export const peopleRows = [
    createPeople(
        'Eugen Chweya',
        'Shopkeeper',
        '+254712345678',
        <MoreVertIcon />
    ),
    createPeople('Eugen Chweya', 'Customer', '+254712345678', <MoreVertIcon />),
    createPeople('Eugen Chweya', 'Customer', '+254712345678', <MoreVertIcon />),
    createPeople(
        'Eugen Chweya',
        'Shopkeeper',
        '+254712345678',
        <MoreVertIcon />
    ),
    createPeople('Eugen Chweya', 'Customer', '+254712345678', <MoreVertIcon />),
]
