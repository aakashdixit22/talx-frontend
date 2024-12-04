import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="z-50 rounded-md flex flex-col antialiased bg-transparent bg-dot-thick-neutral-800 items-center justify-center relative overflow-hidden">
      <h2 className="lg:text-5xl text-4xl md:text-5xl font-semibold text-gray-100 mb-6">Testimonials</h2>
      
      {/* First Row: Moving Right, Fast Speed */}
      <div className="h-[15rem] mb-9 xl:h-[12rem] xl:mb-8 md:h-[14rem] md:mb-2">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
          
        />
      </div>

      {/* Second Row: Moving Left, Slower Speed */}
      <div className="h-[15rem] mb-5 xl:h-[12rem] md:h-[14rem] ">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
         
        />
      </div>

      {/* Third Row: Moving Right, Slowest Speed
      <div className="h-[12rem] mb-6">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slowest"
        />
      </div> */}
    </div>
  );
}

// const testimonials = [
//   {
//     quote: "To be, or not to be, that is the question...",
//     name: "William Shakespeare",
//     title: "Hamlet",
//     image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//     image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Edgar_Allan_Poe_2_retouched_and_transparent_bg.png",
//   },
//   {
//     quote: "It is a truth universally acknowledged, that a single man...",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//     image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg",
//   },
//   {
//     quote: "Call me Ishmael. Some years ago—never mind how long precisely...",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//     image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Herman_Melville.jpg",
//   },
// ];
// const testimonials = [
//   {
//     quote: "This platform made job searching so much easier! The chat assistant gave me real-time tips on the latest tech stacks.",
//     name: "Sarah Thompson",
//     title: "Full-Stack Developer",
//     image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sarah_Thompson.png",
//   },
//   {
//     quote: "I posted a job on the platform, and within days, I found the perfect candidate. Plus, the resume analyzer feature is a game changer!",
//     name: "John Carter",
//     title: "HR Manager",
//     image: "https://upload.wikimedia.org/wikipedia/commons/8/88/John_Carter.png",
//   },
//   {
//     quote: "The resume analyzer gave me insights into my resume that I hadn't even thought of. It helped me land a great role!",
//     name: "Emily Davis",
//     title: "Data Scientist",
//     image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Emily_Davis.png",
//   },
//   {
//     quote: "Being able to chat with the assistant about upcoming trends and job-related issues in real time was invaluable.",
//     name: "Michael Lee",
//     title: "Software Engineer",
//     image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Michael_Lee.png",
//   },
//   {
//     quote: "I loved how interactive the job portal is! I could easily apply for jobs and ask the assistant about the latest industry trends.",
//     name: "Aisha Khan",
//     title: "UX Designer",
//     image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Aisha_Khan.png",
//   },
// ];
const testimonials = [
  {
    quote: "This platform made job searching so much easier! The chat assistant gave me real-time tips on the latest tech stacks.",
    name: "Sarah Thompson",
    title: "Full-Stack Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "I posted a job on the platform, and within days, I found the perfect candidate. Plus, the resume analyzer feature is a game changer!",
    name: "John Carter",
    title: "HR Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "The resume analyzer gave me insights into my resume that I hadn't even thought of. It helped me land a great role!",
    name: "Emily Davis",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote: "Being able to chat with the assistant about upcoming trends and job-related issues in real time was invaluable.",
    name: "Michael Lee",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    quote: "I loved how interactive the job portal is! I could easily apply for jobs and ask the assistant about the latest industry trends.",
    name: "Aisha Khan",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];
