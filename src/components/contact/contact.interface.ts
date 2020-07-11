import { contactProps } from '../../input/contact.props'

export interface Props {
	contact: typeof contactProps
}

export interface FormValues {
	name: string
	email: string
	content: string
}
