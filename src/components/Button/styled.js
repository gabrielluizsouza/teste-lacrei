import styled from "styled-components";



export const Container = styled.div`
  cursor: pointer;
  width: 19.2rem;
  height: 4.8rem;
  border-radius: 8px;
  background-color: ${(props) => props.type === "Pessoa Usuária" ? "#018762" : "#FFFFFF"};
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(1, 135, 98, 1);
  &:hover{ opacity: 0.8;};

`
export const Text = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.455rem;
    padding-top: 1.2rem;
    color: ${(props) => props.type === "Pessoa Usuária" ? "#FFFFFF" : '#018762'};

`