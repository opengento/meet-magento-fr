"use client";
import React, { useState } from "react";
import {
  FaTicketAlt,
  FaStar,
  FaShoppingBag,
  FaCompass,
  FaUser,
  FaHeart,
} from "react-icons/fa";
import Typography from "../Typography/Typography";
import Link from "next/link";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList: {
    question: string;
    icon: React.ReactNode;
    answer: string;
  }[] = [
    {
      question: "Quelle est la date et le lieu de Meet Magento France 2025 ?",
      icon: <FaCompass color="#FF7DD1" size={16} />,
      answer:
        "Meet Magento France 2025 se déroulera le 25 mars 2025, à L’Étoile Business Center à Paris.",
    },
    {
      question:
        "Quels types de conférences seront proposés lors de l'événement ?",
      icon: <FaUser color="#FF7DD1" size={16} />,
      answer:
        "Des conférences business et techniques animées par des experts du digital, E-Commerçants, éditeurs et agences sont attendues au programme de Meet Magento France 2025 ! Découvrez dès à présent l’agenda des conférences et la liste des intervenants.",
    },
    {
      question: "Qui peut participer à Meet Magento France 2025 ?",
      icon: <FaHeart color="#FF7DD1" size={16} />,
      answer:
        "Meet Magento France 2025 accueillera les acteurs de l’écosystème Magento et Adobe Commerce. E-commerçants, éditeurs, agences digitales se rencontreront lors de cet événement communautaire et tous avec les mêmes objectifs : l’échange et le partage.",
    },
    {
      question: "Comment puis-je acheter des billets pour l'événement ?",
      icon: <FaTicketAlt color="#FF7DD1" size={16} />,
      answer:
        "Les billets pour Meet Magento France 2025 seront bientôt disponibles ! Restez connectés.",
    },
    {
      question:
        "Puis-je proposer un sujet de conférence pour Meet Magento France 2025 ?",
      icon: <FaStar color="#FF7DD1" size={16} />,
      answer:
        "L’appel à speaker pour Meet Magento France 2025 est ouvert jusqu’au 31 janvier ! Soumettez votre candidature dès maintenant et rejoignez le panel d’experts qui prendra la parole à cette occasion !",
    },
    {
      question: "Que contient un billet pour Meet Magento France 2025 ?",
      icon: <FaShoppingBag color="#FF7DD1" size={16} />,
      answer:
        "Lorsque vous achetez un billet pour Meet Magento France 2025 vous accédez à la totalité des conférences de l’événement, du petit-déjeuner d’accueil à cocktail dinatoire de clôture, en passant par le déjeuner networking. ",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {faqList.map((faq, index) => (
        <div
          key={index}
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
            <svg
              className={`w-6 h-6 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="mt-2 pl-8">
              <Typography variant="body2" color="dark" weight="normal">
                {faq.answer}
              </Typography>
            </div>
          )}
        </div>
      ))}
      <Typography variant="small" color="dark" weight="normal">
        Pour toute autre question, consultez notre{" "}
        <Link href="#" className="underline">
          FAQ complète
        </Link>{" "}
        ou écrivez-nous via le{" "}
        <Link href="#" className="underline">
          formulaire de contact
        </Link>
      </Typography>
    </div>
  );
};

export default Faq;
