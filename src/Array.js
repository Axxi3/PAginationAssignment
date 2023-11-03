

let productList = [
    {
        id: 1,
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        category: 'Story Books',
        img: "https://images.unsplash.com/photo-1597945177273-f63c45b0fea5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3D",
        price: 350
    },
    {
        id: 2,
        title: 'Where the Wild Things Are',
        author: 'Maurice Sendak',
        category: 'Story Books',
        img: "https://images.unsplash.com/photo-1598618253208-d75408cee680?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3D",
        price: 280
    },
    {
        id: 3,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        category: 'Story Books',
        img: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3D",
        price: 400
    },
    {
        id: 4,
        title: '1984',
        author: 'George Orwell',
        category: 'Fiction Books',
        img: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3D",
        price: 320
    },
    {
        id: 5,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        category: 'Fiction Books',
        img: "https://images.unsplash.com/photo-1625043094419-80887b43c876?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3D",
        price: 275
    },
    {
        id: 6,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        category: 'Classics',
        img: "https://images.unsplash.com/photo-1619164025200-af10a99faeb3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGJvb2slMjBjb3ZlcnN8ZW58MHx8MHx8fDA%3D",
        price: 300
    },
    {
        id: 7,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Classics',
        img: "https://images.unsplash.com/photo-1511873072108-90dc8b47f9fb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxib29rJTIwY292ZXJzfGVufDB8fDB8fHww",
        price: 260
    },
    {
        id: 8,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        category: 'Classics',
        img: "https://images.unsplash.com/photo-1603162525937-96b43acdac7b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxib29rJTIwY292ZXJzfGVufDB8fDB8fHww",
        price: 295
    },
    {
        id: 9,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        category: 'Story Books',
        img: "https://images.unsplash.com/photo-1552647513-6e7cf1a5e3e3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxib29rJTIwY292ZXJzfGVufDB8fDB8fHww",
        price: 380
    },
    {
        id: 10,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        category: 'Fiction Books',
        img: "https://images.unsplash.com/photo-1662101458732-e1024a703261?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxib29rJTIwY292ZXJzfGVufDB8fDB8fHww",
        price: 310
    },
    {
        id: 11,
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        category: 'Fiction Books',
        img: "https://images.unsplash.com/photo-1535269414141-739bf0054cde?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 290
    },
    {
        id: 12,
        title: 'Jane Eyre',
        author: 'Charlotte Bronte',
        category: 'Classics',
        img: "https://images.unsplash.com/photo-1654954232922-1a1e19f2405f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxib29rJTIwY292ZXJzfGVufDB8fDB8fHww",
        price: 270
    },
    {
        id: 13,
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        category: 'Story Books',
        img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
        price: 240
    },
    {
        id: 14,
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        category: 'Fiction Books',
        img: "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: 285
    },
    {
        id: 15,
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        category: 'Classics',
        img: "https://images.unsplash.com/photo-1639690283395-b62444cf9a76?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: 295
    }
];


export default productList