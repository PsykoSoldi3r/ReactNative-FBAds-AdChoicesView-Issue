import * as React from "react";
import { AdChoicesView } from "react-native-fbads";
import styled from "styled-components/native";

export const Banner = () => {
    return (
        <Container>
            <AdChoicesView />
        </Container>
    )
}

const Container = styled.View`
    padding: 20px;
    background-color: red;
`;
