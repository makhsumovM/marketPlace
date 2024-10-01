import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteALLProductsInCart, DeleteProductInCard, ForDecrementProduct, ForIncreaserProduct, getCart } from '../api/forProductsApi';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { Button } from 'antd';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const { cart } = useSelector((state) => state.forProductSlice);

  return (
    <div>
      <div>Home/Cart</div>

      <div className='py-[50px] lg:w-[80%] m-auto'>
        {cart && cart.length > 0 ? (
          <>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Subtotal</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
  {cart[0] && cart[0].productsInCart?.length > 0 ? (
    cart[0].productsInCart.map((el) => (
      <TableRow key={el.product.id}>
        <TableCell>
          <div className='flex items-center text-[18px] gap-2'>
            <div>
              <img className='w-[50px]' src={import.meta.env.VITE_APP_FILE_URL + el.product.image} alt="" />
            </div>
            {el.product.productName}
          </div>
        </TableCell>
        <TableCell>$ {el.product.price}</TableCell>
        <TableCell>
          <div className='flex items-center gap-[10px]'>
            <Button onClick={() => dispatch(ForIncreaserProduct(el.id))}>
              <AddIcon fontSize='inherit' />
            </Button>
            <p className='font-bold text-[18px]'>{el.quantity}</p>
            <Button danger ghost onClick={() => dispatch(ForDecrementProduct(el.id))}>
              <RemoveIcon fontSize='inherit' />
            </Button>
          </div>
        </TableCell>
        <TableCell>$ {el.product.price * el.quantity}</TableCell>
        <TableCell>
          <Button type='link' onClick={() => dispatch(DeleteProductInCard(el.id))}>
            <CloseIcon sx={{ color: "red" }} />
          </Button>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={5} align="center" sx={{fontSize:"24px"}}>
        Корзина пуста
      </TableCell>
    </TableRow>
  )}
</TableBody>

            </Table>

            <div className='py-[30px] flex justify-between '>
              <Button className='p-[25px_40px] border-[3px] border-[#00000080]'>Return To Shop</Button>
              <div className='flex gap-2'>
                <Button className='p-[25px_40px] border-[3px] border-[#00000080]'>Update Cart</Button>
                <Button onClick={() => dispatch(DeleteALLProductsInCart())} type='default' className='p-[25px_40px] border-[3px]' danger ghost>Remove All</Button>
              </div>
            </div>

            <div className='flex justify-between items-start w-[100%] m-auto py-[20px] lg:flex-row sm:flex-col sm:gap-[20px]'>
              <div className='flex items-center gap-[20px]'>
                <TextField placeholder='Coupon Code' />
                <Button className='p-[25px_40px] border-[3px]' danger ghost>Apply</Button>
              </div>
              <div className='border-[3px] border-[black] p-[20px] lg:w-[30%] w-[100%]'>
                <h2 className='text-[24px] py-[10px]'>Cart Total</h2>
                <p className='text-[18px] flex justify-between'>
                  Subtotal:
                  <span>${cart[0].productsInCart.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)}</span>
                </p>
                <p className='text-[18px] flex justify-between'>Shopping: <span>Free</span></p>
                <hr />
                <h2 className='font-bold text-[24px] flex justify-between py-[10px]'>
                  Total:
                  <span>${cart[0].productsInCart.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)}</span>
                </h2>
                <div className='text-center py-[10px]'>
                  <Button className='bg-[#DB4444] p-[20px_40px] text-white'>Proceed to checkout</Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Your cart is empty or loading...</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
