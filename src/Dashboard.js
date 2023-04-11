import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState, useEffect } from "react";


function Dashboard() {
    const [detail, setDetail] = useState([]);
    const getDetail = () => {
        fetch("https://637c2c686f4024eac21f56a7.mockapi.io/shop",
            { method: "GET" })
            .then((data) => data.json())
            .then((res) => setDetail(res));
    }

   

    useEffect(() => getDetail(), [])
    return (
        <div className='row' >
            <div class="col-md-12" style={{ justifyItems: 'center' }}>
                {detail.map((object, index) => (
                    <container>
                        <row>
                            <Card key={index} style={{ width: '18rem', display: 'inline-flex', marginLeft: '50px', marginTop: '50px' }}>
                                <Card.Img variant="top" src={object.url} />
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Id No : {object.name}</ListGroup.Item>
                                    <ListGroup.Item>Name : {object.Product}</ListGroup.Item>
                                    <ListGroup.Item>price: {object.price}</ListGroup.Item>
                                 
                                </ListGroup>
                                <Button variant="contained">Buy now</Button>
                            </Card>
                        </row>
                    </container>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;
