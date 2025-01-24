import React from "react";
import Typography from "../Typography/Typography";

const Place = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 md:py-6">
      <div className="flex flex-col gap-4 ">
        <Typography
          variant="h3"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
        >
          L’Étoile Business Center
        </Typography>
        <div>
          <Typography variant="subtitle2" color="dark" weight="bold">
            En plein coeur de Paris, à deux pas des Champs-Élysées
          </Typography>
          <Typography variant="subtitle2" color="dark" weight="medium">
            21-25 Rue Balzac, 75008 Paris
          </Typography>
        </div>
        <Typography variant="body1" color="dark" weight="normal">
          Le 25 mars 2025, Meet Magento France se tiendra dans un cadre
          d’exception : l’Étoile Business Center, à Paris. Situé à deux pas des
          Champs-Élysées, ce lieu prestigieux, alliant élégance et modernité,
          incarne la classe française. Son architecture lumineuse et ses espaces
          raffinés en font l’écrin idéal pour une journée riche en échanges,
          partages d’expériences et exploration des dernières innovations autour
          de Magento et Adobe Commerce.
        </Typography>
      </div>
    </div>
  );
};

export default Place;
