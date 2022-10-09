import styled from "styled-components";
import OKico from '../../../assets/images/OK-ico.png';
const MessageSent = () => {
  return (
    <Container>
      <CloseBtn onClick={(e) => e.target.parentElement.style.display = 'none'}>
        <span></span>
      </CloseBtn>
        <img src={OKico} alt="OK ico" />
      <p>wiadomość wysłana!</p>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20%;
  right: 200px;
  width: 470px;
  height: 103px;
  background-color: #f3b634;
  font-size: 18px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
  font-weight: bold;
  letter-spacing: 3px;

  img {
    position: absolute;
    left: 60px;
  }
`;

const CloseBtn = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {

        width: 100%;
        height: 3px;
        display: block;
        background-color: black;
        transform: rotate(-45deg);
        position: relative;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
        background-color: black;
        transform: rotate(90deg);


        }
    }
`

export default MessageSent;
