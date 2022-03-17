export let MenuAPI: ICategories[] = [
    {
        title: "Bakery",
        lvl: 8,
        link: '/Bakery',
        id: 1
    },
    {
        title: "Fruit and vegetables",
        lvl: 7,
        link: '/Fruit-And-Vegetables',
        id: 2
    },
    {
        title: "Meat and fish",
        lvl: 2,
        link: '/Meat-and-fish',
        id: 3
    },
    {
        title: "Drinks",
        lvl: 6,
        link: '/Drinks',
        id: 4
    },
    {
        title: "Kitchen",
        lvl: 1,
        link: '/Kitchen',
        id: 5
    },
    {
        title: "Special nutrition",
        lvl: 3,
        link: '/Special-nutrition',
        id: 6
    },
    {
        title: "Baby",
        lvl: 5,
        link: '/Baby',
        id: 7
    },
    {
        title: "Pharmacy",
        lvl: 4,
        link: '/Pharmacy',
        id: 8
    },
]
export let RecepiesAPI: IRecepies[] = [
    {
        banner: "Banner subfocus",
        title: "Space for heading",
        id: 1
    },
    {
        banner: "Banner subfocus",
        title: "Space for heading",
        id: 2
    },
]

export let Products: IProducts[] = [
    {
        image: "https://miro.medium.com/max/1400/1*fWtSOxTg3f8Ey4fvKFyrPQ.png",
        title: "Banana",
        productDescription: "Space for a small product description ",
        sales: 120,
        rating: 4,
        price: 2.5,
        oldPrice: 4.24,
        brand: "Chiquita",
        delivery: "Europe",
        categories: "Fruit",
        productType: "Fruit And Vegetables",
        link: "Fruit-And-Vegetables",
        id: 1

    },
    {
        image: "https://post.healthline.com/wp-content/uploads/2020/09/kidney-beans-732x549-thumbnail.jpg",
        title: "Beans",
        productDescription: "Space for a small product  ",
        sales: 14,
        rating: 4,
        price: 3.5,
        oldPrice: 3.53,
        brand: "Chiquita",
        delivery: "Europe",
        categories: "Vegetables",
        productType: "Fruit And Vegetables",
        link: "Fruit-And-Vegetables",
        id: 2,
        

    },
    {
        image: "https://www.osfhealthcare.org/blog/wp-content/uploads/2019/08/apples-OG.jpg",
        title: "Apples",
        productDescription: "Space for a small  ",
        sales: 99,
        rating: 4,
        price: 4.48,
        oldPrice: null,
        brand: "from Farmer",
        delivery: "Europe",
        categories: "Fruit",
        productType: "Fruit And Vegetables",
        link: "/Fruit-And-Vegetables",
        id: 3

    },
    {
        image: "https://www.lamansiondelasideas.com/wp-content/uploads/2021/11/zanahoria-para-la-vista.jpg",
        title: "Carrots",
        productDescription: "Space for a  ",
        sales: 1,
        rating: 3,
        price: 5.48,
        oldPrice: null,
        brand: "Chiquita",
        delivery: "Europe",
        categories: "Vegetables",
        productType: "Fruit And Vegetables",
        link: "/Fruit-And-Vegetables",
        id: 4

    },
    {
        image: "https://solidstarts.com/wp-content/uploads/garlic_edited-scaled.jpg",
        title: "Garlic",
        productDescription: "Space for  ",
        sales: 16,
        rating: 2,
        price: 54.48,
        oldPrice: 100,
        brand: "from Farmer",
        delivery: "Europe",
        categories: "Vegetables",
        productType: "Fruit And Vegetables",
        link: "Fruit-And-Vegetables",
        id: 5

    },
    {
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/278/278858/mushrooms-in-a-bowel-on-a-dark-table.jpg",
        title: "Mushrooms",
        productDescription: "Space for 66 ",
        sales: 1,
        rating: 3,
        price: 54.48,
        oldPrice: 100,
        brand: "Chiquita",
        delivery: "Europe",
        categories: "Mushrooms",
        productType: "Fruit And Vegetables",
        link: "Fruit-And-Vegetables",
        id: 6

    },
    {
        image: "https://cdn.blutui.com/uploads/season_farms/products/hero-strawberriest.png",
        title: "Strawberry",
        productDescription: "Space for 66 ",
        sales: 1,
        rating: 3,
        price: 14.48,
        oldPrice: 20,
        brand: "from Farmer",
        delivery: "Europe",
        categories: "berry",
        productType: "Fruit And Vegetables",
        link: "Fruit-And-Vegetables",
        id: 7

    },
    {
        image: "https://img.freepik.com/free-photo/croissants-on-a-wooden-cutting-board_1150-28480.jpg?size=626&ext=jpg&ga=GA1.2.1214918277.1641772800",
        title: "Сroissant",
        productDescription: "Space for 66 ",
        sales: 4,
        rating: 4,
        price: 12.48,
        oldPrice: 14.44,
        brand: "ItalyNewCompany",
        delivery: "Europe",
        categories: "Buns",
        productType: "Bakery",
        link: "Bakery",
        id: 8

    },
    {
        image: "https://food-images.files.bbci.co.uk/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg",
        title: "Bread",
        productDescription: "Space for Bread information ",
        sales: 1,
        rating: 3,
        price: 1.48,
        oldPrice: 3.33,
        brand: "ExtraTopBread",
        delivery: "Ukraine",
        categories: "Breads",
        productType: "Bakery",
        link: "Bakery",
        id: 9

    },
    {
        image: "https://way2day.com/wp-content/uploads/2017/12/Smetannyj-keks-min.jpg",
        title: "Cake with raisins",
        productDescription: "Space for Cake information",
        sales: 1,
        rating: 5,
        price: 2.48,
        oldPrice: 4,
        brand: "ItalyNewCompany",
        delivery: "America",
        categories: "Cookies",
        productType: "Bakery",
        link: "Bakery",
        id: 10

    },
    {
        image: "https://hostimul.com/uploads/catalog/blog/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
        title: "Cookie-Perf",
        productDescription: "Space for Cake information",
        sales: 1,
        rating: 2,
        price: 0.48,
        oldPrice: null,
        brand: "Milka",
        delivery: "Europe",
        categories: "Cookies",
        productType: "Bakery",
        link: "Bakery",
        id: 11

    },
    {
        image: "https://i.cbc.ca/1.3337104.1448485765!/fileImage/httpImage/salmon.jpg",
        title: "Red Fish",
        productDescription: "Space for 66 ",
        sales: 2,
        rating: 3,
        price: 4.48,
        oldPrice: 5.23,
        brand: "ExtraFreshFood",
        delivery: "Japan",
        categories: "Fish",
        productType: "Meat and fish",
        link: "Meat-and-fish",
        id: 12

    },
    {
        image: "https://cdn.pixabay.com/photo/2019/04/21/09/14/salmon-4143734_1280.jpg",
        title: "Salmon",
        productDescription: "Space for 66 ",
        sales: 5,
        rating: 3,
        price: 3.48,
        oldPrice: 4,
        brand: "ExtraFreshFood",
        delivery: "Japan",
        categories: "Fish",
        productType: "Meat and fish",
        link: "Meat-and-fish",
        id: 13

    },
    {
        image: "https://www.keesong.com/wp-content/uploads/2013/03/Frozen-chicken-vs-fresh-chicken.jpg",
        title: "Chicken leg",
        productDescription: "Space for 66 ",
        sales: 5,
        rating: 3,
        price: 8.48,
        oldPrice: 11,
        brand: "Chicken Farmer",
        delivery: "Russia",
        categories: "Meat",
        productType: "Meat and fish",
        link: "Meat-and-fish",
        id: 14

    },
    {
        image: "https://embed.widencdn.net/img/beef/1m4grjt6lt/800x600px/Back%20Ribs.psd?keep=c&u=7fueml",
        title: "Beef ribs",
        productDescription: "Space for 66 ",
        sales: 5,
        rating: 5,
        price: 9.48,
        oldPrice: 12,
        brand: "BeefCompany",
        delivery: "France",
        categories: "Meat",
        productType: "Meat and fish",
        link: "Meat-and-fish",
        id: 15

    },
    {
        image: "https://unopizzagrill.com.ua/image/cache/catalog/menu/water/cola1-1920x1281.jpg",
        title: "Coca-cola",
        productDescription: "The Coca-Cola Company is a beverage retailer ",
        sales: 77,
        rating: 5,
        price: 1.78,
        oldPrice: 2.32,
        brand: "Coca-cola",
        delivery: "America",
        categories: "Sweet Water",
        productType: "Drinks",
        link: "Drinks",
        id: 16

    },
    {
        image: "https://www.coca-cola.ua/content/dam/one/ua/uk/products/fanta-vitaminC.png",
        title: "Fanta",
        productDescription: "Fanta originated in Germany ",
        sales: 43,
        rating: 4,
        price: 1.78,
        oldPrice: null,
        brand: "Fanta",
        delivery: "Germany",
        categories: "Sweet Water",
        productType: "Drinks",
        link: "Drinks",
        id: 17

    },
    {
        image: "https://siverprod.com.ua/media/thumb/8c/fc/product-Voda-1-5l-mineralna-negazovana-Morshinska-1-6-_8cfca29bbacf2392d6d35943604d33dc.ipthumb800xprop.jpg",
        title: "New Water",
        productDescription: "the clear liquid that has no color, taste, or smell ",
        sales: 43,
        rating: 2,
        price: 0.58,
        oldPrice: 1.32,
        brand: "Morshinska",
        delivery: "Ukraine",
        categories: "Water",
        productType: "Drinks",
        link: "Drinks",
        id: 18

    },
    {
        image: "https://img2.zakaz.ua/13102020.1602605980.ad72436478c_2020-10-13_Tatyana_L/13102020.1602605980.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",
        title: "Bonuqa",
        productDescription: "the clear liquid that has no color, taste, or smell ",
        sales: 93,
        rating: 1,
        price: 0.18,
        oldPrice: 0.32,
        brand: "Bonuqa",
        delivery: "Ukraine",
        categories: "Water",
        productType: "Drinks",
        link: "Drinks",
        id: 19

    },
    {
        image: "https://chefspick.co.uk/wp-content/uploads/2018/02/Chefs-knife.jpg",
        title: "Chef's Knife (Budget)",
        productDescription: "description description description ",
        sales: 3,
        rating: 2,
        price: 4.18,
        oldPrice: null,
        brand: "Good Knifes",
        delivery: "Ukraine",
        categories: "Knife",
        productType: "Kitсhen",
        link: "Kitсhen",
        id: 20

    },
    {
        image: "https://cdn.cutleryandmore.com/products/large/34250.jpg",
        title: "Chef's Knife (Premium)",
        productDescription: "description description description ",
        sales: 34,
        rating: 5,
        price: 4.18,
        oldPrice: 6,
        brand: "Good Knifes",
        delivery: "Ukraine",
        categories: "Knife",
        productType: "Kitсhen",
        link: "Kitсhen",
        id: 21

    },
    {
        image: "https://assets.manufactum.de/p/079/079493/79493_01.jpg/four-edged-stainless-steel-grater.jpg",
        title: "Grater",
        productDescription: "description description description ",
        sales: 34,
        rating: 4,
        price: 1.18,
        oldPrice: 2,
        brand: "Kithen Itmes",
        delivery: "Europe",
        categories: "Grater",
        productType: "Kitсhen",
        link: "Kitсhen",
        id: 22

    },

]

