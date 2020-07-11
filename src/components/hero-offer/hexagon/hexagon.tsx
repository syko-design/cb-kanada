import React from 'react'
import { HexagonWrapper, HexagonLines1, HexagonLines2, HexagonLines3 } from './hexagon.style'

export const Hexagon: React.FC = ({ children }) => (
	<HexagonWrapper>
		<HexagonLines1></HexagonLines1>
		<HexagonLines2></HexagonLines2>
		<HexagonLines3></HexagonLines3>
		{children}
	</HexagonWrapper>
)
