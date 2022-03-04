import React from "react";
import profilePicture from "../../../static/assets/images/bio/foto-perfil.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita
        tempore soluta nostrum, consequuntur neque placeat beatae eum
        accusantium et error incidunt libero dolores reprehenderit? Ut ipsam
        animi doloribus ad! Ducimus voluptatem, animi alias iste quas mollitia!
        Veritatis facere, ipsum veniam beatae eligendi nostrum autem possimus
        doloremque a quasi recusandae tenetur excepturi, consequuntur voluptate
        error vel nam ea quia rem! Aliquid debitis totam qui blanditiis itaque,
        impedit animi harum autem aliquam, vel error aspernatur repellendus
        quisquam eligendi ipsam, tenetur sit accusamus explicabo distinctio
        praesentium voluptatum rem. Repudiandae doloremque distinctio quis.
      </div>
    </div>
  );
}
