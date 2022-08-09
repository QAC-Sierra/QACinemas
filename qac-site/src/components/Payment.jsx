import React, {useEffect, useState} from 'react';
import StripeCheckout from "react-stripe-checkout";
import "./styles/Payment.css"
import axios from "axios";

const KEY = "pk_test_51LTMe7FcNpq5nVHDSFyODWk8Ydr4wnWd65Zea5todzNPVBEqh7UDk9Ka3NDly11dnBRANy6uBhNIDeMudVurCCjB00OyiSEcpE";

const Payment = () => {
	const [stripeToken, setStripeToken] = useState(null);
	
	const onToken = async (token) => {
		await setStripeToken(token);
	}
	
	useEffect(() => {
		const makeRequest = () => {
			console.log(stripeToken);
			axios.post("http://localhost:4494/payment/create",
				{
					tokenId: stripeToken.id,
					name: stripeToken.card.name,
					email: stripeToken.email,
					amount: 200,
					currency: "GBP",
					lastFour: stripeToken.card.last4,
					expiryDate: `${stripeToken.card.exp_month}/${stripeToken.card.exp_year}`
				}
			).then(() => {
				setStripeToken(null);
			}).catch((err) => {
				setStripeToken(null);
				console.error(err);
			});
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