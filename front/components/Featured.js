import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;
const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;


export default function Featured(){
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>
                            Lorem ipsumm f sd fsd f sd fsdf sdflsdf sk dfsld
                            fsdf   f fsd f dfsd fds  fds fdgfdg fdg fd gdfg dfgdfgdfg 
                            dfgdfgdfgdf gdfgdfgdf gdfgdf g
                        </Desc>
                    </div>
                    <div>
                        <img src="https://mycommerce-e2.s3.amazonaws.com/1701945942450.png" alt="" />
                    </div>
                </Wrapper>
            </Center>
        </Bg>
    );
}