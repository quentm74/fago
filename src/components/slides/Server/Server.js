import React from "react";
import styles from "./Server.css";
import {Slide} from "../../Slide/Slide";
import server_buffer from "./server_buffer.svg"
import server_client from "./server_client.svg"
import server_command from "./server_command.svg"
import server_default from "./server_default.svg"
import server_echo from "./server_echo.svg"
import server_exists from "./server_exists.svg"
import server_get from "./server_get.svg"
import server_main from "./server_main.svg"
import server_put from "./server_put.svg"
import server_quit from "./server_quit.svg"
import server_server from "./server_server.svg"
import pile0 from "./pile0.svg"
import pile1 from "./pile1.svg"
import pile2 from "./pile2.svg"
import pile3 from "./pile3.svg"
import pile4 from "./pile4.svg"
import pile5 from "./pile5.svg"
import pile6 from "./pile6.svg"
import pile7 from "./pile7.svg"
import pile8 from "./pile8.svg"
import pile9 from "./pile9.svg"
import pile10 from "./pile10.svg"
import pile11 from "./pile11.svg"
import pile12 from "./pile12.svg"
import pile13 from "./pile13.svg"
import pile14 from "./pile14.svg"
import safeMessage from "./safeMessage.svg"
import man_snprintf from "./man-snprintf.png"
import doEcho from './doEcho.svg'
import doEchoAfter from "./doEchoAfter.svg";
import sanitizeBuffer from "./sanitizeBuffer.svg";
import sanitizeBufferAfter from "./sanitizeBufferAfter.svg";

export const serverTitles = {
  title: "Analyse serveur",
  subtitles: [
    {
      title: "Fonctionnement",
      length: 1,
    },
    {
      title: "ECHO %x%x%x%x %x",
      length: 3,
    },
    {
      title: "Gestion des buffers",
      length: 4,
    },
  ],
};

export const Server = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <img alt="server" className={`${styles.server_img}`} src={server_default}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_main}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_server}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_client}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_buffer}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_command}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_get}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_exists}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_put}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_quit}/>
        <img alt="server" className={`fragment ${styles.server_img}`} src={server_echo}/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="doEcho" className={`${styles.doEcho}`} src={doEcho}/>
      </Slide>
      <Slide data-background-color="#000">
        <img alt="man" className={styles.man} src={man_snprintf}/>
        {/* variatique */}
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="doEcho" className={`${styles.doEcho}`} src={doEcho}/>
        <img alt="doEchoAfter" className={`fragment ${styles.doEcho}`} src={doEchoAfter}/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="sanitizeBuffer" className={`${styles.sanitizeBuffer}`} src={sanitizeBuffer}/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="safeMessage" className={`${styles.safeMessage}`} src={safeMessage}/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="pile" className={`${styles.pile_img}`} src={pile0}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile1}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile2}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile3}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile4}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile5}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile6}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile7}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile8}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile9}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile10}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile11}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile12}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile13}/>
        <img alt="pile" className={`fragment ${styles.pile_img}`} src={pile14}/>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img alt="sanitizeBuffer" className={`${styles.sanitizeBuffer}`} src={sanitizeBuffer}/>
        <img alt="sanitizeBufferAfter" className={`fragment ${styles.sanitizeBuffer}`} src={sanitizeBufferAfter}/>
      </Slide>
    </React.Fragment>
  );
};
