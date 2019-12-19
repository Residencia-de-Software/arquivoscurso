import React, {Component} from 'react';
import {Button, Container, Text, Content, Grid, Row} from 'native-base';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Button onPress={() => navigate('List')}>
                <Text>Cadastrar</Text>
              </Button>
            </Row>
            <Row>
              <Button onPress={() => navigate('Form')}>
                <Text>Exibir</Text>
              </Button>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
