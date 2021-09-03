import React, { useState } from 'react'
import '../scss/components/_faq.scss'
import Axios from 'axios';

function Faq() {
	const [faqs, updateFAQ] = useState(null);

	const faqData = async () => {
		return await Axios.get('json/faq.json');
	}

	const RenderFAQ = () => {
		faqs.map((faq, i) => (
			<div
				className={"faq " + (faq.open ? 'open' : '')}
				key={i}
				onClick={() => toggleFaq(index)}
			>
				<div className="faq-question">
					{faq.question}
				</div>
				<div className="faq-answer">
					{faq.answer}
				</div>
			</div>

		))
	}



	return (
		<div className='showcase'>
			<div className='title'><h2>Vanliga frågor</h2></div>
			()
		</div>

	)
}

export default Faq;
