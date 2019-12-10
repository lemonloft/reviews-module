import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
margin-top: 30px;
width: 544px;
height: 90px;
padding: 10px;

display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 1fr 1fr 1fr;
`;

const List = styled.li`
display: flex;
flex-direction: row;
list-style-type: none;
`;

const AlignRight = styled.div`
display: flex;
flex-direction: row;
margin-left: auto;
margin-right: 30px;
`;

const GaugeContainer = styled.div`
display: flex;
flex-direction: row;
position: relative;
`;

const GaugeBottom = styled.div`
width: 84px;
border-bottom: 4px solid #BEBEBE;
margin-bottom: 18px;
margin-right: 6px;
border-radius: 1px;

position: absolute;
top: 7px;
left: -90px;
`;

const GaugeTop = styled.div`
width: 60px;
border-bottom: 4px solid rgb(0, 166, 153);
margin-bottom: 18px;
margin-right: 6px;
border-radius: 1px;

position: absolute;
top: 7px;
left: -90px;
`;

const style = (ratio) => ({
  width: `${(ratio*84).toString()}px`,
});

class StaticRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        1: 'Cleanliness',
        2: 'Communication',
        3: 'Check-in',
        4: 'Accuracy',
        5: 'Location',
        6: 'Value',
      },
    };
  }

  render() {
    return (
      <Container>
        {Object.keys(this.state.order).map((data)=> (
          <List key={data}>
              {this.state.order[data]}
              <AlignRight>
                <GaugeContainer>
                  <GaugeBottom />
                  <GaugeTop style={style(this.props.staticData.ratings[data]/5)}/>
                </GaugeContainer>
                {this.props.staticData.ratings[data]}
              </AlignRight>
          </List>
        ))}
      </Container>
    );
  }
}

export default StaticRating;
