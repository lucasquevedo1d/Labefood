import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { BoxModal, ButtonAddCard, SelectQuantity, Title } from './Styled';

export const ModalSelectQuantity = ({open, setOpen, choiceQuantity}) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div>
        
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
       <BoxModal>
        <Title>Selecione a quantidade desejada</Title>
        <SelectQuantity onChange={(e) => setQuantity(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        </SelectQuantity>
        <ButtonAddCard onClick={() => choiceQuantity(quantity)}>
            Adicionar ao carrinho
        </ButtonAddCard>
       </BoxModal>
    
      </Modal>
    </div>
  );
}
