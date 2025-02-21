'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DoctorProfile = ({ 
  name, 
  image, 
  description 
}: { 
  name: string;
  image: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row gap-8 items-start mb-16 last:mb-0"
    >
      <div className="w-full lg:w-1/3">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
          <Image
            src={`/${image}`}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-[#5C4033]">{name}</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const doctors = [
    {
      name: "Dr Wedad Abdelrahman",
      image: "images/Wedad pic.JPG",
      description: "Dr Wedad Abdelrahman is a fully qualified UK-trained consultant dermatologist, registered with the General Medical Council. After graduating from Queen's University of Belfast with distinction, she completed her four year speciality training programme in Northern Ireland.\n\nBefore completing training, Dr Abdelrahman embarked on prestigious fellowships including the Therapeutic Use of Laser where she worked at a leading centre for burns and plastic surgery in Swansea (Wales) and in medical dermatology at the world renowned centre- St John's Institute, managing medically complex dermatology patients. She now works as a consultant there running paediatric and adult clinics as well as specialist clinics.\n\nShe is a qualified prescriber for ZO® Skin which is prescription only medical-grade skincare products. Dr Abdelrahman has published and presented extensively, both at a national and international level and has been involved in a number of clinical trials. She has a keen interest in medical education and holds a Master of Science (MSc) in Clinical Education.\n\nDr Abdelrahman has true passion and expertise in the field of skin. As a dermatologist she has a deep understanding of skin, the ageing process and how to best enhance existing features. Her approach is rounded, blending aesthetic techniques and products in a tactful manner to plan with the client for realistic and pleasing outcomes."
    },
    {
      name: "Dr Samiullah Dost",
      image: "images/Sami pic.JPG",
      description: "Dr Samiullah Dost graduated from Kings College London with multiple distinctions. He then went on to undertake a highly competitive 2 year research centred academic foundation training post in the heart of London. He has completed medical training blocks in emergency medicine, general medicine, haematology and also has experience working in surgical teams covering cardiac, thoracic and vascular surgery.\n\nDr Dost is highly motivated and driven. He has published medical literature in multiple journals and has presented his research at national and international conferences. Having additionally completed an Intercalated BSc in Anatomy, Developmental & Human Biology, it has given Dr Dost a strong grounding and understanding of anatomy, specifically facial anatomy.\n\nDr Dost utilises his knowledge of anatomy, practical skills and his strong eye for detail to set out realistic end points that can be achieved for each client. Teaching is something he is extremely passionate about; he is heavily involved in providing the next generation of doctors teaching from all over the world. This passion also translated into him starting his own medical education Instagram page which has grown to have over 15k followers."
    }
  ];

  return (
    <div className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-medium mb-16 text-center text-[#5C4033]"
        >
          Meet Our Doctors
        </motion.h1>
        <div className="space-y-24">
          {doctors.map((doctor, index) => (
            <DoctorProfile
              key={index}
              name={doctor.name}
              image={doctor.image}
              description={doctor.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
