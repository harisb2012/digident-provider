import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import * as routes from '../../navigation/routes'
import { AppLayout } from '../../components/Layout/AppLayout'
import { StatusLayout } from './StatusLayout'
import { iOSUIKit } from 'react-native-typography'
import { NotVerifiedStatus } from './components/NotVerifiedStatus'
import { VerifiedStatus } from './components/VerifiedStatus'

const Wrapper = styled.View`
  flex: 1;
`

const Text = styled.Text``

const DataWrapper = styled.View`
  flex: 1;
  justify-content: center;
`

export class StatusScene extends React.PureComponent {
  get isVerified() {
    return false
  }

  get notVerifiedContent() {
    return <NotVerifiedStatus {...this.props} />
  }

  get verifiedContent() {
    return <VerifiedStatus {...this.props} />
  }

  render() {
    return (
      <AppLayout>
        <StatusLayout>
          <Wrapper>
            <Text style={iOSUIKit.largeTitleEmphasizedWhite}>DigIDENT</Text>

            <DataWrapper>
              {this.isVerified ? this.verifiedContent : this.notVerifiedContent}
            </DataWrapper>
          </Wrapper>
        </StatusLayout>
      </AppLayout>
    )
  }
}
