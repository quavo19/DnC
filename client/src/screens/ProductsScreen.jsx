import {
  Spinner,
  Image,
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
  Search,
} from '../redux/actions/productActions';
import { useEffect } from 'react';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const setName = (e) => {
    dispatch(Search(e));
    
  }

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
    <div className='product-main'>
    <button type='button' onClick={SearchAll}>All</button>
    <button type='button' onClick={SearchCloths}>Cloths</button>
    <button type='button' onClick={SearchWomen}>Women</button>
    <button type='button' onClick={SearchMen}>Men</button>
    <button type='button' onClick={SearchElectronics}>Electonics</button>
    <button type='button' onClick={SearchHomeAppliances}>Home Appliances</button>
    <button type='button' onClick={SearchHotSale}>Hot Sale</button>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <ul className="product-flex gap-small">
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
          <li key={product._id}>
            
              <ProductCard product={product} />
            
          </li>
        ))
      ) : (
        <Image p={4} src={'images/empty-cart.jpg'} roundedTop='lg' />
        
      )}
    </ul>
    </div>
  );
};

export default ProductsScreen;
