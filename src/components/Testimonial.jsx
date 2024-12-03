import Image from 'next/image';
import React from 'react';

const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            name: "Kilian Murphe",
            avatar: "/instructor1.png",
            quote: "I love the interactive elements and community forums where I can connect with other learners.",
        },
        {
            id: 2,
            name: "Kilian Murphe",
            avatar: "/instructor1.png",
            quote: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight!",
        },
        {
            id: 3,
            name: "Kilian Murphe",
            avatar: "/instructor1.png",
            quote: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.",
        },
        {
            id: 4,
            name: "Kilian Murphe",
            avatar: "/instructor1.png",
            quote: "It&apos;s not just about physical health but mental and emotional well-being too.",
        },
        {
            id: 5,
            name: "Kilian Murphe",
            avatar: "/instructor1.png",
            quote: "I love the flexibility of the courses. I can learn at my own pace and revisit the material whenever I need to.",
        },
        {
            id: 6,
            name: "Kilian Murphe",
            avatar: "/instructor1.png",
            quote: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."
        }
    ];

    return (
        <div className="container mx-auto h-[500px] lg:mt-0 sm:mt-[500px]">
            <div className="text-center">
                <p className="text-3xl font-semibold mb-8">Learners love EduPath. See why <br />they rate us 4.9 out of 5</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-2 lg:gap-6">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-customBlue border border-borderBlue rounded-lg shadow-sm flex-shrink-0 p-6 w-full h-fit"
                    >
                        <div className="relative">
                            {/* Quote positioned on the top-right */}
                            <Image
                                src="/quote.png"
                                alt="Quote"
                                width={20}
                                height={20}
                                className="absolute top-0 right-1"
                            />

                            {/* User Image and Name */}
                            <div className="flex flex-col items-start mb-4">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <span className="mt-2 text-gray-800 font-medium text-sm">{testimonial.name}</span>
                            </div>
                        </div>
                        {/* Content */}
                        <p className="font-normal text-sm mb-6">&quot;{testimonial.quote}&quot;</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-10'>
                <Image
                    src="/dots.png"
                    alt="Dots"
                    width={90}
                    height={100}
                />
            </div>
        </div>
    );
};

export default Testimonial;