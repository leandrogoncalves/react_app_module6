/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Bio,
  Name,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  // NAO FUNCIONA NESSA VERSAO
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  constructor(props) {
    super(props);
    const { route } = props;

    this.state = {
      user: route.params.user,
      stars: [],
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { user } = this.state;

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
    });
  }

  render() {
    const { stars, user } = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar_url }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    route: PropTypes.object,
  }).isRequired,
};

/**
 * Abordagem de funcao
  export default function User({ route, navigation }) {
  console.tron.log(route.param);

  return (
    <View>
      <Text>User</Text>
    </View>
  );
}
*/
