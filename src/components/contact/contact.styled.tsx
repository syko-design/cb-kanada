import styled, { css, StyledProps, keyframes } from 'styled-components'
import { ThemeProps } from '../../theme/theme.type'

export const Wrapper = styled.section`
	width: 100%;
	height: auto;
	padding: 3rem 10vw;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light100};

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
 		flex-direction: column;
  }
}
`

export const Header = styled.header`
	display: flex;
	flex-direction: column-reverse;
`

export const ColumnText = styled.article`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin-right: 20px;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		max-width: 100%;
		margin-right: 0;
	}
`

export const Content = styled.p``

export const ColumnForm = styled.article`
	flex-grow: 1;
	flex-basis: 0;
	max-width: 600px;
	margin-left: 20px;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		max-width: 100%;
		width: 100%;
		margin-left: 0;
		margin-top: 30px;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light300};
	padding: 2rem 3rem;
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const FormGroup = styled.section<{ error?: boolean }>`
	display: flex;
	flex-direction: column-reverse;
	margin-top: 1rem;

	${(props) =>
		props.error &&
		css`
			animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
			transform: translate3d(0, 0, 0);
			backface-visibility: hidden;
			perspective: 1000px;

			${Label} {
				color: red;
			}

			${Input}, ${TextArea} {
				border: 1px solid red;
			}
		`}

	:first-of-type {
		margin-top: 0;
	}

	:last-of-type {
		margin-bottom: 1rem;
	}
`

const inputSharedProperties = css`
	border: 1px solid ${(props: StyledProps<ThemeProps>): string => props.theme.colors.dark100};
	padding: 4px 8px;

	:focus {
		border-radius: 0;
		outline: none;
		border: 1px solid ${(props: StyledProps<ThemeProps>): string => props.theme.colors.primary200};
	}

	:focus ~ label {
		color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.primary200};
	}
`

export const Input = styled.input`
	${inputSharedProperties}
`
export const TextArea = styled.textarea`
	resize: vertical;
	height: auto;
	${inputSharedProperties}
`

export const Label = styled.label``

export const ErrorLabel = styled.section<{ open?: boolean }>`
	color: red;
	transform: scale(${({ open }) => (open ? '1' : '0')});
	transition-property: all;
	transition-duration: 0.5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`
