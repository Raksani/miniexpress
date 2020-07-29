import React from "react";
import styled from "styled-components";

const HumidityContainer = styled.div`
position: absolute;
left: 42.2%;
right: 43.46%;
top: 7.23%;
bottom: 19.88%;
`

const HumidityText = styled.div`
position: absolute;
left: 15.79%;
right: 27.49%;
top: 2.48%;
bottom: 75.21%;

font-family: Exo;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.1em;

color: #242331;
`
const Humid = styled.div`
position: absolute;
left: 44.44%;
right: 20.47%;
top: 47.93%;
bottom: 8.27%;

font-family: Exo;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 53px;
/* identical to box height */
display: flex;
align-items: center;

color: #636169;
`
const HumidIcon = styled.div`
position: absolute;
left: 0%;
right: 64.11%;
top: 38.4%;
bottom: 5.56%;
`
const Line = styled.div`

position: absolute;
left: 100%;
right: -70.76%;
top: 0%;
bottom: 100%;

`

const Humidity = () => {
    let humid = '0.8'
    return (
        <HumidityContainer>
            <HumidityText>Humidity</HumidityText>
            <HumidIcon>
            <svg width="62" height="69" viewBox="0 0 62 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61.3761 33.3706C61.3761 44.9079 51.8351 54.368 40.1114 54.368C28.6031 54.368 19.1243 45.0956 19.1243 33.3706C19.1243 28.5822 22.4539 21.6603 29.0188 12.7958C33.7842 6.36519 38.4698 1.31714 38.6677 1.10526C39.452 0.26224 40.7907 0.260783 41.5776 1.09599C47.9373 7.83643 61.3761 24.0132 61.3761 33.3706Z" fill="#7FA6FB"/>
            <path d="M61.3765 33.3706C61.3765 44.6424 52.1708 54.2567 40.2419 54.368V0.474915C40.7506 0.504048 41.2287 0.725198 41.578 1.09599C47.9377 7.83643 61.3765 24.0132 61.3765 33.3706Z" fill="#6693FB"/>
            <path d="M48.609 43.9064C48.609 57.3422 37.7064 68.2726 24.3043 68.2726C10.9021 68.2726 -0.000488281 57.3422 -0.000488281 43.9064C-0.000488281 38.3737 3.88562 30.3646 11.5503 20.1029C17.1311 12.6289 22.6202 6.77434 22.8513 6.52803C23.6376 5.6915 24.9711 5.6915 25.7572 6.52803C25.9883 6.77434 31.4775 12.6289 37.0583 20.1029C44.7229 30.3646 48.609 38.3737 48.609 43.9064Z" fill="#EEF4FF"/>
            <path d="M48.6093 43.9064C48.6093 57.3423 37.7066 68.2727 24.3044 68.2727V5.90039C24.8556 5.90039 25.3816 6.12816 25.7574 6.52809C25.9885 6.7744 31.4777 12.6289 37.0585 20.103C44.7231 30.3646 48.6093 38.3737 48.6093 43.9064Z" fill="#D9E6FC"/>
            <path d="M18.9932 39.5363C17.9017 39.5363 17.001 38.6475 17.001 37.55C17.001 36.4105 17.9801 35.4623 19.1897 35.5729C20.3006 35.6883 21.0864 36.6739 20.9761 37.746C20.8683 38.7808 20.0007 39.5363 18.9932 39.5363Z" fill="#7FA6FB"/>
            <path d="M29.6169 50.1304C28.5255 50.1304 27.6248 49.2416 27.6248 48.144C27.6248 46.9596 28.6637 46.0501 29.8135 46.1669C30.9109 46.2811 31.7103 47.2562 31.5998 48.34C31.493 49.3659 30.6325 50.1304 29.6169 50.1304Z" fill="#6693FB"/>
            <path d="M32.0885 37.8956L19.3385 50.6083C18.9493 50.9963 18.4393 51.1897 17.9293 51.1897C16.1709 51.1897 15.2624 49.0537 16.5202 47.7983C18.6517 45.673 27.9026 36.4491 29.2702 35.0855C30.0485 34.3108 31.3102 34.3108 32.0885 35.0855C32.8654 35.8615 32.8654 37.1196 32.0885 37.8956Z" fill="#7FA6FB"/>
            <path d="M32.0887 37.8956L24.3044 45.657V40.0369L29.2704 35.0855C30.0486 34.3108 31.3104 34.3108 32.0887 35.0855C32.8656 35.8615 32.8656 37.1196 32.0887 37.8956Z" fill="#6693FB"/>
            </svg>
            </HumidIcon>
            <Humid>{humid}</Humid>
            <Line>
                <svg width="2" height="122" viewBox="0 0 2 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.999512" x2="0.999512" y2="121.004" stroke="#BFBEBE"/>
                </svg>
            </Line>
        </HumidityContainer>
    )
}

export default Humidity
