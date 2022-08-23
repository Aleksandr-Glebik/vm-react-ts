import React, { useContext } from 'react'
import { Product } from '../components/Product'
import {useProducts} from '../hooks/products'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import {Modal} from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'

export function ProductPage() {

  const {products, loading, error, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error}/> }
      { products.map(product => <Product product={product} key={product.id} />) }

      {modal && <Modal title='Create new Product' onClose={close}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>
      }
      <button
        className='fixed bottom-8 right-8 px-4 py-2 rounded-full bg-red-700 text-white text-2xl'
        onClick={open}
      >
        +
      </button>

    </div>
  )
}