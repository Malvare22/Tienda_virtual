import React, { useState } from 'react';
import { Button } from 'antd';
import Divider from '@mui/material/Divider';
import ShopImg from '/src/assets/img/buying.png'
import ProductModalCSS from './ProductModal.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckImg from '/src/assets/img/checkImg.png'
import getDiscountPrice from '../../utilities/getDiscountPrice';
import { labels } from '../../utilities/labels';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 680,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function ProductModal({product, modal, setModal}) {
  const handleClose = () => setModal(false);
    const price = getDiscountPrice(product['price'], product['discount']);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={ShopImg} width={"400px"}></img>
          <div className={ProductModalCSS.row1}>
              <div>
                <img src={product['img'][0]} width={"100px"} height={"120px"}></img>
              </div>
              <div className={ProductModalCSS.row1_col2}>
                    <div className={ProductModalCSS.price}>${price}</div>
                    <div className={ProductModalCSS.name}>{product['name']}</div>
                    <div className={ProductModalCSS.color_container}><div className={ProductModalCSS.color}>Color seleccionado: </div><div className={ProductModalCSS.color_value}>{product['color']}</div></div>
              </div>
          </div>
          <div>
            <Divider style={{padding: '0px'}} />
            <div className={ProductModalCSS.row2}>
                <div className={ProductModalCSS.item}>1 ítem en tu carrito</div>
                <div className={ProductModalCSS.total_container}>
                    <div className={ProductModalCSS.subtotal_label}>Subtotal</div>
                    <div className={ProductModalCSS.subtotal_value}>${price}</div>
                </div>
            </div>
            <Divider />
            <div className={ProductModalCSS.row3}>
                <div>
                    <img src={CheckImg} width={"64px"}></img>
                </div>
                <div className={ProductModalCSS.tax1}>Te vas a llevar {labels[product['category']]} por solo </div>
                <div  className={ProductModalCSS.tax2}>$120 p/semana!</div>
                <div><Button className={ProductModalCSS.shop_btn}>COMPRAR A CRÉDITO</Button></div>
                <div className={ProductModalCSS.alternative}>o puedes</div>
                <div className={ProductModalCSS.count}>Comprar a contado</div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}