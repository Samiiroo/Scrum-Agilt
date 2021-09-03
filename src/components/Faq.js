import React, { useEffect, useState } from 'react'
import '../scss/components/_faq.scss'
import Axios from 'axios';
import Loader from './Loader';


function Faq() {
	const [isMounted, updateIsMounted] = useState(true);
	const [faqs, updateFAQ] = useState(null);
	const [open, updateOpen] = useState(false);
	const FetchFAQ = async () => {
		return await Axios.get('json/faq.json');
	}

	const toggleFaq = (i) => {
		console.log(i)
		if (i) {
			updateOpen(true);
		}
		else {
			updateOpen(false)
		}
	}

	const RenderFAQ = () => {
		return faqs.map((faq, i) => (
			<div className={`faq ${open ? 'open' : ''}`} key={i}>
				<div data-open={open} className="faq-question" onClick={() => toggleFaq(i)}>
					{faq.question}
				</div>
				<div className={`faq-answer`}>
					{faq.answer}
				</div>
			</div>

		))
	}

	useEffect(() => {
		if (!isMounted) {
			return
		}
		FetchFAQ().then(res => {
			updateFAQ(res.data.faqs)
			updateIsMounted(true)
		}).catch(err => console.error(err))
	}, [])

	return (
		<section className='faqs' style={{ background: `url('assets/img/faq-bg.png') no-repeat center/cover` }}>
			<h2 className='title center'>Vanliga frågor</h2>
			{!isMounted && <Loader />}
			{faqs !== null && RenderFAQ()}
		</section>

	)
}

export default Faq;
