import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import React, { useState, useEffect } from 'react';
import Footer from 'src/components/common/Footer';
import { MainPageAppBarLeft, MainPageAppBarRight } from 'src/components/common/Stackflow';
import { ProductInterface } from 'src/schemas/Product';
import { getProductList } from 'src/services/product';
import { ItemsWrapper } from './styled';
import ProductItem from 'src/components/common/ProductItem';
import { useFlow } from 'src/utils/stackflow';

const MainPage: ActivityComponentType = () => {

  // 스텍플로우에서 만든 훅
  const { push } = useFlow()

  const goToDetailPage = (id: number) => {
    push('DetailPage', { id: id.toString() })
  }

  const [products, setProducts] = useState<ProductInterface[]>([])

  const loadProducts = async () => {
    const { data } = await getProductList()
    setProducts(data)
  }

  useEffect(
    () => {
      loadProducts()
    },
    []
  )


  return (
    <AppScreen appBar={{
      appendLeft: MainPageAppBarLeft,
      appendRight: MainPageAppBarRight
    }}>
      <ItemsWrapper>
        {
          products.map(
            (product, i) => {
              return (
                <ProductItem
                  key={product.id}
                  item={product}
                  onClickItem={
                    () => goToDetailPage(product.id)
                  }
                />
              )
            }
          )
        }
      </ItemsWrapper>

      <Footer />
    </AppScreen>
  );
};

export default MainPage;
