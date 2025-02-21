'use client';

import { motion } from 'framer-motion';

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const ServiceCard = ({ category }: { category: ServiceCategory }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-30 bg-gradient-to-br from-white to-[#ccab82]/10 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#ccab82]/20"
    >
      <h2 className="text-3xl font-medium mb-6 text-[#5C4033]">{category.title}</h2>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700 text-lg">{item.name}</span>
            <span className="text-[#5C4033] font-semibold text-lg">{item.price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const services: ServiceCategory[] = [
    {
      title: "Botox",
      items: [
        { name: "One area", price: "£200" },
        { name: "Two areas", price: "£320" },
        { name: "Three Areas", price: "£380" },
        { name: "Touch up", price: "£60" },
      ]
    },
    {
      title: "Dermal Filler",
      items: [
        { name: "Cheek 1ml", price: "£300" },
        { name: "Cheek 2ml", price: "£530" },
        { name: "Nasolabial folds 1ml", price: "£330" },
        { name: "Nasolabial folds 2ml", price: "£530" },
        { name: "Marionette lines 1ml", price: "£330" },
        { name: "Marionette lines 2ml", price: "£530" },
      ]
    },
    {
      title: "PRP",
      items: [
        { name: "Hair - 3 Sessions", price: "£1100" },
        { name: "Hair - 6 Sessions", price: "£2000" },
      ]
    }
  ];

  return (
    <div className="w-full py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-medium mb-16 text-center text-[#5C4033]"
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category, index) => (
            <ServiceCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
