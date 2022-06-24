import React, { HtmlHTMLAttributes, JSXElementConstructor } from "react";
import style from "./Contact.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const Contact: React.FC = (): JSX.Element => {
  return (
    <div className={style.contact} id="contact">
      <h1 className={style.heading}>
        {" "}
        <span>contact</span> us{" "}
      </h1>

      <div className={style.icons_container}>
        <div className={style.icons}>
          <HiOutlineLocationMarker className={style.i} />
          <h3>address</h3>
          <p> Endon, Stoke-on-Trent ST9 9BG,UK</p>
        </div>

        <div className={style.icons}>
          <a href="mailto: trushkokateryna@gmail.com">
            <AiOutlineMail className={style.i} />
          </a>

          <h3>email</h3>
          <p>trushkokateryna@gmail.com</p>
          <p>support@gmail.com</p>
        </div>

        <div className={style.icons}>
          <a href="tel:+4407748945571">
            <AiOutlinePhone className={style.i} />
          </a>
          <h3>phone</h3>
          <p>+44 0774-8945-571</p>
          <p>+38 067-633-45-60</p>
        </div>
      </div>

      <div className={style.row}>
        <form action="">
          <h3>get in touch</h3>
          <div className={style.inputBox}>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
          </div>
          <div className={style.inputBox}>
            <input type="number" placeholder="your number" />
            <input type="text" placeholder="your subject" />
          </div>
          <textarea placeholder="your message" cols={30} rows={10} />
          <input type="submit" value="send message" className="btn" />
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38346.95268025811!2d-2.1422744530801703!3d53.07993991042535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4172401a3eed%3A0x3159662540a726da!2sEndon%2C%20Stoke-on-Trent!5e0!3m2!1sen!2suk!4v1656079038561!5m2!1sen!2suk"
          className={style.map}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
