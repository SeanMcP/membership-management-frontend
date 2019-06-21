import React from 'react'

import Content from 'components/layout/Content/Content'
import ViewWrapper from 'components/layout/ViewWrapper/ViewWrapper'
import { useBrandContext } from 'context/brand/BrandContext'

const BrandView = props => {
  const [state, dispatch] = useBrandContext()
  const fields = []
  for (const field in state) {
    fields.push(
      <label key={field}>
        <b>{field}</b>
        <input
          type="color"
          value={state[field]}
          onChange={e => {
            dispatch({
              type: 'UPDATE_BRAND',
              payload: { key: field, value: e.target.value }
            })
          }}
        />
      </label>
    )
  }
  return (
    <ViewWrapper title="Brand">
      <Content>{fields}</Content>
    </ViewWrapper>
  )
}

export default BrandView
