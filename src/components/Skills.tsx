import React from 'react'
import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';
import { Card, Grid, Text, Row } from "@nextui-org/react";
import Image from 'next/image';
import nextIcon from './icons/next-js.svg';
import vercelIcon from './icons/vercel-icon-svgrepo-com.svg';
import wordpressIcon from './icons/wordpress-color-svgrepo-com.svg';
import pleskIcon from './icons/plesk-svgrepo-com.svg';
import yoastIcon from './icons/yoast-svgrepo-com.svg';

function Skills() {
    const list = [
        {
            id: 1,
            title: "Front End",
            img: "pw/AJFCJaUXIWcyDrMLMfK1BAziYYNDF93Dqb2EqaMQWX-Sesx_6iGws75mRi_bcAYLc7lwOzKBlrdCvWRTgosLQitAjKea23s_WA8xiYw4AaeCy0EU565aPQ=w2400",
            description: "Retro Audio is my first project. It is a website for a fictional company that sells retro audio equipment.It was built using React, Next.js, and Tailwind CSS. It is hosted on Vercel.",
            icons: [{
                id: 1,
                title: "Next.js",
                url: "https://nextjs.org/",
                icon: <Image src={nextIcon} alt="Next.js" width={30} height={30} />
            }, {
                id: 2,
                title: "Vercel",
                url: "https://vercel.com/",
                icon : <Image src={vercelIcon} alt="Vercel" width={30} height={30} />
            }]
        },
        {
            id: 2,
            title: "Back End",
            img: "pw/AJFCJaV2ZCSjeSFMUeJiSJftrM0u_DAQWhIuzwFcpYcDowPs9PtxnWNnKIKLH5g2kHtzlkVYrCbeLpTzlg1UeQcbTGyW4a141qw-ud3bSkV1_dUoTgroRQ=w2400",
            description: "$120",
            icons: [{
                id: 1,
                title: "Wordpress",
                url: "https://wordpress.com/",
                icon: <Image src={wordpressIcon} alt="Next.js" width={30} height={30} />
            }, {
                id: 2,
                title: "Plesk",
                url: "https://www.plesk.com/",
                icon : <Image src={pleskIcon} alt="Vercel" width={30} height={30} />
            }, {
                id: 3,
                title: "Yoast",
                url: "https://yoast.com/",
                icon : <Image src={yoastIcon} alt="Vercel" width={30} height={30} />
            }]
        },
        {
            id: 3,
            title: "Other",
            img: "pw/AJFCJaV2ZCSjeSFMUeJiSJftrM0u_DAQWhIuzwFcpYcDowPs9PtxnWNnKIKLH5g2kHtzlkVYrCbeLpTzlg1UeQcbTGyW4a141qw-ud3bSkV1_dUoTgroRQ=w2400",
            description: "$120",
            icons: [{
                id: 1,
                title: "Wordpress",
                url: "https://wordpress.com/",
                icon: <Image src={wordpressIcon} alt="Next.js" width={30} height={30} />
            }, {
                id: 2,
                title: "Plesk",
                url: "https://www.plesk.com/",
                icon : <Image src={pleskIcon} alt="Vercel" width={30} height={30} />
            }, {
                id: 3,
                title: "Yoast",
                url: "https://yoast.com/",
                icon : <Image src={yoastIcon} alt="Vercel" width={30} height={30} />
            }]
        }
      ];

  return (
    <div>
        <header className={styles.header}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .5 }}}
            >
                <h1 className='title'>
                    Skills
                </h1>
            </motion.div>
        </header>
        <div className={styles.container}>
        <Grid.Container gap={0} justify="space-around" css={{p: 50}} >
            {list.map((item, index) => (
                <Grid className={styles.cardGrid} key={index}>
                    <Card isHoverable className={styles.card}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, textAlign: "center" }}> 
                            <Text b className={styles.itemTitle}>{item.title}</Text>
                        </Card.Header>
                        <Card.Image
                            css={{p : 0}}
                            src={"https://lh3.googleusercontent.com/" + item.img}
                            referrerPolicy='no-referrer'
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt={item.title}
                        />
                        <Card.Footer isBlurred css={{ justifyItems: "flex-start" }}>
                        <Row wrap="wrap" justify="space-between" align="center">
                            <div className={styles.iconList}>
                                {item.icons.map((icon, index) => (
                                    <div key={index} className={styles.iconItem}>
                                        <a>{icon.icon}</a>
                                    </div>
                                ))}
                            </div>
                        </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
        </div>
    </div>
  )
}

export default Skills