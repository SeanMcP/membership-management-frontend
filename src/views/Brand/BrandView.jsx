import React from 'react'

import Content from 'components/layout/Content/Content'
import ViewWrapper from 'components/layout/ViewWrapper/ViewWrapper'
import { useBrandContext } from 'context/brand/BrandContext'
import ColorInput from 'components/brand/ColorInput/ColorInput'
import Grid from 'components/layout/Grid/Grid'

const BrandView = props => {
  const [state, dispatch] = useBrandContext()
  const fields = []
  for (const field in state) {
    fields.push(
      <ColorInput
        field={field}
        key={field}
        onChange={e => {
          dispatch({
            type: 'UPDATE_BRAND',
            payload: { key: field, value: e.target.value }
          })
        }}
        value={state[field]}
      />
    )
  }
  return (
    <ViewWrapper title="Brand">
      <Content>
        <h1>Brand</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          assumenda aspernatur laborum iusto ipsam voluptas quos a, tempora
          nulla nemo in mollitia fugit, totam vero, doloribus quo velit
          perspiciatis non.
        </p>
        <h2>Variables</h2>
        <Grid columns={2}>{fields}</Grid>
      </Content>
    </ViewWrapper>
  )
}

export default BrandView
