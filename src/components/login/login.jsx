import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Input from '../UI/Input'
import image from '../../assets/img/bgc.jpg'
import Button from '../UI/Button'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uiActions } from '../../store/slice/uiSlice'

const Login = () => {
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [isEmail, setIsEmail] = useState(true)
	const [password, setPassword] = useState('')
	const [isPassword, setIsPassword] = useState(true)
	const [isForm, setIsForm] = useState(false)

	const state = useSelector((state) => state.loginSlice)
	const navigate = useNavigate()

	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const PasswordHandler = (e) => {
		setPassword(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if (email.trim() === '' && password.trim() === '') {
			return
		}

		state.map((el) => {
			if (email === el.email && password === el.password) {
				setIsEmail(true)
				setIsPassword(true)
				setIsForm(false)
				dispatch(uiActions.uiLoading())
				setTimeout(() => {
					navigate('/trello')
					dispatch(uiActions.neLoading())
				}, 2000)
			} else if(email !== el.email && password !== el.password) {
				setIsEmail(false)
				setIsPassword(false)
				setIsForm(true)
			}
		})
	}

	let content

	if (!isEmail) {
		content = 'Аккаунта с таким именем пользователя не существует'
	}
	if (!isPassword) {
		content = 'Аккаунта с таким именем пользователя не существует'
	}

	return (
		<Forma onSubmit={submitHandler}>
			<Div>
				<StyledImg
					src='https://mattermost.com/wp-content/uploads/2021/03/0f760275-f987-4233-ad1d-f8358b63cb4a.png'
					alt=''
				/>
				<StyledTrello>Trello</StyledTrello>
			</Div>

			<Container>
				{isForm && <Email invalid={isEmail}> {content}</Email>}

				<StyledH4>Вход в Trello</StyledH4>

				<div>
					<Input
						value={email}
						onChange={emailHandler}
						type='text'
						placeholder='Укажите адрес электронной почты'
					/>
				</div>
				<div>
					<Input
						value={password}
						onChange={PasswordHandler}
						type='password'
						placeholder='Введите пароль'
					/>
				</div>
				<div>
					<Button>Войти</Button>
				</div>
				<Span>ИЛИ</Span>
				<div>
					<Syllka>
						<Google
							src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
							alt=''
						/>
						<A href='https://www.google.ru/'>Войти через Google</A>
					</Syllka>
					<Syllka>
						<Google
							src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC'
							alt=''
						/>
						<A href='https://www.microsoft.com/ru-ru'>
							Войти через Microsoft
						</A>
					</Syllka>
					<Syllka>
						<Google
							src='data:image/png;base64,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'
							alt=''
						/>
						<A href='https://www.apple.com/'>Войти через Apple</A>
					</Syllka>
					<P>Вход с помощью SSO</P>
					<hr />
					<NeDiv>
						<p>Не удается войти? </p>
						<p>Зарегистрировать аккаунт</p>
					</NeDiv>
				</div>
			</Container>
			<Politica>
				<p>Политика конфиденциальности </p>
				<p>Условия использования</p>
			</Politica>
			<Atlassian
				src='https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:8a794ead-879b-460e-b6be-1189ee66ab66/atlassian_logo-1200x630.png'
				alt=''
			/>
			<DivBody />
		</Forma>
	)
}

export default Login
const Forma = styled.form``
const DivBody = createGlobalStyle`
body{
    background-image: url(${image});

background-repeat: no-repeat;
background-size: contain;
width: 100%;
height: 100%;

}
`
const Email = styled.p`
	font-size: 14px;
	text-align: start;
	width: 320px;
	height: 40px;
	background-color: ${({ invalid }) => (!invalid ? '#FF6F67' : 'whit')};
	margin-top: -10;
	color: #eed4d4;
	margin-left: 40px;
`
const Container = styled.div`
	width: 360px;
	height: 550px;
	padding: 40px;
	background-color: white;
	margin: 0 auto;
	-webkit-box-shadow: 0px 0px 19px 5px rgba(64, 58, 58, 0.71);
	box-shadow: 0px 0px 7px 2px rgba(64, 58, 58, 0.71);
`
const StyledTrello = styled.em`
	font-size: 40px;
	margin-top: 25px;
	color: #213a6f;
	margin-right: 34px;
`

const StyledImg = styled.img`
	width: 50px;
	height: 50px;
	margin-top: 30px;
`
const Div = styled.div`
	display: flex;
	justify-content: center;
`
const StyledH4 = styled.h4`
	color: #5d6983;
	padding-top: 10px;
`
const Span = styled.p`
	color: #5d6983;
	margin-bottom: 30px;
`
const Syllka = styled.div`
	background: white;
	width: 260px;
	height: 33px;
	-webkit-box-shadow: 0px 0px 19px 5px rgba(139, 128, 128, 0.71);
	box-shadow: 0px 0px 4px 1px rgba(163, 156, 156, 0.71);
	border-radius: 3px;
	margin: 0 auto;
	margin-top: 13px;
`
const A = styled.a`
	color: #5c82d6;
	font-size: 19px;
	text-decoration: none;
`
const Google = styled.img`
	width: 20px;
	height: 20px;
	margin-top: 4px;
	margin-right: 7px;
`
const P = styled.p`
	color: #6161d0;
`
const NeDiv = styled.div`
	display: flex;
	p {
		color: #6161d0;
		margin-left: 10px;
	}
`
const Politica = styled.div`
	display: flex;

	justify-content: center;

	p {
		color: #6161d0;
		font-size: 12px;
		margin-left: 10px;
	}
`
const Atlassian = styled.img`
	width: 220px;
	height: 100px;
`
