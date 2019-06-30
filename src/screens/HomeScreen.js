import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import images from "../common/images";
import colors from "../common/colors";
import {Navigation} from "react-native-navigation";
import {withTheme, Button, Card, Title, Paragraph, Avatar} from "react-native-paper";

class HomeScreen extends Component<Props> {

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Notes',
          color: '#fff'
        },
        leftButtons: [
          {
            id: 'menuBtn',
            icon: images.menuIcon,
            color: '#fff'
          }
        ],
        rightButtons: [
          {
            id: 'moreBtn',
            icon: images.moreIcon,
            color: '#fff'
          },
          {
            id: 'sortBtn',
            icon: images.sortIcon,
            color: '#fff'
          },
          {
            id: 'searchBtn',
            icon: images.searchIcon,
            color: '#fff'
          },
        ],
        background: {
          color: colors.primary
        }
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 2,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 3,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 4,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 5,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 6,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 7,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 8,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 9,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 10,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 11,
          title: 'Card title',
          content: 'Card content'
        },
        {
          id: 12,
          title: 'Card title',
          content: 'Card content'
        },
      ]
    };
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'menuBtn') {
      Navigation.mergeOptions('Drawer', {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
  }

  renderNote(note) {
    return (
      <View style={styles.cardWrapper} key={note.id}>
        <Card style={styles.card}>
          <Card.Title title={note.title} />
          <Card.Content>
            <Paragraph>{note.content}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {
            this.state.notes.map((note) => (
              <View style={styles.cardWrapper} key={note.id}>
                <Card style={styles.card} onPress={() => alert('Card pressed')}>
                  <Card.Title title={note.title} />
                  <Card.Content>
                    <Paragraph>{note.content}</Paragraph>
                  </Card.Content>
                </Card>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 10
  },
  cardWrapper: {
    width: '100%',
    marginBottom: 10
  },
  card: {
    flex: 1,
    borderRadius: 10
  }
});

export default withTheme(HomeScreen);
