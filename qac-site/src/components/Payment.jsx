import React, {useEffect, useState} from 'react';
import StripeCheckout from "react-stripe-checkout";
import "./styles/Payment.css"
import axios from "axios";

const KEY = "pk_test_51LTMe7FcNpq5nVHDSFyODWk8Ydr4wnWd65Zea5todzNPVBEqh7UDk9Ka3NDly11dnBRANy6uBhNIDeMudVurCCjB00OyiSEcpE";

const Payment = () => {
	const [stripeToken, setStripeToken] = useState(null);
	
	const onToken = async (token) => {
		await setStripeToken(token);
		console.log(stripeToken);
	}
	
	useEffect(() => {
		const makeRequest = async () => {
			try {
				console.log(stripeToken);
				const res = await axios.post("http://localhost:5000/token/create",
					{
						tokenId: stripeToken.id,
						amount: totalCost,
						currency: "GBP"
					}
				);
			} catch (err) {
				console.error(err);
			}
		}
		stripeToken && makeRequest();
	}, [stripeToken]);
	
	return (
		<>
			<StripeCheckout className="payByCard"
			                name="QA Cinemas"
			                description="Payment Details"
			                billingAddress
			                amount={200}
			                currency="GBP"
			                token={onToken}
			                stripeKey={KEY}
			/>
		</>
	);
}
export default Payment;