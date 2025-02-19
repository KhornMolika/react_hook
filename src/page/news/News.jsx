import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsComponent2 from "../../components/newsComponent/NewsComponent2";
import NewsComponent1 from "../../components/newsComponent/NewsComponent1";

export default function News() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1280 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1279, min: 960 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 959, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    },
  };

  const newsData = [
    {
      id: "1",
      image:
        "https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Srey-Sovandara/668764c45a354_1720149180_medium.png",
      title:
        "Messi ទាត់ប៉េណាល់ទីមិនចូល តែអាហ្សង់ទីននៅតែឈ្នះ អេក្វាឌ័រ ឡើងវគ្គ ១/២ Copa America",
      released_date: "2024-01-24",
      view: "24",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "លី ដារ៉ូ",
    },
    {
      id: "2",
      image:
        "https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Srey-Sovandara/66886a319859d_1720216080_medium.png",
      title: "បារាំងឡើងទៅប៉ះ អេស្ប៉ាញ ក្រោយទម្លាក់ព័រទុយហ្គាល់",
      released_date: "2024-03-24",
      view: "30",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "លី ដារ៉ូ",
    },
    {
      id: "3",
      image:
        "https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Sport-News/International-Sports/Freelancer-Sport/football(132)/6687e34f996c5_1720181580_medium.jpg",
      title:
        "Jude Bellingham រងពិន័យមិនឲ្យចូលលេង១ប្រកួត ក្រោយប្រព្រឹត្តសកម្មភាពមិនសមរម្យ",
      released_date: "2024-02-20",
      view: "50",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "សេរី មង្គល",
    },
    {
      id: "4",
      image:
        "https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/KOSAL/kosal073/6687a2e0627cf_1720165080_medium.jpg",
      title:
        "ធនាគារ ស្ថាបនា រៀបចំការប្រកួតបាល់ទាត់មិត្តភាពសប្បុរសធម៌រវាង Sathapana FC និងផ្ការីកគ្រប់រដូវដើម្បីរៃអង្គាសថវិកាជូនមន្ទីរពេទ្យកុមារអង្គរ",
      released_date: "2024-04-10",
      view: "28",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "លី ដារ៉ូ",
    },
    {
      id: "5",
      image: "https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Sport-News/International-Sports/Freelancer-Sport/football(131)/6685355533971_1720005960_medium.jpg",
      title:
        "Ten Hag តកុងត្រាជាមួយបិសាចក្រហម",
      released_date: "2024-02-20",
      view: "70",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "លី ដារ៉ូ",
    },
    {
      id: "6",
      image: "https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Srey-Sovandara/66874fa38b167_1720143720_medium.png",
      title:
        "Nagelsmann ៖ Lamine Yamal ជាក្មេងដែលមានទេពកោសល្យតែខ្ញុំផ្ដោតលើគេពេកទេ",
      released_date: "2024-05-25",
      view: "67",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "លី ដារ៉ូ",
    },
    {
      id: "7",
      image: "https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Sport-News/Local-Sports/Kun-Khmer-Boxing/Thon-Chantak/66866eb62da1e_1720086180_medium.jpg",
      title:
        "ស្រាយចម្ងល់អ្នកគាំទ្រមួយចំនួនថាតើ ធន់ ចាន់តាក់ រស់នៅអូស្ត្រលី ឬយ៉ាងណា...",
      released_date: "2024-01-24",
      view: "45",
      publicer_image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
      publicer_name: "នួន ស៊ីណា",
    },
  ];


  const news = newsData.map((item) => (
    <NewsComponent2
      image={item.image}
      title={item.title}
      released_date={item.released_date}
      view={item.view}
      publicer_image={item.publicer_image}
      publicer_name={item.publicer_name}
    />
  ));

  return (
    <div className="News flex justify-center items-center flex-col gap-5 mx-auto p-5 pb-20 bg-slate-200">
      {/* section 1: Top News */}
      <section className="w-full h-auto p-3">
        <h2 className="text-center text-4xl text-[#172554] font-bold mt-20 mb-7 ">
          ព័ត៌មានល្បីៗ
        </h2>
        <div className="grid grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full h-auto mx-auto">
          <div className=" xl:col-span-2 xl:row-span-2 w-full h-full mb-0">
            <NewsComponent1 />
          </div>
          <div className="w-full">
            <NewsComponent1 />
          </div>
          <div className="w-full">
            <NewsComponent1 />
          </div>
          <div className="w-full">
            <NewsComponent1 />
          </div>
          <div className="w-full">
            <NewsComponent1 />
          </div>
          <div className="w-full">
            <NewsComponent1 />
          </div>
        </div>
      </section>
      {/* section 2: Recent News */}
      <section className="w-full h-auto">
        <h2 className="text-center text-4xl text-[#172554] font-bold m-7 ">
          ព័ត៌មានថ្មីៗ
        </h2>
        <div
          style={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            responsive={responsive}
            showDots={true}
            renderDotsOutside={true}
            swipeable={true}
          >
            {news}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
