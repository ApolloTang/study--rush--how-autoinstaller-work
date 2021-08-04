import React from 'react'
import styled from 'styled-components'
import Cat from '@mylibs/ui--react-cat-image';

const Component1 = styled.div`
  border: 1px solid blue;
  padding: 10px;
`

const Button = () => <Component1>
   <Cat />
 </Component1>

export default Button

