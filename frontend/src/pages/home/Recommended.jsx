import {useEffect, useState} from "react";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {BookCard} from "../books/BookCard.jsx";

export const Recommended = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then((data) => setBooks(data))
    }, []);

    return (
        <div className="py-16">
            <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >

                {
                    books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide>
                            <BookCard key={index} book={book}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}