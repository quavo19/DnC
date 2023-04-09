import {
  Center,
  Wrap,
  WrapItem,
  Spinner,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getProducts, 
  getElectronics,
  getCloths,
  getMen,
  getwomen,
  getHomeAppliances,
  getHotSale,
} from '../redux/actions/productActions';
import { useEffect } from 'react';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const SearchElectronics = () =>{
    dispatch(getElectronics());
  }

  const SearchAll = () =>{
    dispatch(getProducts());
  }

  const SearchCloths = () => {
    dispatch(getCloths());
  }
  const SearchMen = () => {
    dispatch(getMen());
  }
  const SearchWomen = () => {
    dispatch(getwomen());
  }
  const SearchHomeAppliances = () => {
    dispatch(getHomeAppliances());
  }
  const SearchHotSale = () => {
    
    dispatch(getHotSale());
  }


  return (
    <div>
    <button type='button' onClick={SearchAll}>All</button>
    <button type='button' onClick={SearchCloths}>Cloths</button>
    <button type='button' onClick={SearchWomen}>Women</button>
    <button type='button' onClick={SearchMen}>Men</button>
    <button type='button' onClick={SearchElectronics}>Electonics</button>
    <button type='button' onClick={SearchHomeAppliances}>Home Appliances</button>
    <button type='button' onClick={SearchHotSale}>Hot Sale</button>

    <Wrap spacing='30px' justify='center' minHeight='100vh'>
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size='xl' />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We are sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : products.length > 0 ?  (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w='250px' h='550px'>
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      ) : (
        <div>This Category is empty</div>
      )}
    </Wrap>
    </div>
  );
};

export default ProductsScreen;
