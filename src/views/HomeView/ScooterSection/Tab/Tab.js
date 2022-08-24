import styled from "styled-components"



const Tab = ({title, img}) => (
<Container>
<img src={img} alt="tab ico" />
<h2>{title}</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores labore quis et, quaerat quam!</p>
</Container>
)

    export default Tab;

    const Container = styled.div`
        width: 43%;
        height: 43%;
        border-radius: 15px;
        background-color: #fff;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 25px;
        img {
            width: 60px;
            margin-bottom: 20px;
        }
        transition: all .3s ease;
        &:hover{
        transform: translateX(-20px);
        cursor: pointer;
        }
        `




