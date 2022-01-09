import styled from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {publicRequest} from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  padding-top: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = { firstname,lastname,street,number,postalcode,city,email,phone};

        fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(order)
        }).then(()=>{
            console.log("new order created");
        })

    }

    return (
        <Container>
            <Wrapper>
                <Title>Checkout</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
                    <Input placeholder="lastname" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
                    <Input placeholder="street" onChange={(e) => setStreet(e.target.value)} value={street}/>
                    <Input placeholder="number" onChange={(e) => setNumber(e.target.value)}  value={number}/>
                    <Input placeholder="postalcode" onChange={(e) => setPostalcode(e.target.value)} value={postalcode} />
                    <Input placeholder="city" onChange={(e) => setCity(e.target.value)}  value={city}/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}  value={email}/>
                    <Input placeholder="phone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                    <Button type="submit">Checkout</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;