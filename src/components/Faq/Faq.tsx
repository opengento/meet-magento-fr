'use client';
import React, {ReactNode, useState} from "react";
import {
  FaBus,
  FaCompass,
  FaHeart,
  FaLanguage,
  FaShoppingBag,
  FaStar,
  FaTicketAlt,
  FaUser,
  FaTshirt
} from "react-icons/fa"
import Typography from "@/components/Typography/Typography";
import { IoIosArrowDown } from "react-icons/io";

const Faq = ({
  display = 'list',
  limit
}: {
  display: 'list' | 'grid',
  limit?: number,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList: {
    question: string;
    icon: React.ReactNode;
    answer: string;
  }[] = [
    {
      question: "Quelle est la date et le lieu de Meet Magento France 2025 ?",
      icon: <FaCompass color="#FF7DD1" size={16}/>,
      answer: "Meet Magento France 2025 se déroulera le 25 mars 2025, à L’Étoile Business Center à Paris.",
    },
    {
      question: "Quels types de conférences seront proposés lors de l'événement ?",
      icon: <FaUser color="#FF7DD1" size={16}/>,
      answer: "Des conférences business et techniques animées par des experts du digital, e-ommerçants, éditeurs et agences sont attendues au programme de Meet Magento France 2025 ! Découvrez dès à présent l’agenda des conférences et la liste des intervenants.",
    },
    {
      question: "Qui peut participer à Meet Magento France 2025 ?",
      icon: <FaHeart color="#FF7DD1" size={16}/>,
      answer: "Meet Magento France 2025 accueillera les acteurs de l’écosystème Magento et Adobe Commerce. E-commerçants, éditeurs, agences digitales se rencontreront lors de cet événement communautaire et tous avec les mêmes objectifs : l’échange et le partage.",
    },
    {
      question: "Comment puis-je acheter des billets pour l'événement ?",
      icon: <FaTicketAlt color="#FF7DD1" size={16}/>,
      answer: "Les billets pour Meet Magento France 2025 sont disponibles ! Rendez-vous sur la billeterie à partir du menu.",
    },
    {
      question: "Puis-je proposer un sujet de conférence pour Meet Magento France 2025 ?",
      icon: <FaStar color="#FF7DD1" size={16}/>,
      answer: "L’appel à speaker pour Meet Magento France 2025 est ouvert jusqu’au 31 janvier ! Soumettez votre candidature dès maintenant et rejoignez le panel d’experts qui prendra la parole à cette occasion !",
    },
    {
      question: "Que contient un billet pour Meet Magento France 2025 ?",
      icon: <FaShoppingBag color="#FF7DD1" size={16}/>,
      answer: "Lorsque vous achetez un billet pour Meet Magento France 2025 vous accédez à la totalité des conférences de l’événement, du petit-déjeuner d’accueil à cocktail dinatoire de clôture, en passant par le déjeuner networking.",
    },
    {
      question: "What if I don't speak French?",
      icon: <FaLanguage color="#FF7DD1" size={16}/>,
      answer: "You are still welcomed! Although the main track will be Business and in French, we will have a secondary track for English Speakers and Tech talks.",
    },
    {
      question: "Quels sont les transports à proximité de l'Étoile Business Center ?",
      icon: <FaBus color="#FF7DD1" size={16}/>,
      answer: "L'Étoile Business Center est idéalement situé à deux pas de l'Arc de Triomphe. Accès direct par les lignes de métro 1, 2 et 6 (station Charles de Gaulle - Étoile) et le RER A. De nombreuses lignes de bus desservent également le quartier.",
    },
    {
      question: "Y aura-t-il un vestiaire sur place ?",
      icon: <FaTshirt color="#FF7DD1" size={16}/>,
      answer: "Oui, un vestiaire gratuit sera à votre disposition pendant toute la durée de l'événement."
    },
  ];

  const renderFaqItem = (
    faq: { question: string, icon: ReactNode, answer: string },
    index: number
  ) => (
    <div
      className="bg-purple-100 p-4 cursor-pointer rounded-3xl"
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">{faq.icon}</div>
          <Typography variant="body2" color="dark" weight="medium">
            {faq.question}
          </Typography>
        </div>
        <IoIosArrowDown
          className={`flex-shrink-0 text-black bg-white p-1 rounded-full w-6 h-6 transform transition-transform ${
            openIndex === index ? "rotate-180" : ""
          }`}/>
      </div>
      {openIndex === index && (
        <div className="mt-2 pl-8">
          <Typography variant="body2" color="dark" weight="normal">
            {faq.answer}
          </Typography>
        </div>
      )}
    </div>
  );

  limit = !limit || limit > faqList.length ? faqList.length : limit;
  const faqWrap = [];
  if (display === 'grid') {
    faqWrap.push(faqList.slice(0, Math.ceil((limit) / 2)));
    faqWrap.push(faqList.slice(Math.ceil((limit) / 2), limit));
  } else {
    faqWrap.push(faqList.slice(0, limit));
  }

  let faqId = 0;
  return (
    <div className={display === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12' : ''}>
      {faqWrap.map((faqItems, index) => (
        <div className={`flex flex-col gap-4 ${display === 'grid' ? 'md:gap-8' : ''}`} key={index}>
          {faqItems.map((faq) => (
            renderFaqItem(faq, faqId++)
          ))}
        </div>
      ))}
    </div>
  );
}

export default Faq;
