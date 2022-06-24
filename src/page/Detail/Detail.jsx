import React from "react";
import style from "./Detail.module.scss";

export default function Detail() {
  return (
    <>
      <div className={style.container}>
        <div className={style.div}>
          <img
            className={style.img}
            src="https://picsum.photos/200/300"
            alt="img"
            srcset=""
          />
        </div>

        <div className={style.div}>
          <h3>
            <strong>title:</strong> Title product
          </h3>
          <div>
            <strong>id:</strong> 5454
          </div>
          <div>
            <strong>price:</strong> 350$
          </div>
          <div>
            <strong>category:</strong> string;
          </div>
          <div>
            <strong>description:</strong> Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </div>
        </div>
      </div>
    </>
  );
}
