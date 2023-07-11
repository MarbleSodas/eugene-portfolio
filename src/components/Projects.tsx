import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import { Card, Grid, Text, Button, Row, Modal, useModal } from "@nextui-org/react";
import Image from 'next/image';
import { useState } from 'react';
import nextIcon from './icons/next-js.svg';
import typescriptIcon from './icons/typescript-official-svgrepo-com.svg';
import vercelIcon from './icons/vercel-icon-svgrepo-com.svg';
import wordpressIcon from './icons/wordpress-color-svgrepo-com.svg';
import pleskIcon from './icons/plesk-svgrepo-com.svg';
import yoastIcon from './icons/yoast-svgrepo-com.svg';
import javascriptIcon from './icons/javascript-svgrepo-com.svg';
import graphqlIcon from './icons/graphql-svgrepo-com.svg';
import reactIcon from './icons/react-javascript-js-framework-facebook-svgrepo-com.svg';
import sassIcon from './icons/sass-svgrepo-com.svg';

function Projects() {
    //products list
    const list = [
        {
            id: 1,
            title: "Marble Blog",
            img: "pw/AIL4fc92p0BBpN8tWDBw3KP-XGDmEmhGXcp0qMj84pLauBJg5IZc5zAiTboGqvhVlMxcyf2TOiy39wxYBXosC9_wL1UBeqRdWNsOgUr9pWfbXk8GsVDYDw=w2400",
            description: "Marble blog is a personal blog I made, which utilizes Next.js, GraphCMS, and is hosted on Vercel. It was coded in Javascript and has a nice comment feature for each post!",
            webAddress: "https://marble-blog.vercel.app/",
            gitRepo: "https://github.com/MarbleSodas/MarbleBlog",
            icons: [{
                id: 1,
                title: "React",
                url: "https://react.dev/",
                icon : <Image src={reactIcon} alt="Next" width={30} height={30} />
            },{
                id: 2,
                title: "Sass",
                url: "https://sass-lang.com/",
                icon: <Image src={sassIcon} alt="Javascript" width={30} height={30} />
            },{
                id: 3,
                title: "Graphql",
                url: "https://graphql.org/",
                icon : <Image src={graphqlIcon} alt="Graphql" width={30} height={30} />
            }]
        },
        {
            id: 2,
            title: "Rancho Drive Train",
            img: "pw/AJFCJaV2ZCSjeSFMUeJiSJftrM0u_DAQWhIuzwFcpYcDowPs9PtxnWNnKIKLH5g2kHtzlkVYrCbeLpTzlg1UeQcbTGyW4a141qw-ud3bSkV1_dUoTgroRQ=w2400",
            description: "Rancho Drive Train is a website for a local business that sells and repairs drive train transmissions for off-road vehicles. It was built using Wordpress, Elementor, PHP, and is hosted on Plesk.",
            webAddress: "https://ranchodrivetrain.com/",
            gitRepo: "",
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
                icon : <Image src={yoastIcon} alt="Yoast" width={30} height={30} />
            }]
        },
        {
            id: 3,
            title: "Retro Audio",
            img: "pw/AJFCJaUXIWcyDrMLMfK1BAziYYNDF93Dqb2EqaMQWX-Sesx_6iGws75mRi_bcAYLc7lwOzKBlrdCvWRTgosLQitAjKea23s_WA8xiYw4AaeCy0EU565aPQ=w2400",
            description: "Retro Audio is my first project. It is a website for a fictional company that sells retro audio equipment.It was built using React, Next.js, CSS, and is hosted on Vercel. I put a lot of work into the animation of the page and parallax effects of the background of this page. Retro Audio is a responsive, mostly one-page website, with the exception being the support page, which is linked on a different page.",
            webAddress: "https://retroaudio.page/",
            gitRepo: "https://github.com/MarbleSodas/retro-audio",
            icons: [{
                id: 1,
                title: "Next.js",
                url: "https://nextjs.org/",
                icon: <Image src={nextIcon} alt="Next.js" width={30} height={30} />
            }, {
                id: 2,
                title: "Typscript",
                url: "https://www.typescriptlang.org/",
                icon : <Image src={typescriptIcon} alt="Typescript" width={30} height={30} />
            }, {
                id: 3,
                title: "Vercel",
                url: "https://vercel.com/",
                icon : <Image src={vercelIcon} alt="Vercel" width={30} height={30} />
            }
        ]
        },
      ];

    //state for selected product
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardPress = (itemId: number) => {
        setSelectedItemId(itemId);
        setIsModalOpen(true);
      };

  return (
    <div className='page' id='projects'>
        <header className={styles.header}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .75}}}
            >
                <h1 className='title'>
                    Projects
                </h1>
            </motion.div>
        </header>
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .75}}}
        >
        <Grid.Container gap={0} justify="space-evenly" >
            {list.map((item, index) => (
                <Grid className={styles.cardGrid} key={index}>
                    <Card isPressable isHoverable onPress={() => handleCardPress(item.id)}>
                        <Card.Image
                            css={{p : 0}}
                            src={"https://lh3.googleusercontent.com/" + item.img}
                            referrerPolicy='no-referrer'
                            objectFit="scale-down"
                            width="100%"
                            height="100%"
                            alt={item.title}
                        />
                        <Card.Footer isBlurred css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b className={styles.itemTitle}>{item.title}</Text>
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
        </motion.div>
        <Modal
            noPadding
            scroll
            width="900px"
            open={isModalOpen} onClose={() => setIsModalOpen(false)}
            className={styles.modal}
        >
            <Modal.Header className={styles.modalHeader}>
            <Image 
            className={styles.modalImage}
            width={900}
            height={500}
            alt={list.find(item => item.id === selectedItemId)?.title ?? "Modal Image"} 
            src={"https://lh3.googleusercontent.com/" + list.find(item => item.id === selectedItemId)?.img} 
            referrerPolicy='no-referrer'
            />
            <Row wrap="wrap" justify="space-evenly" align="center" css={{p: 10}}>
                <Text b className={styles.itemTitle}>{list.find(item => item.id === selectedItemId)?.title}</Text>
                <div className={styles.iconList}>
                    {list.find(item => item.id === selectedItemId)?.icons.map((icon, index) => (
                        <div key={index} className={styles.iconItem}>
                            <a href={icon.url} target="_blank">{icon.icon}</a>
                        </div>
                    ))}
                </div>
            </Row>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.modalBody}>
                    <Text className={styles.modalText}>
                        {list.find(item => item.id === selectedItemId)?.description}
                    </Text>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Row wrap="wrap" justify="space-evenly" align="center" css={{p: 10}}>
                <Button auto flat color="success" onPress={() => window.open(list.find(item => item.id === selectedItemId)?.webAddress ?? "")}>Live</Button>
                {list.find(item => item.id === selectedItemId)?.gitRepo !== "" && (
                    <Button auto flat color="secondary" onPress={() => window.open(list.find(item => item.id === selectedItemId)?.gitRepo ?? "")}>GitHub</Button>
                )}
                <Button auto flat color="error" onPress={() => setIsModalOpen(false)}>
                Close
            </Button>
            </Row>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Projects