import Image from "next/image";

const restaurants = [
    {
        name: "Poké Club",
        cuisine: "Cinese",
        price: "1,99 €",
        time: "15 - 25 min.",
        rating: 97,
        votes: 68,
        image: "/images/poke.jpg",
    },
    {
        name: "Pizza e Kebab da Beppy",
        cuisine: "Kebab",
        price: "1,49 €",
        time: "25 - 35 min.",
        rating: 100,
        votes: 19,
        image: "/images/pizza.png",
    },
    {
        name: "Chakramen & U Sushi1",
        cuisine: "Sushi",
        price: "2,49 €",
        time: "25 - 35 min.",
        rating: 95,
        votes: 18,
        image: "/images/sushi.png",
    },
    {
        name: "Piramide Pizza Kebab",
        cuisine: "Kebab",
        price: "1,99 €",
        time: "20 - 30 min.",
        rating: 100,
        votes: 29,
        image: "/images/piramide.png",
    },
];

export default function Restoraint() {
    return (
        <div className="px-4 py-6 md:px-8 lg:px-16 bg-[#fafafa] min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
                Cibo a domicilio a San Donà di Piave
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {restaurants.map((r, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col"
                    >
                        <div className="relative w-full h-44 md:h-48">
                            <Image
                                src={r.image}
                                alt={r.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-1 flex items-center font-semibold text-base shadow-sm">
                                <svg width="22" height="22" fill="none" className="mr-1">
                                    <circle cx="11" cy="11" r="10" stroke="#43B02A" strokeWidth="2"/>
                                    <path d="M7 12l3 3 5-6" stroke="#43B02A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {r.rating}%
                                <span className="text-gray-500 font-normal ml-1">({r.votes})</span>
                            </div>
                        </div>
                        <div className="px-5 pt-5 pb-3 flex-1 flex flex-col">
                            <div className="font-bold text-lg mb-1">{r.name}</div>
                            <div className="flex items-center mb-2">
                                <span className="bg-gray-100 text-gray-500 rounded-md text-sm px-3 py-0.5 font-semibold ml-1">
                                    {r.cuisine}
                                </span>
                            </div>
                            <div className="text-gray-900 font-normal text-base flex items-center">
                                <svg width="18" height="18" fill="none" className="mr-1">
                                    <path d="M9 1.5A7.5 7.5 0 1 1 1.5 9 7.5 7.5 0 0 1 9 1.5zm0 2v6l4 2" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                {r.price} · {r.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
