import React, { useEffect, useState } from 'react'
import '../scss/components/_faq.scss'
import Axios from 'axios';
import Loader from './Loader';


function Faq() {
	const [isMounted, updateIsMounted] = useState(true);
	const [faqs, updateFAQ] = useState(null);


	const FetchFAQ = async () => {
		return await Axios.get('json/faq.json');
	}


	const RenderFAQ = () => {
		return faqs.map((faq, i) =>
			<details>
				<summary>{faq.question}</summary>
				<p>{faq.answer}</p>
			</details>
		)
	}

	useEffect(() => {
		if (!isMounted) {
			return
		}
		FetchFAQ().then(res => {
			updateFAQ(res.data.faqs)
			updateIsMounted(false)
		}).catch(err => console.error(err))
	}, [])

	return (
		<section className='faqs' style={{ background: `url('assets/img/faq-bg.png') no-repeat center/cover` }}>
			<h2 className='title center'>Vanliga frågor</h2>
			{isMounted && <Loader />}
			<div className="faq-container">
				{faqs !== null && RenderFAQ()}
			</div>
		</section>

	)
}

export default Faq;
