import React from "react";
import Link from "next/link";

/* Props del cmp: 
    - id: del proyecto 
    - img: url de la imagen que se muestra en la tarjeta
    - name: el nombre del proyecto o trabajo
    - description del proyecto
    - onClick: funcion que se ejecuta al hacer click (ya no lo usamos)*/
const WorkCard = ({ id, img, name, description }) => {
  return (
    <Link href={`/projects/${id}`}>
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
    </Link>
  );
};

export default WorkCard;
