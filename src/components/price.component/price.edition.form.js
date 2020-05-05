import React from 'react';
import RadioFields from '../form.fields/radio';
import DisplayPrice from '../display/price';

const PriceEditionForm = () => {
  const [selectededition, getPriceEdition] = React.useState('');
  const [priceedition, setPriceEdition] = React.useState('');

  const radiolist = React.useMemo(() => [
    { value: 'standard', label: 'Standard Edition'},
    { value: 'enterprise', label: 'Enterprise Edition'},
  ], [])
  
  const PricePerEdition = (selectededition) => {
    let price = '';
    switch(selectededition) {
      case 'standard':
        price = 120;
        break;
      case 'enterprise':
        price = 999;
        break;
      default:
        price = '';
    }
    setPriceEdition(price)
  }

  React.useEffect(() => {
    PricePerEdition(selectededition)
  }, [selectededition]);  

  return (
    <>
      <RadioFields 
        radiolist={radiolist} 
        name="Price"
        setPriceEdition={getPriceEdition}
      />  
      {priceedition && 
        <DisplayPrice price={priceedition} currency="$" daymonth="month" />}
    </>
  );
}


export default PriceEditionForm;
