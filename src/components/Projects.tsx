import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import { Card, Grid, Text, Button, Row, Modal, useModal } from "@nextui-org/react";
import Image from 'next/image';
import { useState } from 'react';

function Projects() {
    //products list
    const list = [
        {
            id: 1,
            title: "Retro Audio",
            img: "pw/AJFCJaUXIWcyDrMLMfK1BAziYYNDF93Dqb2EqaMQWX-Sesx_6iGws75mRi_bcAYLc7lwOzKBlrdCvWRTgosLQitAjKea23s_WA8xiYw4AaeCy0EU565aPQ=w2400",
            description: "$120",
            itemInfo: "retroAudio",
        },
        {
            id: 2,
            title: "Rancho Drive Train",
            img: "pw/AJFCJaV2ZCSjeSFMUeJiSJftrM0u_DAQWhIuzwFcpYcDowPs9PtxnWNnKIKLH5g2kHtzlkVYrCbeLpTzlg1UeQcbTGyW4a141qw-ud3bSkV1_dUoTgroRQ=w2400",
            description: "$120",
            itemInfo: "RDE",
        }
      ];

    //state for selected product
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardPress = (itemId: number) => {
        setSelectedItemId(itemId);
        setIsModalOpen(true);
      };

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
                <Card isPressable isHoverable onPress={() => handleCardPress(item.id)}>
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
                        <Text className={styles.itemPrice}>
                        {item.description}
                        </Text>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        ))}
        </Grid.Container>
        </motion.div>
        <Modal
            scroll
            width="900px"
            open={isModalOpen} onClose={() => setIsModalOpen(false)}
        >
            <Modal.Header>
            <Text id={selectedItemId?.toString()} className={styles.modalHeader}>
                {list.find(item => item.id === selectedItemId)?.title}
            </Text>
            </Modal.Header>
            <Modal.Body>
            <Text id={selectedItemId?.toString()} className={styles.modalText}>
                {list.find(item => item.id === selectedItemId)?.description}
            </Text>
            <Text id={selectedItemId?.toString()} className={styles.modalText}>
                {list.find(item => item.id === selectedItemId)?.itemInfo}
            </Text>
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onPress={() => setIsModalOpen(false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Projects