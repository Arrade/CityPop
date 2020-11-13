import React from "react";
import styled from "styled-components";
import { TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ContinueButton = styled(LinearGradient)`
  width: 330px;
  padding: 15px;
  border-radius: 10px;
`;

const ButtonBox = styled(TouchableHighlight)`
  width: 330px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  height: 30px;
  background-color: transparent;
  color: #fff;
  text-align: center;
  font-size: 19px;
`;

const BlueButton = ({ onPress, children }) => {
    return (
      <ButtonBox onPress={onPress}>
        <ContinueButton
          start={[0, 1]}
          end={[1, 0]}
          colors={["#04D0FF", "#04D0FF"]}
        >
          <ButtonText>{children}</ButtonText>
        </ContinueButton>
      </ButtonBox>
    );
  };

  export default BlueButton;