export let CustomersAPI: ICustomers[] = [
    {
        text: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “",
        name: "Name and Surname",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        id: 1,
        page: 1
    },
    {
        text: "“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. “",
        name: "Name and Surname",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        id: 2,
        page: 1
    },
    {
        text: "“ This is an super space for your customers qoute.  “",
        name: "Name and Surname",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        id: 3,
        page: 1
    },
    {
        text: "“ Gpoood “",
        name: "Name and Surname",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        id: 4,
        page: 2
    },

]

export let BlogRecepis: IBlogRecepis[] = [
    {
        BGImg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-dinner-ideas-1632761205.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        tag: "Dinner Tips",
        title: "Our chef tips for a great and tasty dinner ready in 20 minutes 1",
        profileImg: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        profileName: "Author",
        date: "01.01.2022",
        rating: 2,
        id: 1
    },
    {
        BGImg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-dinner-ideas-1632761205.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        tag: "Dinner ",
        title: "Our chef tips for a great and tasty dinner 2",
        profileImg: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        profileName: "Author",
        date: "01.01.2021",
        rating: 1,
        id: 2
    },
    {
        BGImg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-dinner-ideas-1632761205.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        tag: "Tips",
        title: "Our chef 20 minutes 3",
        profileImg: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        profileName: "Author",
        date: "01.01.2022",
        rating: 4,
        id: 3
    },
    {
        BGImg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-dinner-ideas-1632761205.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        tag: "Tips",
        title: "Our chef 20 minutes 4",
        profileImg: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        profileName: "Author",
        date: "01.01.2022",
        rating: 3,
        id: 4
    },
    {
        BGImg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-dinner-ideas-1632761205.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
        tag: "Tips",
        title: "Our chef 20 minutes 5",
        profileImg: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        profileName: "Author",
        date: "01.01.2022",
        rating: 5,
        id: 5
    },
]
    


export interface ICategories {
    title: string,
    lvl: number,
    link: string,
    id: number

}
interface IRecepies {
    title: string,
    banner: string,
    id: number

}
export interface IProducts {
    image: string,
    title: string,
    productDescription: string,
    sales: number,
    rating: number,
    price: number,
    oldPrice: number | null,
    id: number,
    fromFarmers?: boolean,
    brand: string,
    delivery: string,
    categories: string,
    productType: string,
    link: string

}

interface ICustomers {
    text: string,
    name: string,
    image: string,
    id: number,
    page: number

}

interface IBlogRecepis {
    BGImg: string
    tag: string,
    title: string,
    profileImg?: string,
    profileName: string,
    date: string,
    rating: number,
    id: number
}

