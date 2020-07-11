import React from 'react'
import { useForm } from 'react-hook-form'
import {
	Wrapper,
	ColumnForm,
	ColumnText,
	Content,
	Header,
	Form,
	FormGroup,
	Input,
	TextArea,
	Label,
	ErrorLabel
} from './contact.styled'
import { Heading3, Heading5 } from 'components/shared/heading/heading'
import { Button } from 'components/shared/button/button'
import { FormValues, Props } from './contact.interface'

export const Contact: React.FC<Props> = (props) => {
	const { register, handleSubmit, errors } = useForm<FormValues>()
	const sendData = (data: FormValues) => {
		console.log(data)
	}

	return (
		<Wrapper id="contact">
			<ColumnText>
				<Header>
					<Heading3>{props.contact.header}</Heading3>
					<Heading5>{props.contact.subHeader}</Heading5>
				</Header>
				<Content>{props.contact.content}</Content>
			</ColumnText>
			<ColumnForm>
				<Form onSubmit={handleSubmit<FormValues>(sendData)}>
					<FormGroup error={!!errors.name}>
						<ErrorLabel open={!!errors.name}>{errors.name?.message}</ErrorLabel>
						<Input
							name="name"
							id="form-contact-name"
							maxLength={100}
							ref={register({
								required: { value: true, message: 'Required' },
								maxLength: { value: 100, message: 'Maximum 100 characters' },
								minLength: { value: 3, message: 'Minimum 3 characters' },
								pattern: { value: /^[a-zA-Z\s]*$/, message: 'Only letters and spaces allowed' }
							})}
						/>
						<Label htmlFor="form-contact-name">Name</Label>
					</FormGroup>
					<FormGroup error={!!errors.email}>
						<ErrorLabel open={!!errors.email}>{errors.email?.message}</ErrorLabel>
						<Input
							name="email"
							type="email"
							id="form-contact-email"
							ref={register({
								required: { value: true, message: 'Required' },
								maxLength: { value: 120, message: 'Maximum 120 characters' },
								minLength: { value: 4, message: 'Minimum 4 characters' },
								pattern: {
									value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Invalid email format'
								}
							})}
						/>
						<Label htmlFor="form-contact-email">Email</Label>
					</FormGroup>
					<FormGroup error={!!errors.content}>
						<ErrorLabel open={!!errors.content}>{errors.content?.message}</ErrorLabel>
						<TextArea
							name="content"
							id="form-contact-content"
							rows={6}
							ref={register({
								required: { value: true, message: 'Required' },
								maxLength: { value: 1000, message: 'Maximum 1000 characters' },
								minLength: { value: 20, message: 'Minimum 20 characters' }
							})}
						/>
						<Label htmlFor="form-contact-content">Message</Label>
					</FormGroup>
					<Button type="submit">SUBMIT</Button>
				</Form>
			</ColumnForm>
		</Wrapper>
	)
}
