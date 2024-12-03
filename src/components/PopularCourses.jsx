import Image from 'next/image';
import React from 'react';

const PopularCourses = () => {
    const courses = [
        {
            id: 1,
            level: "Beginner",
            category: "Nutrition and Diet",
            title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
            rating: "4.9 (566)",
            duration: "6h 34m",
            lessons: "3 Lessons",
            instructor: "Kilian Murphe",
            price: "$40",
            image: "/course1.png",
            instructorImage: "/instructor1.png"
        },
        {
            id: 2,
            level: "Intermediate",
            category: "Health and Wellness",
            title: "Parenting in the Digital Age: Navigating Screen Time",
            rating: "4.9 (456)",
            duration: "6h 34m",
            lessons: "3 Lessons",
            instructor: "Sarah Hopkins",
            price: "$50",
            image: "/course2.png",
            instructorImage: "/instructor2.png"
        },
        {
            id: 3,
            level: "Beginner",
            category: "Nutrition and Diet",
            title: "Holistic Health: Integrating Mind, Body, and Spirit",
            rating: "4.9 (389)",
            duration: "6h 34m",
            lessons: "3 Lessons",
            instructor: "Luna Karim",
            price: "$50",
            image: "/course3.png",
            instructorImage: "/instructor3.png"
        },
        {
            id: 4,
            level: "Beginner",
            category: "Nutrition and Diet",
            title: "Introduction to healthy Diet and Nutrition",
            rating: "4.9 (566)",
            duration: "6h 34m",
            lessons: "3 Lessons",
            instructor: "Kate Winslet",
            price: "$50",
            image: "/course4.png",
            instructorImage: "/instructor4.png"
        }
    ];

    return (
        <div className="container mx-auto w-[1000px] h-[670px] py-10">
            <div className="flex justify-between mb-8">
                <div className='lg:mt-2 sm:mt-[600px]'> 
                    <h2 className="text-3xl font-bold">Our popular courses</h2>
                    <p className="text-gray-500 mt-2 text-xs">
                        By taking proactive steps to nurture mental health, we can enhance our quality of life, <br />
                        build resilience, and foster a sense of inner peace and balance.
                    </p>
                </div>
                <div className='mt-12'>
                    <Image alt="Arrow" src="/arrow.png" height={56} width={90} />
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border border-gray-200 rounded-lg w-[250px] h-[390px]"
                    >
                        <div className="relative w-full h-36">
                            <Image
                                src={course.image}
                                alt={course.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center space-x-2 mb-3">
                                <span className="text-[10px] border border-orange-500/10 bg-orange-100 px-2 py-1 rounded">
                                    {course.level}
                                </span>
                                <span className="text-[10px] border border-yellow-500/20 bg-green-100 px-2 py-1 rounded">
                                    {course.category}
                                </span>
                            </div>

                            <h3 className="text-sm font-bold mb-2">{course.title}</h3>
                            <div className="flex items-center font-semibold text-xs">
                                <Image className='mr-1' alt="Rating" src="/rating.png" height={70} width={70} />
                                <span>{course.rating}</span>
                            </div>

                            <div className='flex items-center mt-10'>
                                <Image className='mr-1' alt="Watch" src="/watch.png" height={20} width={20} />
                                <p className='text-xs mr-3'>{course.duration}</p>
                                <Image
                                    alt="Line"
                                    src="/Line3.png"
                                    height={2}
                                    width={1}
                                    className="h-[15px] w-[-50px] mr-3"
                                />
                                <Image className='mr-1' alt="Book" src="/book.png" height={20} width={20} />
                                <p className='text-xs'>{course.lessons}</p>
                            </div>
                        </div>

                        <div className='border-t-[1px] border-gray-200 w-[90%] mx-auto'>
                            <div className="w-full px-4 pb-4 flex justify-between items-center text-sm">
                                <div className="flex items-center mt-2">
                                    <Image
                                        src={course.instructorImage}
                                        alt={course.instructor}
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                    <span className="ml-2 font-medium text-gray-700">
                                        {course.instructor}
                                    </span>
                                </div>
                                {course.id === 3 ? (
                                    <Image
                                        alt="Enrolled"
                                        src="/enrolled.png"
                                        width={55} // Set the width and height of the enrolled image
                                        height={25}
                                        className='mt-2'
                                    />
                                ) : (
                                    <span className="font-semibold text-gray-800 mt-2">{course.price}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;