import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Divv = styled.div`
	background-color: rgb(224, 224, 224);
	margin:  0 auto;
	width: 100%;
	height: 700px;
`
const Mainimg = styled.img`
	width: 40px;
	height: 40px;
	margin-top: 18px;
`
const Header = styled.header`
	display: flex;
`
const Mainbutton = styled.button`
	margin-left: 1100px;
	margin-top: 25px;
	border: none;
	border-radius: 4px;
	background-color: rgb(0, 136, 226);
	width: 100px;
	height: 40px;
`
const Texth1 = styled.h1`
text-align: start	;
	width: 500px;
	margin-top: 100px;
`
const Mainp = styled.p`
text-align: start;
	width: 530px;
`
const Pageimg = styled.img`
	width: 360px;
	height: 500px;
`
const Imgdiv = styled.div`
	display: flex;
	margin-left: 300px;
`
const MainPage = () => {
	const navigate = useNavigate()
	const buttonHandler = () => {
		return navigate('/login')
	}
	return (
		<Divv>
			<Header>
				<Mainimg
					src='https://img.icons8.com/color/2x/trello.png'
					alt=''
				/>
				<h2>Trello</h2>
				<Mainbutton onClick={buttonHandler}>Login</Mainbutton>
			</Header>
			<Imgdiv>
				<div>
					<Texth1>
						Trello помогает командам эффективно решать рабочие
						задачи.
					</Texth1>
					<Mainp>
						Работайте в команде, управляйте проектами и выводите
						продуктивность на новый уровень собственным уникальным
						способом вместе с Trello.
					</Mainp>
				</div>

				<div>
					<Pageimg
						src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png'
						alt=''
					/>
				</div>
			</Imgdiv>
		</Divv>
	)
}

export default MainPage
