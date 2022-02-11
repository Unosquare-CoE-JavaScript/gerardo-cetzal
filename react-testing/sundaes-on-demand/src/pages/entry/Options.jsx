import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap'
import AlertBanner from '../common/AlertBanner';
import ScoopOption from './ScoopOption';
import ToopingOption from './ToopingOption';

export default function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    // optionType is 'scoops' or 'toppings'
    useEffect(() => {
        axios.get(`http:localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(error => {
                setError(!!error);
            })
    }, [optionType]);

    if (error) {
        return <AlertBanner />
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToopingOption;

    const optionItems = items?.map(item => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

    return (
        <Row>{optionItems}</Row>
    )
}