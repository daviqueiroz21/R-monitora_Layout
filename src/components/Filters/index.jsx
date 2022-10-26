import React from 'react';
import { SmallBtn } from '../Button/styles';
import ECVfilter from '../EcvFilter';
import { FilterContainer } from './style';

const Filter = () => {
	return (
		<FilterContainer>
			<ECVfilter />
			<SmallBtn>4</SmallBtn>
			<SmallBtn>8</SmallBtn>
			<SmallBtn>16</SmallBtn>
		</FilterContainer>
	);
};

export default Filter;
