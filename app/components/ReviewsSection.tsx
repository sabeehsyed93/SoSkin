'use client';

import { motion } from 'framer-motion';

interface Review {
  text: string;
  name: string;
  id: number;
}

const reviews: Review[] = [
  {
    text: "On arrival I was met with a relaxing environment. Dr Wedad was knowledgeable and kind in her approach. She made me feel relaxed and with her guidance empowered me to make the right choices in terms of treatment that would benefit me. The treatment was painless and quick, I am very happy with the results I am seeing!",
    name: "Madena",
    id: 1,
  },
  {
    text: "Dr Sami was very professional. He listened to my concerns and gave me a fresher look which I loved. Thank you. Can't wait to be back!",
    name: "Cass",
    id: 2,
  },
  {
    text: "Had an amazing experience at SóSkin aesthetics. The team was very professional and they did an amazing job understand to exactly what I was looking for. Will be back!",
    name: "Giulia",
    id: 3,
  },
  {
    text: "I had been considering botox for some time but was unsure of the process, what sites to do  etc. I was extremely delighted that my first botox experience was with Dr Wedad & Dr Sami. The service received from the initial enquiry , discussion of my skin goals to the aftercare following treatment was perfect. The treatment itself was painless (with anaesthetic obviously!) and I was put at ease throughout. I'm very happy with the results  and the pleasant service from the team @ SoSkin.",
    name: "Maria",
    id: 4,
  },
  {
    text: "I recently had my first polynucleotide injection treatment with Dr. Wedad. She was incredibly professional, taking the time to explain the procedure in detail and addressing all my concerns with patience and expertise. Her gentle approach and attention to detail made me feel completely at ease throughout the process. The treatment itself was seamless, and I'm already noticing positive changes in my skin hydration. I highly recommend Dr. Wedad for her skill, professionalism, and caring demeanor.",
    name: "Sarah",
    id: 5,
  },
  {
    text: "My experience with Dr Wedad for my polynucleotide treatment was perfect, her care and explanation throughout the process was highly appreciated and she made me feel at ease and relaxed. Already looking forward to seeing her again!",
    name: "Emma",
    id: 6,
  },
  {
    text: "This is my second time having fillers with Dr Sami. He took time to explain the procedure and it was pain free. I love the outcome which gave me a natural fresh appearance just as I wanted.",
    name: "Lisa",
    id: 7,
  },
];

const ReviewCard = ({ text, name }: { text: string; name: string }) => (
  <motion.div 
    className="bg-white rounded-2xl p-6 shadow-lg w-[300px] md:w-[400px] h-[380px] flex flex-col shrink-0"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}
  >
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-6 h-6 text-[#ccab82] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
    <div className="flex flex-col h-full">
      <p className="text-gray-700 leading-relaxed italic flex-grow text-xs md:text-sm">&ldquo;{text}&rdquo;</p>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-[#ccab82] font-medium text-base">{name}</p>
      </div>
    </div>
  </motion.div>
);

const ReviewsSection = () => {
  // Duplicate reviews for continuous scrolling
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="w-full py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ccab82] to-white rounded-2xl transform scale-105" />
              <h2 className="relative px-6 py-3 text-3xl md:text-4xl font-medium">
                What Our Clients Say
              </h2>
            </div>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: ["-10%", "-60%"]
                }}
                transition={{
                  x: {
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {duplicatedReviews.map((review, index) => (
                  <ReviewCard key={`${review.id}-${index}`} text={review.text} name={review.name} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
