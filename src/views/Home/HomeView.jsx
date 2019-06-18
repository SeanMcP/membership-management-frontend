import React from 'react'
import { connect } from 'react-redux'
import Content from 'components/layout/Content/Content'
import ViewWrapper from 'views/Wrapper/ViewWrapper'
import { setUser } from 'actions/index'

const HomeView = props => (
    <ViewWrapper title="Home">
        <Content>
            Hello {props.name}!{' '}
            <button onClick={() => props.setUser('Mr. Roboto')}>
                Change user
            </button>
        </Content>
    </ViewWrapper>
)

export default connect(
    state => ({
        name: state.user.name
    }),
    { setUser }
)(HomeView)
