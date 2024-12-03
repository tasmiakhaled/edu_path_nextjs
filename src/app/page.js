import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PopularCourses from "@/components/PopularCourses";
import Provide from "@/components/Provide";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
      <main className="">
        <Header></Header>
        <Banner></Banner>
        <PopularCourses></PopularCourses>
        <Provide></Provide>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </main>     
  );
}
