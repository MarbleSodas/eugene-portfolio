import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import { Card, Grid, Text, Button, Row, Modal, useModal } from "@nextui-org/react";
import { motion } from 'framer-motion';

function Projects() {
    //products list
    const list = [
        {
            title: "Retro Audio",
            img: "pw/AJFCJaUXIWcyDrMLMfK1BAziYYNDF93Dqb2EqaMQWX-Sesx_6iGws75mRi_bcAYLc7lwOzKBlrdCvWRTgosLQitAjKea23s_WA8xiYw4AaeCy0EU565aPQ=w2400",
            description: "$120",
            itemInfo: "retroAudio",
        },
        {
            title: "Rancho Drive Train",
            img: "pw/AJFCJaV2ZCSjeSFMUeJiSJftrM0u_DAQWhIuzwFcpYcDowPs9PtxnWNnKIKLH5g2kHtzlkVYrCbeLpTzlg1UeQcbTGyW4a141qw-ud3bSkV1_dUoTgroRQ=w2400",
            description: "$120",
            itemInfo: "RDE",
        }
      ];
    //variables for modal visibility
    const { setVisible, bindings } = useModal();
  return (
    <div className='page'>
        <header className={styles.header}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .5 }}}
            >
                <h1 className='title'>
                    Projects
                </h1>
            </motion.div>
        </header>
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .5 }}}
        >
        <Grid.Container gap={2} justify="center">
        {list.map((item, index) => (
            <Grid className={styles.cardGrid} key={index}>
                <Card isPressable isHoverable onPress={() => setVisible(true)}>
                    <Card.Body css={{p: 0}}>
                    <Card.Image
                        src={"https://lh3.googleusercontent.com/" + item.img}
                        referrerPolicy='no-referrer'
                        objectFit="scale-down"
                        width="100%"
                        height="100%"
                        alt={item.title}
                    />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b className={styles.itemTitle}>{item.title}</Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        ))}
        </Grid.Container>
        </motion.div>
    </div>
  )
}

export default Projects